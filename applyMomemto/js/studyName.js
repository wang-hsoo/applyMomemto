 const studyForm = new Array();
 const writeStudy = new Array();
 const studyInput = new Array();
 let saveStudy = ["", "", "", "", "", ""];

 //localStorage에 저장될 키 값
 const STUDYNAME = [
    "study1",
    "study2",
    "study3",
    "study4",
    "study5",
    "study6"
];

 for(let i = 0; i < STUDYNAME.length; i++){
    //제목입략 form
    studyForm[i] = document.querySelector(`#study${i+1}`);
    //입력한 제목을 보여주는 부분
    writeStudy[i] = document.querySelector(`#stName${i+1}`);
    //제목을 입력하는 부분
    studyInput[i] = document.querySelector(`#study${i+1} input`);
}


function getStudy(event){
    event.preventDefault();
    for(let i = 0; i < STUDYNAME.length; i++){
        if(studyInput[i].value !== ""){
            //해당 input에 값이 있으면 Input을 hidden
            studyInput[i].classList.add("hidden");
            //해당 값을 localstorage에 저장
            const studyName = studyInput[i].value;
            localStorage.setItem(STUDYNAME[i], studyName);
            //해당 값을 데이터 확인을 위한 배열에 입력
            saveStudy[i] = localStorage.getItem(STUDYNAME[i]);
         
            paintStudy(studyName);
        }

    }

}

function paintStudy(study){
    for(let i = 0; i <= 5; i++){
        //저장된 값이랑 받아온 값이 같으면 h2에 깂을 입력하고 hidden 을 지움
        if(saveStudy[i] === study){
            writeStudy[i].innerText = study;
            writeStudy[i].classList.remove("hidden");
        } 
    }
}





for(let i = 0; i < STUDYNAME.length; i++){
    //해당 키 값에 localStorage에 데이터를 불러옴
    loadName = localStorage.getItem(STUDYNAME[i]);
    saveStudy[i] = localStorage.getItem(STUDYNAME[i]);
    
    
    if(loadName !== null){
        //데이터가 있을 시 input 창을 hidden
        studyInput[i].classList.add("hidden");
        paintStudy(loadName);
    }

    //제목이 있을 경우 제목을 클릭하면 저장된 데이터가 지워지고 다른 이름 설정 가능
    writeStudy[i].addEventListener("click", () => {
        localStorage.removeItem(STUDYNAME[i]);
        writeStudy[i].classList.add("hidden");
        studyInput[i].classList.remove("hidden");
        studyInput[i].value = "";
    });


    

    studyForm[i].addEventListener("submit", getStudy, false);
    
   
    
}