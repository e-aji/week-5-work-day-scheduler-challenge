
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

    // Call the hourUpdater function when the document is ready
      hourUpdater();

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

  // Restore user input data saved in local storage and display on page in specific element when refreshed

  $('.description').each(function(){

    var time = $(this).parent().attr('id');
    $(this).val(localStorage.getItem(time));
  
    }); 

  // Displays the current date in the header of the page.
  
  $('#currentDay').text(dayjs().format('dddd, MMM D, YYYY'));
  
});
