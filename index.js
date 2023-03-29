let todoInput=document.querySelector(".input");
let addTodoButton=document.querySelector(".button");
let showTodos=document.querySelector(".todos-container");
let todo;
let todoList=[];


function uuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function (param){
        let number=Math.random()*16 |0;
        let randomNumber=param=='x'?number:(number & 0x3 | 0x8);
        return randomNumber.toString(16);
    });
}



addTodoButton.addEventListener("click",(e)=>{
    e.preventDefault();//actually what it does the reloading and submission is going before it will stops because form at every time behaves like reloading
    todo=todoInput.value;
    if(todo.length>0){
        todoList.push({id:uuid() ,todo, iscompleted:false})
    }
   
  renderTodoList(todoList);
  todoInput.value="";
})

showTodos.addEventListener("click",(e)=>{
    let key=e.target.dataset.key;
    let delTodokey=e.target.dataset.todokey;
    todoList=todoList.map(todo.id===key?{...todo,iscomplted:!todo.iscompleted}:todo);
    todoList=todoList.filter(todo=>todo.id!==delTodokey)
    renderTodoList(todoList);
   console.log(todoList);
})

function renderTodoList(todoList){
    console.log(todoList);
    showTodos.innerHTML=todoList.map(({id,todo,iscompleted})=>`<div><input id="item-${id}" type="checkbox" data-key=${id} ${iscompleted ? "checked":""}><label for="item-${id}" class="todo todo-text t-pointer ${iscompleted ? "checked-todo":""}" data-key=${id}>${todo}</label><button class="button cursor"><span data-todokey=${id} class="del-btn material-icons >delete</span></button></div>`)
}
renderTodoList();