// Global Variables
let playBtnDiv = document.querySelector(`#playBtn`);
let questionDiv = document.querySelector(`#question`);
let answerDiv = document.querySelector(`#answerChoices`);
let resultsDiv = document.querySelector(`#results`);
// Response Div Buttons; To be used and changed in each function
let a = document.querySelector(`#a`);
let aTxt = document.querySelector(`#a-txt`);

let b = document.querySelector(`#b`);
let bTxt = document.querySelector(`#b-txt`);

let c = document.querySelector(`#c`);
let cTxt = document.querySelector(`#c-txt`);

let d = document.querySelector(`#d`);
let dTxt = document.querySelector(`#d-txt`);

// Database of states and capitols
let states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
let capitols = ['Montgomery', 'Jueau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Tallahassee', 'Atlanta', 'Honolulu', 'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Albany', 'Raleigh', 'Bismarck', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne'];

// Correct and incorrect responses need to be added for results
let correct = 0;
let incorrect = 0;
let score = [`${correct - incorrect}/50`];

// Initial State
function init(){
    questionDiv.innerHTML = `Click the button below to start the quiz.`;

    // When button is clicked, quiz begins
    playBtnDiv.addEventListener("click", q1);
};

// Functions

// Function for first state; Will be repeated 50 times in alphabetical order
function q1(){
    let q1 = `What is the capitol of ${states[0]}`;
    questionDiv.innerHTML = q1;
    let a1 = ['Birmingham', 'Biloxi', 'Talladega', `${capitols[0]}`];
    playBtnDiv.innerHTML = "Next State";
    let r1 = [""];

    let answerOption1 = a1[0];
    let answerOption2 = a1[1];
    let answerOption3 = a1[2];
    let answerOption4 = a1[3];

    aTxt.innerHTML = `${answerOption1}`;
    bTxt.innerHTML = `${answerOption2}`;
    cTxt.innerHTML = `${answerOption3}`;
    dTxt.innerHTML = `${answerOption4}`;

    a.addEventListener("input", checkA1);
    b.addEventListener("iput", checkA1);
    c.addEventListener("input", checkA1);
    d.addEventListener("input", checkA1);

};


function checkA1(){
    if (q1 === q1.answerOption4) {
        console.log('correct');
    } else {
        console.log('Incorrect');
    }
}

// Event Listeners and Init call
init();