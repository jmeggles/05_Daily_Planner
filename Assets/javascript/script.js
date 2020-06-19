// jquery document.ready

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
const NOW = moment()
$("#currentDay").text(moment().format('MMMM Do YYYY'))
console.log(moment().format('MMMM Do YYYY'));
var schedule = {
    "": ""
};

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
function buildRow(hour) {
    var time = moment(hour, "H");
    // THEN each timeblock is color coded to indicate it is in the future    
    var timeClass = "future";
    var task = schedule[hour];
    console.log(hour)

    //timeblock is color coded to indicate it is in the present
    if (time.isSame(NOW, "hour")) {
        timeClass = "present"
        console.log(time.isSame(NOW, "hour"));
    }
    // timeblock is color coded to indicate it is in the past
    else if (time.isBefore(NOW)) {
        timeClass = "past"
        console.log(time.isBefore(NOW));
        console.log(timeClass);
    }
    // WHEN I view the timeblocks for that day
    var parentEl = $("<div>")
    parentEl.addClass("row time-block")

    var hourEl = $("<div>")
    hourEl.addClass("col-1 hour")
    hourEl.text(time.format("hA"))
    console.log(time.format("hA"));

    // WHEN I click into a timeblock

    var textEl = $("<textarea>")
    textEl.addClass("col-10 description " + timeClass)
    textEl.val(task)
    console.log(timeClass);

    var btn = $("<button>")
    btn.addClass("saveBtn col-1")

    // adding save button from fontawesome
    var icon = $("<i>")
    icon.addClass("fa fa-save")
    console.log();

    // applying save button 
    btn.append(icon)
    parentEl.append(hourEl, textEl, btn)
    console.log();

    $(".container").append(parentEl)
}
// adding all rows for the day
for (var i = 8; i <= 18; i++) {
    buildRow(i)
    console.log(buildRow);
}
// THEN the text for that event is saved in local storage
function init() {
    var storedTasks = JSON.parse(localStorage.getItem("container"));

    // Update tasks if retrieved
    if (storedTasks !== null) {
        tasks = storedTasks;
    }

    rendertasks();
}
// WHEN I click the save button for that timeblock
function storetasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Task is submitted
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    tasks.push(taskText);
    taskInput.value = "";

    storetasks();
    rendertasks();
});
// WHEN I refresh the page
taskList.addEventListener("click", function (event) {
    var element = event.target;

    // If that element is a button...
    if (element.matches("saveBtn") === true) {
        var index = element.parentElement.getAttribute("data-index");
        tasks.splice(index, 1);

        // THEN the saved events keep with dom traversal
        storetasks();
        rendertasks();
    }
});
