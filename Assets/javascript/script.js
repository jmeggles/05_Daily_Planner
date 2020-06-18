// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
const NOW = moment();
var schedule = {
    '14': ""
};


function buildRow(hour) {
    var time = moment(hour, "H");
    var timeClass = "future";
    var task = schedule[hour];

    if (time.isSame(NOW, "hour")) {
        timeClass = "present"
    }
    else if (time.isBefore(NOW)) {
        timeClass = "past"
    }

    var parentEl = $("<div>")
    parentEl.addClass("row time-block")

    var hourEl = $("<div>")
    hourEl.addClass("col-1 hour")
    hourEl.text(time.format("hA"))

    var textEl = $("<textarea>")
    textEl.addClass("col-10 description " + timeClass)
    textEl.val(task)

    var btn = $("<button>")
    btn.addClass("saveBtn col-1")

    var icon = $("<i>")
    icon.addClass("fa fa-save")

    btn.append(icon)
    parentEl.append(hourEl, textEl, btn)

    $(".container").append(parentEl)
}

for (var i = 12; i <= 20; i++) {
    buildRow(i)
}


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours



// WHEN I view the timeblocks for that day



// THEN each timeblock is color coded to indicate whether it is in the past, present, or future



// WHEN I click into a timeblock



// THEN I can enter an event



// WHEN I click the save button for that timeblock



// THEN the text for that event is saved in local storage



// WHEN I refresh the page



// THEN the saved events persist
