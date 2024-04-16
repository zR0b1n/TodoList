const todoInput = document.getElementById('todoInput');
const addToDo = document.getElementById('addToDo');
let todoWrp = document.getElementById('todoWrp');

todoInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        todoFunc();
    }
});

addToDo.addEventListener('click', function(){
    todoFunc();
});

function todoFunc(){
    let toDo = document.createElement('p');
    toDo.innerText = todoInput.value;
    toDo.classList.add('todoStyle');
    todoWrp.appendChild(toDo);
    toDo.addEventListener('click', function(){
        toDo.classList.add('todoComp');
    });
    toDo.addEventListener('dblclick', function(){
        todoWrp.removeChild(toDo);
    });
}