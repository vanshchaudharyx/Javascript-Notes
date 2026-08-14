//Todo App-->
//list-to show all todos
// add-to add a todo
// delete-to delete a task
// quit-to exit the todo
//we build todo list in form of array-
let todo = [];
let req = prompt("Please enter your request");

while (true) {
  if (req == "quit") {
    console.log("Quiting App");
    break;
  }
  if (req == "list") {
    for (tasks of todo) {
      console.log("---------------");
      //   console.log(tasks);
      for (let i = 0; i < todo.length; i++) {
        console.log(i, todo[i]);
      }
    }
  } else if (req == "add") {
    let task = prompt("Please enter the task you want to add");
    todo.push(task);
    console.log("Task Added");
  } else if (req == "delete") {
    let idx = prompt("Please enter the task index");
    todo.splice(idx, 1);
    console.log("Task deleted");
  } else {
    console.log("Invalid Choice");
  }
  req = prompt("Please enter your request");
}
