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
    //리스트 입력 form
    toDoForm[i] = document.querySelector(`#todo-form${i+1}`);
    //리스트 입력 부분
    toDoInput[i] = document.querySelector(`#todo-form${i+1} input`);
    //리스트 목록 ul
    toDoList[i] = document.querySelector(`#todo-list${i+1}`);
    //목록을 저장할 배열
    toDos[i] = new Array();
 }

 function saveToDos(){
    for(let i = 0; i < TODONAME.length; i++){
        localStorage.setItem(TODONAME[i], JSON.stringify(toDos[i]));

    }
 }



 function deleteToDo(event){
    //클릭된 element 저장
    const li = event.target.parentElement;

    for(let i = 0; i < TODONAME.length; i++){
        // 클릭된 li에 제외 한 새로운 배열 생성 후 해당 li 삭제
        toDos[i] = toDos[i].filter((toDo) => toDo.id !== parseInt(li.id));
        li.remove();
        saveToDos();
    }
 }

 function paintTodos(newTodo, index){

        //화면에 출력할 리스트 생성
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
            //input에 값이 있을시 해당 값을 변수에 저장하고 input에 다시 입력할 수 있도록 값을 초기화 해준다
            const newTodo = toDoInput[i].value;
            toDoInput[i].value = "";
            //삭제시 정확한 목록을 알기위해 데이터와 현재 Date를 id로 준다
            const newTodoObj = {
                text: newTodo,
                id: Date.now()
            };

            
            if(newTodoObj.text !== ""){
                toDos[i].push(newTodoObj);
                //입력되야 할 form을 알아야하기 때문에 index도 같이 전달
                paintTodos(newTodoObj, i);
                saveToDos();
            }
        }
    }
 }


 for(let i = 0; i < TODONAME.length; i++){
     toDoForm[i].addEventListener("submit", handleToDosubmit, false);   

     const savedToDos = new Array();
     //localstorage에 있는 값들을 변수에 저장
     //saveToDos는 2차원 배열
     savedToDos[i] = JSON.parse(localStorage.getItem(TODONAME[i]));

     for(let e = 0; e < savedToDos[i].length; e++){
        //데이터가 있을시 객체로 저장
        if(savedToDos[i][e].text !== null){
            const newTodoObj = {
                text: savedToDos[i][e].text,
                id: savedToDos[i][e].id
            };
            
            toDos[i].push(newTodoObj);
            //입력되야 할 form을 알아야하기 때문에 index도 같이 전달
            paintTodos(newTodoObj, i);

        }
    }
 }