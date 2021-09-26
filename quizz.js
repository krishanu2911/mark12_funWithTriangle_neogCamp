const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");
const correctAnswer = ["90°", "right angled", "a+b+c", "equilateral triangle","one right angle"];
function isValidInput(inputValues){
    let index = 0;
    for(let value of inputValues){
        index = index + 1;
    }
    
    if(index === correctAnswer.length){
        return true;
    } else {
        outputEl.innerText = "Please select all the answers and attempt the entire quiz."
    }
}
function calculateScore(){
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    if(isValidInput(formResult.values())){
        for(let value of formResult.values()){
            if(value === correctAnswer[index]){
                score= score + 1;
            }
            index = index+ 1;
        }
    
        outputEl.innerText = "your score : " + score ;
    }
    // for(let value of formResult.values()){
    //     if(value === correctAnswer[index]){
    //         score= score + 1;
    //     }
    //     index = index+ 1;
    // }

    // outputEl.innerText = "your score : " + score ;

}
submitAnswerBtn.addEventListener("click", calculateScore);