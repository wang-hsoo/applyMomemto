const toDoForm = new Array();
const toDoInput = new Array();
const toDoList = new Array();
let toDos = new Array(6);




const TODONAME = [
   "toDo1",
   "toDo2",
   "toDo3",
   "toDo4",
   "toDo5",
   "toDo6"
];

for(let i = 0; i < TODONAME.length; i++){
    toDoForm[i] = document.querySelector(`#todo-form${i+1}`);
    toDoInput[i] = document.querySelector(`#todo-form${i+1} input`);
    toDoList[i] = document.querySelector(`#todo-list${i+1}`);
    toDos[i] = new Array();
 }

 function saveToDos(){
    for(let i = 0; i < TODONAME.length; i++){
        localStorage.setItem(TODONAME[i], JSON.stringify(toDos[i]));

    }
 }



 function deleteToDo(event){
    const li = event.target.parentElement;

    for(let i = 0; i < TODONAME.length; i++){
        toDos[i] = toDos[i].filter((toDo) => toDo.id !== parseInt(li.id));
        li.remove();
        saveToDos();
    }
 }

 function paintTodos(newTodo, index){

        const li = document.createElement("li");
        li.id = newTodo.id;
        const span = document.createElement("span");
        span.innerText = newTodo.text;
        
        const button = document.createElement("button");
        button.innerText = "X";

        li.appendChild(span);
        li.appendChild(button);
        toDoList[index].appendChild(li);
    


    button.addEventListener("click", deleteToDo);
    
 }

 function handleToDosubmit(event){
    event.preventDefault();
     for(let i = 0; i < TODONAME.length; i++){
        if(toDoInput[i].getText !== ""){
            const newTodo = toDoInput[i].value;
            toDoInput[i].value = "";
            const newTodoObj = {
                text: newTodo,
                id: Date.now()
            };

            
            if(newTodoObj.text !== ""){
                toDos[i].push(newTodoObj);
                paintTodos(newTodoObj, i);
                saveToDos();
            }
        }
    }
 }


 for(let i = 0; i < TODONAME.length; i++){
     toDoForm[i].addEventListener("submit", handleToDosubmit, false);   

     const savedToDos = new Array();
     savedToDos[i] = JSON.parse(localStorage.getItem(TODONAME[i]));

     for(let e = 0; e < savedToDos[i].length; e++){

        if(savedToDos[i][e].text !== null){
            const newTodoObj = {
                text: savedToDos[i][e].text,
                id: savedToDos[i][e].id
            };
            toDos[i].push(newTodoObj);
            paintTodos(newTodoObj, i);

        }
    }
 }