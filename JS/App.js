//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(e) {
  e.preventDefault();

  //Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

    
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //edit buttom uchun
  const editButton = document.createElement("button");
  editButton.innerHTML = "<i class='fas fa-edit'></i>";
  editButton.classList.add("edit-btn");
  todoDiv.appendChild(editButton);

  //attach final Todo
  todoList.appendChild(todoDiv);
}



function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");    
    todo.addEventListener("transitionend", (e) => {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }

  //edit todo

//     if(item.classList[0] === 'edit-btn'){ 
//     const todo = item.parentElement; 
//     const input=document.createElement('input');
//     input.type='text';
//     input.value=todoInput.value;    
//     todo.removeChild(todoInput);
//     button.textContent='<i class="fas fa-save"></i>';
//   }else if(button.textContent==='<i class="fas fa-save"></i>'){
//     const input=newTodo.ElemantChild;
//     const newTodo=document.createElement('newTodo')
//     newTodo.textContent=input.value;
//     newTodo.insertBefore(newTodo, input);
//     newTodo.removeChild(input);
//     button.textContent="<i class='fas fa-edit'></i>"
// }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

