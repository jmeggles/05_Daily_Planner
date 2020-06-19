// jquery document.ready

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
const NOW = moment()
$("#currentDay").text(moment().format('MMMM Do YYYY'))
console.log("time");
var schedule = {
    '14': ""
};

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
function buildRow(hour) {
    var time = moment(hour, "H");
    console.log("hour", "H");
// THEN each timeblock is color coded to indicate it is in the future    
    var timeClass = "future";
    var task = schedule[hour];
    console.log("future")

    
//timeblock is color coded to indicate it is in the present
    if (time.isSame(NOW, "hour")) {
        timeClass = "present"
        console.log("present");
    }

// timeblock is color coded to indicate it is in the past
    else if (time.isBefore(NOW)) {
        timeClass = "past"
        console.log("past");
    }

    var parentEl = $("<div>")
    parentEl.addClass("row time-block")
    console.log("row time-block")

    var hourEl = $("<div>")
    hourEl.addClass("col-1 hour")
    hourEl.text(time.format("hA"))
    console.log("col-1 hour");
    console.log("ha")

    // THEN the text for that event is saved in local storage
    var textEl = $("<textarea>")
    textEl.addClass("col-10 description " + timeClass)
    textEl.val(task)

    var btn = $("<button>")
    btn.addClass("saveBtn col-1")

    // adding save button from fontawesome
    var icon = $("<i>")
    icon.addClass("fa fa-save")
    console.log("added save icon");

    // applying save button 
    btn.append(icon)
    parentEl.append(hourEl, textEl, btn)
    console.log("save button");

    $(".container").append(parentEl)
}
// adding all rows for the day
for (var i = 8; i <= 18; i++) {
    buildRow(i)
    console.log("each row");
}





// WHEN I view the timeblocks for that day







// WHEN I click into a timeblock






// WHEN I click the save button for that timeblock







// WHEN I refresh the page



// THEN the saved events keep with dom traversal
