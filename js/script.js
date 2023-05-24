// Global Variables
let playBtnDiv = document.querySelector(`#playBtn`);
let questionDiv = document.querySelector(`#question`);
let answerDiv = document.querySelector(`#answerChoices`);

// Initial State
function init(){
    questionDiv.innerHTML = `Click the button below to start the quiz.`;
};

// Functions
function startQuiz(){
    let q1 = 'What is the capitol of Florida';
    let a1 = ['Miami', 'Houston', 'Walt Disney World', 'Tallahassee'];

    for (let i = 0; i < a1.length; i++){
        questionDiv.innerHTML = q1;
        answerDiv.innerHTML = a1;
        answerDiv.addEventListener("click", a1);
    }
};

// Event Listeners and Init call
init();
playBtn.addEventListener("click", startQuiz);