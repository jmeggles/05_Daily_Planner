# The Daily Planner
This is a daily work planner to keep track of tasks throughout the day.    

<img src="/Assets/images/screenshot1.png" width=600>

- (https://github.com/jmeggles/Daily_Planner)
- (https://jmeggles.github.io/Daily_Planner/)

## How it works
Click the link which opens the planner.  Add events or tasks in the allotted timeblocks. The color of that block will reflect the time of day based on past (grey), present (red), or future (green), which is to let you know if/when that task should be completed.   These can be saved using the blue save button next to that timeblock.  It saves to local storage for quick access.  

### Criteria needed
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Motivation
This project was the second assignemnt using web APIs (third party). It will be useful to keep track of daily activities as projects get more involved and time can easily get away.  This project will assist in better organization of tasks which can be used outside of the work schedule as well.

## Tech/framework used
- JQuery
- Javascript
- CSS
- HTML
- CSS bootstrap
- Javascript library
- Moments.js
- Fontawesome

## Versioning
This is the only version but will update in the future.

## Authors
Jody Eggleston

## License
None

## Acknowledgments
- John Dinsmore
- Jorge Alvarez
- Ben Benson WebDev Tutoring
- (https://www.w3schools.com/)




### Notes
Although this used less code than previous projects, it was still quite challenging to utilize what I learned thus far and apply it accurately.  Trying to know how to apply fontawesome into the code wasn't easy but I was shown how to keep the code to a minimum by omitting it in HTML, using it only in JS since it pulls from the library through the links attached in HTML.
