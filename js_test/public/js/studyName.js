 const studyForm = new Array();
 const writeStudy = new Array();
 const studyInput = new Array();
 let saveStudy = ["", "", "", "", "", ""];

 //localstorage에 저장될 키 이름 배열
 const STUDYNAME = [
    "study1",
    "study2",
    "study3",
    "study4",
    "study5",
    "study6"
];

 for(let i = 0; i < STUDYNAME.length; i++){
    studyForm[i] = document.querySelector(`#study${i+1}`);
    writeStudy[i] = document.querySelector(`#stName${i+1}`);
    studyInput[i] = document.querySelector(`#study${i+1} input`);
}


function getStudy(event){
    //form은 event 발생 시 새로 고침이 되기 때문에 그 동작을 막아준다
    event.preventDefault();


    for(let i = 0; i < STUDYNAME.length; i++){
        //input에 값이 있을 시 동작
        if(studyInput[i].value !== ""){
            studyInput[i].classList.add("hidden");
            const studyName = studyInput[i].value;
            //localstorage에 해당 키와 값을 저장
            localStorage.setItem(STUDYNAME[i], studyName);
            //저장된 값을 확인을 위한 saveStudy 배열에 저장
            saveStudy[i] = localStorage.getItem(STUDYNAME[i]);
            paintStudy(studyName);
        }

    }

}

function paintStudy(study){
    for(let i = 0; i <= 5; i++){
        //저장된 값이랑 불러온 값이 같을 시 innerText를 통해 화면에 출력
        if(saveStudy[i] === study){
            writeStudy[i].innerText = study;
            writeStudy[i].classList.remove("hidden");
        } 
    }
}



for(let i = 0; i < STUDYNAME.length; i++){
    //localstorage에 해당키에 값을 받아온다
    loadName = localStorage.getItem(STUDYNAME[i]);
    saveStudy[i] = localStorage.getItem(STUDYNAME[i]);
    
    // localstorage에 값이 있으면 input창은 필요 없으므로 hidden 클래스를 추가해 없앤다음 paintStudy 호출
    if(loadName !== null){
        studyInput[i].classList.add("hidden");
        paintStudy(loadName);
    }
    
    //input 엔터 시 동작
    studyForm[i].addEventListener("submit", getStudy, false);
    
   
    
}