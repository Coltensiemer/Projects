//selectors 
const toDoInput = document.querySelector('.todo-input'); 
const toDoButton = document.querySelector('.todo-button'); 
const toDoContainer= document.querySelector('.todo-container'); 


// Event Listeners 
toDoButton.addEventListener('click', 'addToDo');

//Functions 

function addToDo(event) { 


//Prevent Form from submit 
.event.preventDefault(); 

// Todo 
const toDoDiv = document.createElement("div");
toDoDiv.classList.add("todo"); 
// create IL 
const newToDo = document.createElement("li");
newToDo.innerText = "hello"; 
newToDo.classList.add("item");
toDoDiv.appendChild("newToDo");
//Completed 
const completeButton = document.createElement("button"); 
completeButton.innerText("It works!"); 
completeButton.classList.add("complete"); 
newToDo.appendChild("completeButton"); 

// Delete Button 
const deleteButton = document.createElement("button"); 
deleteButton.innerText("It works!"); 
deleteButton.classList.add("complete"); 
newToDo.appendChild("deleteButton"); 
/// append to todo-list
todoList.appendChild(toDoDiv); 

} 
