
//HTML to load before function executed 
$(document).ready(function () {

  // When save button clicked, the users' input is saved in local storage for that time
  $('.saveBtn').on('click', function(){
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time,value);

    $('.notification').addClass('show');

    setTimeout(function () {
      $('.notification').removeClass('show');

    }, 5000);

  });

  // Function to assign a specific class to each block depending on what hour of day it is 
function hourUpdater () {

  var currentHour = dayjs().hour();
  $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    
    if (blockHour < currentHour){
    $(this).addClass('past');

    }else if (blockHour == currentHour){
      $(this).addClass('present');

    }else {
    $(this).addClass('future');
    }  
  });
}
// Call the hourUpdater function when the document is ready

$(document).ready(function () {

  hourUpdater();
});

// Restore user input data saved in local storage and display on page in specific element when refreshed

$('.description').each(function(){

  var time = $(this).parent().attr('id');
  $(this).val(localStorage.getItem(time));
 
  }); 

 // Displays the current date in the header of the page.
 
 $('#currentDay').text(dayjs().format('MMM D, YYYY'));
});


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.