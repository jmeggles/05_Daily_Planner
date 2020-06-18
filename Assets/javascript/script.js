var taskInput = document.querySelector("#task-text");
var taskForm = document.querySelector("#task-form");
var taskList = document.querySelector("#task-list");
var taskCountSpan = document.querySelector("#task-count");


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner, items should appear from last save



// THEN the current day is displayed at the top of the calendar



// WHEN I scroll down



// THEN I am presented with timeblocks for standard business hours
function renderTasks() {
    // Clear taskList element and update taskCountSpan
    taskList.innerHTML = "";
    taskCountSpan.textContent = task.length;
  
    // Render a new li for each task........don't want to make a new line, only write withint one
    for (var i = 0; i < task.length; i++) {
      var task = tasks[i];
  
      var li = document.createElement("li");
      li.textContent = task;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Complete";
  
      li.appendChild(button);
      taskList.appendChild(li);
    }
  }


// WHEN I view the timeblocks for that day



// THEN each timeblock is color coded to indicate whether it is in the past, present, or future



// WHEN I click into a timeblock



// THEN I can enter an event



// WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var taskText = taskInput.value.trim();
  
    // Return from function early if submitted taskText is blank
    if (taskText === "") {
      return;
    }
  
    // Add new task to array, clear the input ......refresh page??
    // task.push(taskText);
    // taskInput.value = "";
  
    // Re-render the list
    rendertasks();
  });
  


// WHEN I refresh the page



// THEN the saved events persist


