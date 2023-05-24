// Global Variables
let playBtnDiv = document.querySelector(`#playBtn`);
let questionDiv = document.querySelector(`#question`);
let answerDiv = document.querySelector(`#answerChoices`);

// Initial State
function init(){
    console.log('This is my initial state. Welcome!');
};

// Functions
function startQuiz(event){
    console.log(event);
    console.log(`This function will begin the game`);
};

// Event Listeners and Init call
init();
playBtn.addEventListener("click", startQuiz);