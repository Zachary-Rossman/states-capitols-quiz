// Global Variables
let playBtnDiv = document.querySelector(`#playBtn`);
let questionDiv = document.querySelector(`#question`);
let answerDiv = document.querySelector(`#answerChoices`);
let resultsDiv = document.querySelector(`#results`);
// Response Div Buttons; To be used and changed in each function
let answerOptions = {
    a: document.querySelector(`#a`),
    b: document.querySelector(`#b`),
    c: document.querySelector(`#c`),
    d: document.querySelector(`#d`),
};

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
    let r1 = 'Birmingham';
    let r2 = 'Biloxi';
    let r3 = 'Talladega';
    let a1 = `${capitols[0]}`;
    playBtnDiv.innerHTML = "Next State";

    let answerOption1 = `${r1}`;
    let answerOption2 = `${r2}`;
    let answerOption3 = `${r3}`;
    let answerOption4 = `${a1}`;

    answerOptions.a.innerHTML = `${answerOption1}`;
    answerOptions.b.innerHTML = `${answerOption2}`;
    answerOptions.c.innerHTML = `${answerOption3}`;
    answerOptions.d.innerHTML = `${answerOption4}`;

    answerOptions.a.addEventListener("click", checkA1);
    answerOptions.b.addEventListener("click", checkA1);
    answerOptions.c.addEventListener("click", checkA1);
    answerOptions.d.addEventListener("click", checkA1);

    function checkA1(){
        if (answerOptions = answerOption1) {
            console.log('r1');
        } else if (answerOptions = answerOption2) {
            console.log('r2');
        } else if (answerOptions = answerOption3) {
            console.log('r3');
        } else if (answerOptions = answerOption4) {
            console.log('a1');
        }
    }
        
};

// Event Listeners and Init call
init();