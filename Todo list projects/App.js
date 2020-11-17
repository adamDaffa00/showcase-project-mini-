


// selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// events listener
document.addEventListener("DOMContentLoaded",getLocalTodos)
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("change",filterTodo);
// function


function addTodo(event){
    event.preventDefault();
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item");
    todoDiv.append(newTodo);
    
    // save localtodo
    saveLocalTodos(todoInput.value)
    
    // check mark button
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-button");
    completeButton.innerHTML = '<i class="fas fa-check"> </i>';
    todoDiv.appendChild(completeButton);
    
    // check trash button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    todoDiv.appendChild(trashButton);
  
    // append to list
    todoList.appendChild(todoDiv);

    todoInput.value = '';
  
}


// delete btn list
function deleteCheck(e){
  let item = e.target;
 
  e.preventDefault();
  if(item.classList[0] === "trash-button"){
    // fall animation
    
    item.parentElement.classList.add("fall");
   
    
    setTimeout(function() {
      item.parentElement.remove();
    },500);
    removeLocalTodo(item.parentElement)
    
  }
  
  
  
  if(item.classList[0] === "complete-button"){
    item.parentElement.classList.toggle("completed");
  }
}



function filterTodo(e){
  
  const todos = todoList.querySelectorAll(".todo");
 
  todos.forEach(function(todo){
      switch (e.target.value) {
        case "All":
          todo.style.display="flex";
          break;
        case "completed":
          
          if (todo.classList.contains("completed")) {
            
            todo.style.display="flex";
            
          } else {
            
           todo.style.display="none";
           
          }
          break;
        
        case "uncompleted":
         
          if(!todo.classList.contains("completed")){
            
            todo.style.display="flex";
            
          }else{
            todo.style.display="none";
          }
         break;
      }
    });

}



// save local data with local storage

function saveLocalTodos(todo){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  todos.push(todo)
  localStorage.setItem('todos',JSON.stringify(todos))
}

function getLocalTodos(){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  todos.forEach( function (todo){
    // create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo
    newTodo.classList.add("todo-item");
    todoDiv.append(newTodo);
    
    
    
    // check mark button
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-button");
    completeButton.innerHTML = '<i class="fas fa-check"> </i>';
    todoDiv.appendChild(completeButton);
    
    // check trash button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    todoDiv.appendChild(trashButton);
  
    // append to list
    todoList.appendChild(todoDiv);
  
  })
}



function removeLocalTodo(todo){
  let todos;

  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todos.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex),1);
  localStorage.setItem(JSON.stringify(todos));
}