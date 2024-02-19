# week-5-work-day-scheduler-challenge

## Description 

The aim of this project was to create a workday scheduler that can be used each day of the week to plan a busy work schedule. The user can use the scheduler to add important events daily so they can manage their time mroe effectively. Third party APIs such as Bootstrap, Day.js and jQuery were instrumental in the creation and functionality of this project. 

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Usage 

* Day.js has been used to make sure that the correct day and date is always displayed in the header of the webpage.
* This scheduler is broken up into nine timeblocks for a full workday, covering the hours of 9:00am-17:00pm. 
* Each time block covers an hour and has a text area where the user can input a task that would like to complete in that time.
* Each time block is colour coded to reflect the time of day and if it corresponds to being past, present or future. Past events will be in grey, present events in orange and future events in green. 
* Using the save button present for each hour block, the user can then save the input into local storage.
* This means that when the user revisits the webpage or refreshes, the text that they have inputted will always be there to be viewed until they decide to delete it. 
* While saved in local storage, the event input is saved with the corresponding time so it is always displayed in that time block.  


## Images 

Work Day Scheduler - Full Page 

![Work Day Scheduler - Full Page ](https://github.com/e-aji/week-5-work-day-scheduler-challenge/assets/156595423/d29d66df-1a38-402d-9b38-8de2d651f339)


Screenshot showing how events are saved in local storage 

<img width="1439" alt="Work Day Scheduler - Local Storage" src="https://github.com/e-aji/week-5-work-day-scheduler-challenge/assets/156595423/49054f28-39f9-4a02-8f4f-704118ea67f2">


## Links 

Link to deployed application - https://e-aji.github.io/week-5-work-day-scheduler-challenge/ 
