// Global Variables
let playBtnDiv = document.querySelector(`#playBtn`);
let questionDiv = document.querySelector(`#question`);
let answerDiv = document.querySelector(`#answerChoices`);
let resultsDiv = document.querySelector(`#results`);

// Database of states and capitols
let states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
let capitols = ['Montgomery', 'Jueau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Tallahassee', 'Atlanta', 'Honolulu', 'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Albany', 'Raleigh', 'Bismarck', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne'];

// Correct and incorrect responses need to be added for results
let correct = 0;

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
    let question = `What is the capitol of ${states[0]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = ['Birmingham', 'Biloxi', 'Talladega', `${capitols[0]}`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a1 = document.createElement('button');
    let b1 = document.createElement('button');
    let c1 = document.createElement('button');
    let d1 = document.createElement('button');


    // Set text for each button
    a1.innerHTML = `<button id = "a1">${answerOptions[0]}</button>`;
    b1.innerHTML = `<button id = "b1">${answerOptions[1]}</button>`;
    c1.innerHTML = `<button id = "c1">${answerOptions[2]}</button>`;
    d1.innerHTML = `<button id = "d1">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a1);
    answerSection.appendChild(b1);
    answerSection.appendChild(c1);
    answerSection.appendChild(d1);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a1.addEventListener("click", function checkA1(){
        if (a1.click){
            // Hide answers
            a1.style.display = 'none';
            b1.style.display = 'none';
            c1.style.display = 'none';
            d1.style.display = 'none';

            // Calls next function
            q2();
        }
    });

    b1.addEventListener("click", function checkB1(){
        if (b1.click){
            // Hide answers
            a1.style.display = 'none';
            b1.style.display = 'none';
            c1.style.display = 'none';
            d1.style.display = 'none';

            // Calls next function
            q2();
        }
    });

    c1.addEventListener("click", function checkC1(){
        if (c1.click){
            // Hide answers
a1.style.display = 'none';
            b1.style.display = 'none';
            c1.style.display = 'none';
            d1.style.display = 'none';

            // Calls next function
            q2();
        }
    });

    d1.addEventListener("click", function checkD1(){
        if(d1.click){
            // Hide answers
a1.style.display = 'none';
            b1.style.display = 'none';
            c1.style.display = 'none';
            d1.style.display = 'none';

            // Inrement correct score by 1
            correct ++;

            // Calls next function
            q2();
        }
    });
};

// Second question
function q2(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[1]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = ['Fairbanks', `${capitols[1]}`, 'Yukon', 'Anchorage'];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a2 = document.createElement('button');
    let b2 = document.createElement('button');
    let c2 = document.createElement('button');
    let d2 = document.createElement('button');


    // Set text for each button
    a2.innerHTML = `<button id = "a1">${answerOptions[0]}</button>`;
    b2.innerHTML = `<button id = "b1">${answerOptions[1]}</button>`;
    c2.innerHTML = `<button id = "c1">${answerOptions[2]}</button>`;
    d2.innerHTML = `<button id = "d1">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a2);
    answerSection.appendChild(b2);
    answerSection.appendChild(c2);
    answerSection.appendChild(d2);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a2.addEventListener("click", function checkA2(){
        if (a2.click){
            // Hide answers
            a2.style.display = 'none';
            b2.style.display = 'none';
            c2.style.display = 'none';
            d2.style.display = 'none';

            // Calls next function
            showResults();
        }
    });

    b2.addEventListener("click", function checkB2(){
        if (b2.click){
            // Hide answers
            a2.style.display = 'none';
            b2.style.display = 'none';
            c2.style.display = 'none';
            d2.style.display = 'none';

            // Increment correct score by 1
            correct ++;

            // Calls next function
            showResults();
        }
    });

    c2.addEventListener("click", function checkC2(){
        if (c2.click){
            // Hide answers
            a2.style.display = 'none';
            b2.style.display = 'none';
            c2.style.display = 'none';
            d2.style.display = 'none';

            // Calls next function
            showResults();
        }
    });

    d2.addEventListener("click", function checkD2(){
        if(d2.click){
            // Hide answers
            a2.style.display = 'none';
            b2.style.display = 'none';
            c2.style.display = 'none';
            d2.style.display = 'none';

            // Calls next function
            showResults();
        }
    });
};

// Shows results at end of quiz from local storage
function showResults(){
    // Loop through correct and incorrect to get sum before calculating score
    console.log(correct);

    //Set score to local storage
    

    // Display the score while pulling from local storage
    resultsDiv.innerHTML = `Score: ${correct}/50`;
};

// Event Listeners and Init call
init();