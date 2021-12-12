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
        //입력받은 배열을 localstorage 문자열로 저장
        localStorage.setItem(TODONAME[i], JSON.stringify(toDos[i]));

    }
 }



 function deleteToDo(event){
     //클릭 된 element의 부모를 알수 있다
    const li = event.target.parentElement;


    for(let i = 0; i < TODONAME.length; i++){
        //filter를 통해 선택된 아이디에 나머지를 새로운 배열에 넣어주고 해당 li는 삭제한다
        toDos[i] = toDos[i].filter((toDo) => toDo.id !== parseInt(li.id));
        li.remove();
        saveToDos();
    }
 }

 function paintTodos(newTodo, index){
        //해당되는 form에 ul을 찾기 위해 값과 index를 매개변수로 받는다
        // li에 span과 button을 생성
        const li = document.createElement("li");
        li.id = newTodo.id;
        const span = document.createElement("span");
        span.innerText = newTodo.text;
        
        const button = document.createElement("button");
        button.innerText = "X";


        li.appendChild(span);
        li.appendChild(button);
        //해당되는 역역에 추가해준다
        toDoList[index].appendChild(li);
    


    button.addEventListener("click", deleteToDo);
    
 }

 function handleToDosubmit(event){
    event.preventDefault();
     for(let i = 0; i < TODONAME.length; i++){
        if(toDoInput[i].getText !== ""){
            //입력 받은 값을 저장해주고 해당 input을 초기화해준다
            const newTodo = toDoInput[i].value;
            toDoInput[i].value = "";
            //입력받은 값과 삭제를 할때 정확한 요소를 알기 위해 클릭했을 때에 date값을 id로 준다
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

     //localStorage에 저장된 값을 받아옴
     const savedToDos = new Array();
     savedToDos[i] = JSON.parse(localStorage.getItem(TODONAME[i]));

     //savedToDos는 2차원 배열이기 때문에 해당 배열안에 배열을 확인하기위해서 반복문을 한번 더 해준다
     for(let e = 0; e < savedToDos[i].length; e++){

        //값이 있을 시 해당되는 텍스트와 아이디를 저장
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