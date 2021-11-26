 const studyForm = new Array();
 const writeStudy = new Array();
 const studyInput = new Array();
 let saveStudy = ["", "", "", "", "", ""];

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
    event.preventDefault();
    for(let i = 0; i < STUDYNAME.length; i++){
        if(studyInput[i].value !== ""){
            studyInput[i].classList.add("hidden");
            const studyName = studyInput[i].value;
            localStorage.setItem(STUDYNAME[i], studyName);
            saveStudy[i] = localStorage.getItem(STUDYNAME[i]);
            paintStudy(studyName);
        }

    }

}

function paintStudy(study){
    for(let i = 0; i <= 5; i++){
        if(saveStudy[i] === study){
            writeStudy[i].innerText = study;
            writeStudy[i].classList.remove("hidden");
        } 
    }
}



for(let i = 0; i < STUDYNAME.length; i++){
    loadName = localStorage.getItem(STUDYNAME[i]);
    saveStudy[i] = localStorage.getItem(STUDYNAME[i]);
    
    
    if(loadName !== null){
        studyInput[i].classList.add("hidden");
        paintStudy(loadName);
    }
    

    studyForm[i].addEventListener("submit", getStudy, false);
    
   
    
}