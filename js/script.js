// Global Variables
let playBtnDiv = document.querySelector(`#playBtn`);
let questionDiv = document.querySelector(`#question`);
let answerDiv = document.querySelector(`#answerChoices`);
let resultsDiv = document.querySelector(`#results`);
// Response Div Buttons; To be used and changed in each function
let a = document.querySelector(`#a`);

let b = document.querySelector(`#b`);

let c = document.querySelector(`#c`);

let d = document.querySelector(`#d`);

// Database of states and capitols
let states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
let capitols = ['Montgomery', 'Jueau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Tallahassee', 'Atlanta', 'Honolulu', 'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Albany', 'Raleigh', 'Bismarck', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne'];

// Correct and incorrect responses need to be added for results
let correct = 0;
let incorrect = 0;
let score = [];

// Initial State
function init(){
    // Hide answer options in intial state; Only showing when questions are being asked
    answerDiv.style.display = 'none';
    // Directions for user
    questionDiv.innerHTML = `Click the button below to start the quiz.`;

    // When button is clicked, quiz begins
    playBtnDiv.addEventListener("click", q1);
};

// Functions

// Function for first state; Will be repeated 50 times in alphabetical order
function q1(){
    
    // Displays question for user to see
    let q1 = `What is the capitol of ${states[0]}`;
    questionDiv.innerHTML = q1;
    
    // Answer Choices
    let a1 = ['Birmingham', 'Biloxi', 'Talladega', `${capitols[0]}`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Remove play button 
    playBtnDiv.style.display = 'none';

    // Bind options to the a1 array
    let answerOption1 = a1[0];
    let answerOption2 = a1[1];
    let answerOption3 = a1[2];
    let answerOption4 = a1[3];

    // Displays option text in the HTML
    a.innerHTML = `${answerOption1}`;
    b.innerHTML = `${answerOption2}`;
    c.innerHTML = `${answerOption3}`;
    d.innerHTML = `${answerOption4}`;

    // Event listeners for each option
    a.addEventListener("click", function checkA(){
        if (a.click){
            // Hide answers
            answerDiv.style.display = 'none';

            // Increments incorrect score by 1
            incorrect ++;

            // Calls next function
            showResults();
        }
    });

    b.addEventListener("click", function checkB(){
        if (b.click){
            // Hide answers
            answerDiv.style.display = 'none';

            // Increments incorrect score by 1
            incorrect ++;

            // Calls next function
            showResults();
        }
    });

    c.addEventListener("click", function checkC(){
        if (c.click){
            // Hide answers
            answerDiv.style.display = 'none';

            // Increments incorrect score by 1
            incorrect ++;

            // Calls next function
            showResults();
        }
    });

    d.addEventListener("click", function checkD(){
        if(d.click){
            // Hide answers
            answerDiv.style.display = 'none';

            // Inrement correct score by 1
            correct ++;

            // Calls next function
            showResults();
        } 
    })
    // End of this question's function
};

// Shows results at end of quiz from local storage
function showResults(){
    // Calculates score
    score = Math.floor(correct-incorrect);

    //Set score to local storage
    

    // Display the score while pulling from local storage
    resultsDiv.innerHTML = `Incorrect: ${incorrect} <br> Correct: ${correct} <br> Score: ${score}`;
};

// Event Listeners and Init call
init();