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

// Functions

// Initial State
function init(){
    // Hide answer options in intial state; Only showing when questions are being asked
    answerDiv.style.display = 'none';

    // Hide results area
    resultsDiv.style.display = 'none';

    // Directions for user
    questionDiv.innerHTML = `Click the button below to start the quiz.`;


    // When button is clicked, quiz begins
    playBtnDiv.addEventListener("click", q1);
};

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
    a1.innerHTML = `<button id = "a1" class = "a">${answerOptions[0]}</button>`;
    b1.innerHTML = `<button id = "b1" class = "b">${answerOptions[1]}</button>`;
    c1.innerHTML = `<button id = "c1" class = "c">${answerOptions[2]}</button>`;
    d1.innerHTML = `<button id = "d1" class = "d">${answerOptions[3]}</button>`;


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

// Alaska question
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
    a2.innerHTML = `<button id = "a2" class = "a">${answerOptions[0]}</button>`;
    b2.innerHTML = `<button id = "b2" class = "b">${answerOptions[1]}</button>`;
    c2.innerHTML = `<button id = "c2" class = "c">${answerOptions[2]}</button>`;
    d2.innerHTML = `<button id = "d2" class = "d">${answerOptions[3]}</button>`;


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
            q3();
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
            q3();
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
            q3();
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
            q3();
        }
    });
};

// Arizona question
function q3(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[2]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[2]}`, `Scottsdale`, 'Tucson', 'Sedona'];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a3 = document.createElement('button');
    let b3 = document.createElement('button');
    let c3 = document.createElement('button');
    let d3 = document.createElement('button');


    // Set text for each button
    a3.innerHTML = `<button id = "a3" class = "a">${answerOptions[0]}</button>`;
    b3.innerHTML = `<button id = "b3" class = "b">${answerOptions[1]}</button>`;
    c3.innerHTML = `<button id = "c3" class = "c">${answerOptions[2]}</button>`;
    d3.innerHTML = `<button id = "d3" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a3);
    answerSection.appendChild(b3);
    answerSection.appendChild(c3);
    answerSection.appendChild(d3);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a3.addEventListener("click", function checkA3(){
        if (a3.click){
            // Hide answers
            a3.style.display = 'none';
            b3.style.display = 'none';
            c3.style.display = 'none';
            d3.style.display = 'none';

            // Increments correct score by 1
            correct ++;

            // Calls next function
            q4();
        }
    });

    b3.addEventListener("click", function checkB3(){
        if (b3.click){
            // Hide answers
            a3.style.display = 'none';
            b3.style.display = 'none';
            c3.style.display = 'none';
            d3.style.display = 'none';

            // Calls next function
            q4();
        }
    });

    c3.addEventListener("click", function checkC3(){
        if (c3.click){
            // Hide answers
            a3.style.display = 'none';
            b3.style.display = 'none';
            c3.style.display = 'none';
            d3.style.display = 'none';

            // Calls next function
            q4();
        }
    });

    d3.addEventListener("click", function checkD3(){
        if(d3.click){
            // Hide answers
            a3.style.display = 'none';
            b3.style.display = 'none';
            c3.style.display = 'none';
            d3.style.display = 'none';

            // Calls next function
            q4();
        }
    });
};

// Arkansas question
function q4(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[3]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Bentonville`, `Conway`, `${capitols[3]}`, 'Texarkana'];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a4 = document.createElement('button');
    let b4 = document.createElement('button');
    let c4 = document.createElement('button');
    let d4 = document.createElement('button');


    // Set text for each button
    a4.innerHTML = `<button id = "a4" class = "a">${answerOptions[0]}</button>`;
    b4.innerHTML = `<button id = "b4" class = "b">${answerOptions[1]}</button>`;
    c4.innerHTML = `<button id = "c4" class = "c">${answerOptions[2]}</button>`;
    d4.innerHTML = `<button id = "d4" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a4);
    answerSection.appendChild(b4);
    answerSection.appendChild(c4);
    answerSection.appendChild(d4);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a4.addEventListener("click", function checkA4(){
        if (a4.click){
            // Hide answers
            a4.style.display = 'none';
            b4.style.display = 'none';
            c4.style.display = 'none';
            d4.style.display = 'none';

            // Calls next function
            q5();
        }
    });

    b4.addEventListener("click", function checkB4(){
        if (b4.click){
            // Hide answers
            a4.style.display = 'none';
            b4.style.display = 'none';
            c4.style.display = 'none';
            d4.style.display = 'none';

            // Calls next function
            q5();
        }
    });

    c4.addEventListener("click", function checkC4(){
        if (c4.click){
            // Hide answers
            a4.style.display = 'none';
            b4.style.display = 'none';
            c4.style.display = 'none';
            d4.style.display = 'none';

            // Increments score by 1
            correct ++;

            // Calls next function
            q5();
        }
    });

    d4.addEventListener("click", function checkD4(){
        if(d4.click){
            // Hide answers
            a4.style.display = 'none';
            b4.style.display = 'none';
            c4.style.display = 'none';
            d4.style.display = 'none';

            // Calls next function
            q5();
        }
    });
};

// California question
function q5(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[4]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`San Diego`, `${capitols[4]}`, `San Francisco`, 'Fresno'];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a5 = document.createElement('button');
    let b5 = document.createElement('button');
    let c5 = document.createElement('button');
    let d5 = document.createElement('button');


    // Set text for each button
    a5.innerHTML = `<button id = "a5" class = "a">${answerOptions[0]}</button>`;
    b5.innerHTML = `<button id = "b5" class = "b">${answerOptions[1]}</button>`;
    c5.innerHTML = `<button id = "c5" class = "c">${answerOptions[2]}</button>`;
    d5.innerHTML = `<button id = "d5" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a5);
    answerSection.appendChild(b5);
    answerSection.appendChild(c5);
    answerSection.appendChild(d5);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a5.addEventListener("click", function checkA5(){
        if (a5.click){
            // Hide answers
            a5.style.display = 'none';
            b5.style.display = 'none';
            c5.style.display = 'none';
            d5.style.display = 'none';

            // Calls next function
            q6();
        }
    });

    b5.addEventListener("click", function checkB5(){
        if (b5.click){
            // Hide answers
            a5.style.display = 'none';
            b5.style.display = 'none';
            c5.style.display = 'none';
            d5.style.display = 'none';

            // Increments correct by 1
            correct ++;

            // Calls next function
            q6();
        }
    });

    c5.addEventListener("click", function checkC5(){
        if (c5.click){
            // Hide answers
            a5.style.display = 'none';
            b5.style.display = 'none';
            c5.style.display = 'none';
            d5.style.display = 'none';

            // Calls next function
            q6();
        }
    });

    d5.addEventListener("click", function checkD5(){
        if(d5.click){
            // Hide answers
            a5.style.display = 'none';
            b5.style.display = 'none';
            c5.style.display = 'none';
            d5.style.display = 'none';

            // Calls next function
            q6();
        }
    });
};

// Colorado Question
function q6(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[5]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[5]}`, `Pueblo`, `Fort Collins`, 'Boulder'];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a6 = document.createElement('button');
    let b6 = document.createElement('button');
    let c6 = document.createElement('button');
    let d6 = document.createElement('button');


    // Set text for each button
    a6.innerHTML = `<button id = "a6" class = "a">${answerOptions[0]}</button>`;
    b6.innerHTML = `<button id = "b6" class = "b">${answerOptions[1]}</button>`;
    c6.innerHTML = `<button id = "c6" class = "c">${answerOptions[2]}</button>`;
    d6.innerHTML = `<button id = "d6" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a6);
    answerSection.appendChild(b6);
    answerSection.appendChild(c6);
    answerSection.appendChild(d6);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a6.addEventListener("click", function checkA6(){
        if (a6.click){
            // Hide answers
            a6.style.display = 'none';
            b6.style.display = 'none';
            c6.style.display = 'none';
            d6.style.display = 'none';

            // Increments score by 1
            correct ++;

            // Calls next function
            q7();
        }
    });

    b6.addEventListener("click", function checkB6(){
        if (b6.click){
            // Hide answers
            a6.style.display = 'none';
            b6.style.display = 'none';
            c6.style.display = 'none';
            d6.style.display = 'none';

            // Calls next function
            q7();
        }
    });

    c6.addEventListener("click", function checkC6(){
        if (c6.click){
            // Hide answers
            a6.style.display = 'none';
            b6.style.display = 'none';
            c6.style.display = 'none';
            d6.style.display = 'none';

            // Calls next function
            q7();
        }
    });

    d6.addEventListener("click", function checkD6(){
        if(d6.click){
            // Hide answers
            a6.style.display = 'none';
            b6.style.display = 'none';
            c6.style.display = 'none';
            d6.style.display = 'none';

            // Calls next function
            q7();
        }
    });
};

// Connecticut Question
function q7(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[6]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`New London`, `Waterbury`, `${capitols[6]}`,`New Haven`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a7 = document.createElement('button');
    let b7 = document.createElement('button');
    let c7 = document.createElement('button');
    let d7 = document.createElement('button');


    // Set text for each button
    a7.innerHTML = `<button id = "a7" class = "a">${answerOptions[0]}</button>`;
    b7.innerHTML = `<button id = "b7" class = "b">${answerOptions[1]}</button>`;
    c7.innerHTML = `<button id = "c7" class = "c">${answerOptions[2]}</button>`;
    d7.innerHTML = `<button id = "d7" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a7);
    answerSection.appendChild(b7);
    answerSection.appendChild(c7);
    answerSection.appendChild(d7);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a7.addEventListener("click", function checkA7(){
        if (a7.click){
            // Hide answers
            a7.style.display = 'none';
            b7.style.display = 'none';
            c7.style.display = 'none';
            d7.style.display = 'none';

            // Calls next function
            q8();
        }
    });

    b7.addEventListener("click", function checkB7(){
        if (b7.click){
            // Hide answers
            a7.style.display = 'none';
            b7.style.display = 'none';
            c7.style.display = 'none';
            d7.style.display = 'none';

            // Calls next function
            q8();
        }
    });

    c7.addEventListener("click", function checkC7(){
        if (c7.click){
            // Hide answers
            a7.style.display = 'none';
            b7.style.display = 'none';
            c7.style.display = 'none';
            d7.style.display = 'none';

            // Increments score by 1
            correct ++;

            // Calls next function
            q8();
        }
    });

    d7.addEventListener("click", function checkD7(){
        if(d7.click){
            // Hide answers
            a7.style.display = 'none';
            b7.style.display = 'none';
            c7.style.display = 'none';
            d7.style.display = 'none';

            // Calls next function
            q8();
        }
    });
};

// Delaware Question
function q8(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[7]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Seaford`, `Wilmington`, `${capitols[7]}`,`Millsboro`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a8 = document.createElement('button');
    let b8 = document.createElement('button');
    let c8 = document.createElement('button');
    let d8 = document.createElement('button');


    // Set text for each button
    a8.innerHTML = `<button id = "a8" class = "a">${answerOptions[0]}</button>`;
    b8.innerHTML = `<button id = "b8" class = "b">${answerOptions[1]}</button>`;
    c8.innerHTML = `<button id = "c8" class = "c">${answerOptions[2]}</button>`;
    d8.innerHTML = `<button id = "d8" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a8);
    answerSection.appendChild(b8);
    answerSection.appendChild(c8);
    answerSection.appendChild(d8);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a8.addEventListener("click", function checkA8(){
        if (a8.click){
            // Hide answers
            a8.style.display = 'none';
            b8.style.display = 'none';
            c8.style.display = 'none';
            d8.style.display = 'none';

            // Calls next function
            q9();
        }
    });

    b8.addEventListener("click", function checkB8(){
        if (b8.click){
            // Hide answers
            a8.style.display = 'none';
            b8.style.display = 'none';
            c8.style.display = 'none';
            d8.style.display = 'none';

            // Calls next function
            q9();
        }
    });

    c8.addEventListener("click", function checkC8(){
        if (c8.click){
            // Hide answers
            a8.style.display = 'none';
            b8.style.display = 'none';
            c8.style.display = 'none';
            d8.style.display = 'none';

            // Increments score by 1
            correct ++;

            // Calls next function
            q9();
        }
    });

    d8.addEventListener("click", function checkD8(){
        if(d8.click){
            // Hide answers
            a8.style.display = 'none';
            b8.style.display = 'none';
            c8.style.display = 'none';
            d8.style.display = 'none';

            // Calls next function
            q9();
        }
    });
};

// Florida Question
function q9(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[8]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[8]}`, `Orlando`, `Miami`,`Tampa`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a9 = document.createElement('button');
    let b9 = document.createElement('button');
    let c9 = document.createElement('button');
    let d9 = document.createElement('button');


    // Set text for each button
    a9.innerHTML = `<button id = "a9" class = "a">${answerOptions[0]}</button>`;
    b9.innerHTML = `<button id = "b9" class = "b">${answerOptions[1]}</button>`;
    c9.innerHTML = `<button id = "c9" class = "c">${answerOptions[2]}</button>`;
    d9.innerHTML = `<button id = "d9" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a9);
    answerSection.appendChild(b9);
    answerSection.appendChild(c9);
    answerSection.appendChild(d9);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a9.addEventListener("click", function checkA9(){
        if (a9.click){
            // Hide answers
            a9.style.display = 'none';
            b9.style.display = 'none';
            c9.style.display = 'none';
            d9.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q10();
        }
    });

    b9.addEventListener("click", function checkB9(){
        if (b9.click){
            // Hide answers
            a9.style.display = 'none';
            b9.style.display = 'none';
            c9.style.display = 'none';
            d9.style.display = 'none';

            // Calls next function
            q10();
        }
    });

    c9.addEventListener("click", function checkC9(){
        if (c9.click){
            // Hide answers
            a9.style.display = 'none';
            b9.style.display = 'none';
            c9.style.display = 'none';
            d9.style.display = 'none';

            // Calls next function
            q10();
        }
    });

    d9.addEventListener("click", function checkD9(){
        if(d9.click){
            // Hide answers
            a9.style.display = 'none';
            b9.style.display = 'none';
            c9.style.display = 'none';
            d9.style.display = 'none';

            // Calls next function
            q10();
        }
    });
};

// Georgia Question
function q10(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[9]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Augusta`, `Macon`, `Brunswick`,`${capitols[9]}`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a10 = document.createElement('button');
    let b10 = document.createElement('button');
    let c10 = document.createElement('button');
    let d10 = document.createElement('button');


    // Set text for each button
    a10.innerHTML = `<button id = "a10" class = "a">${answerOptions[0]}</button>`;
    b10.innerHTML = `<button id = "b10" class = "b">${answerOptions[1]}</button>`;
    c10.innerHTML = `<button id = "c10" class = "c">${answerOptions[2]}</button>`;
    d10.innerHTML = `<button id = "d10" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a10);
    answerSection.appendChild(b10);
    answerSection.appendChild(c10);
    answerSection.appendChild(d10);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a10.addEventListener("click", function checkA10(){
        if (a10.click){
            // Hide answers
            a10.style.display = 'none';
            b10.style.display = 'none';
            c10.style.display = 'none';
            d10.style.display = 'none';

            // Calls next function
            q11();
        }
    });

    b10.addEventListener("click", function checkb10(){
        if (b10.click){
            // Hide answers
            a10.style.display = 'none';
            b10.style.display = 'none';
            c10.style.display = 'none';
            d10.style.display = 'none';

            // Calls next function
            q11();
        }
    });

    c10.addEventListener("click", function checkc10(){
        if (c10.click){
            // Hide answers
            a10.style.display = 'none';
            b10.style.display = 'none';
            c10.style.display = 'none';
            d10.style.display = 'none';

            // Calls next function
            q11();
        }
    });

    d10.addEventListener("click", function checkd10(){
        if(d10.click){
            // Hide answers
            a10.style.display = 'none';
            b10.style.display = 'none';
            c10.style.display = 'none';
            d10.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q11();
        }
    });
};

// Hawaii Question
function q11(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[10]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Kauai`, `${capitols[10]}`, `Kailua-Kona`,`Hilo`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a11 = document.createElement('button');
    let b11 = document.createElement('button');
    let c11 = document.createElement('button');
    let d11 = document.createElement('button');


    // Set text for each button
    a11.innerHTML = `<button id = "a11" class = "a">${answerOptions[0]}</button>`;
    b11.innerHTML = `<button id = "b11" class = "b">${answerOptions[1]}</button>`;
    c11.innerHTML = `<button id = "c11" class = "c">${answerOptions[2]}</button>`;
    d11.innerHTML = `<button id = "d11" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a11);
    answerSection.appendChild(b11);
    answerSection.appendChild(c11);
    answerSection.appendChild(d11);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a11.addEventListener("click", function checka11(){
        if (a11.click){
            // Hide answers
            a11.style.display = 'none';
            b11.style.display = 'none';
            c11.style.display = 'none';
            d11.style.display = 'none';

            // Calls next function
            q12();
        }
    });

    b11.addEventListener("click", function checkb11(){
        if (b11.click){
            // Hide answers
            a11.style.display = 'none';
            b11.style.display = 'none';
            c11.style.display = 'none';
            d11.style.display = 'none';

            // Increments score by 1
            correct ++;

            // Calls next function
            q12();
        }
    });

    c11.addEventListener("click", function checkc11(){
        if (c11.click){
            // Hide answers
            a11.style.display = 'none';
            b11.style.display = 'none';
            c11.style.display = 'none';
            d11.style.display = 'none';

            // Calls next function
            q12();
        }
    });

    d11.addEventListener("click", function checkd11(){
        if(d11.click){
            // Hide answers
            a11.style.display = 'none';
            b11.style.display = 'none';
            c11.style.display = 'none';
            d11.style.display = 'none';

            // Calls next function
            q12();
        }
    });
};

// Idaho Question
function q12(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[11]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Twin Falls`, `${capitols[11]}`, `Moscow`,`Idaho Falls`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a12 = document.createElement('button');
    let b12 = document.createElement('button');
    let c12 = document.createElement('button');
    let d12 = document.createElement('button');


    // Set text for each button
    a12.innerHTML = `<button id = "a12" class = "a">${answerOptions[0]}</button>`;
    b12.innerHTML = `<button id = "b12" class = "b">${answerOptions[1]}</button>`;
    c12.innerHTML = `<button id = "c12" class = "c">${answerOptions[2]}</button>`;
    d12.innerHTML = `<button id = "d12" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a12);
    answerSection.appendChild(b12);
    answerSection.appendChild(c12);
    answerSection.appendChild(d12);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a12.addEventListener("click", function checka12(){
        if (a12.click){
            // Hide answers
            a12.style.display = 'none';
            b12.style.display = 'none';
            c12.style.display = 'none';
            d12.style.display = 'none';

            // Calls next function
            q13();
        }
    });

    b12.addEventListener("click", function checkb12(){
        if (b12.click){
            // Hide answers
            a12.style.display = 'none';
            b12.style.display = 'none';
            c12.style.display = 'none';
            d12.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q13();
        }
    });

    c12.addEventListener("click", function checkc12(){
        if (c12.click){
            // Hide answers
            a12.style.display = 'none';
            b12.style.display = 'none';
            c12.style.display = 'none';
            d12.style.display = 'none';

            // Calls next function
            q13();
        }
    });

    d12.addEventListener("click", function checkd12(){
        if(d12.click){
            // Hide answers
            a12.style.display = 'none';
            b12.style.display = 'none';
            c12.style.display = 'none';
            d12.style.display = 'none';

            // Calls next function
            q13();
        }
    });
};

// Illinois Question
function q13(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[12]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[12]}`, `Champaign`, `Chicago`,`Rockford`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a13 = document.createElement('button');
    let b13 = document.createElement('button');
    let c13 = document.createElement('button');
    let d13 = document.createElement('button');


    // Set text for each button
    a13.innerHTML = `<button id = "a13" class = "a">${answerOptions[0]}</button>`;
    b13.innerHTML = `<button id = "b13" class = "b">${answerOptions[1]}</button>`;
    c13.innerHTML = `<button id = "c13" class = "c">${answerOptions[2]}</button>`;
    d13.innerHTML = `<button id = "d13" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a13);
    answerSection.appendChild(b13);
    answerSection.appendChild(c13);
    answerSection.appendChild(d13);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a13.addEventListener("click", function checka13(){
        if (a13.click){
            // Hide answers
            a13.style.display = 'none';
            b13.style.display = 'none';
            c13.style.display = 'none';
            d13.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q14();
        }
    });

    b13.addEventListener("click", function checkb13(){
        if (b13.click){
            // Hide answers
            a13.style.display = 'none';
            b13.style.display = 'none';
            c13.style.display = 'none';
            d13.style.display = 'none';

            // Calls next function
            q14();
        }
    });

    c13.addEventListener("click", function checkc13(){
        if (c13.click){
            // Hide answers
            a13.style.display = 'none';
            b13.style.display = 'none';
            c13.style.display = 'none';
            d13.style.display = 'none';

            // Calls next function
            q14();
        }
    });

    d13.addEventListener("click", function checkd13(){
        if(d13.click){
            // Hide answers
            a13.style.display = 'none';
            b13.style.display = 'none';
            c13.style.display = 'none';
            d13.style.display = 'none';

            // Calls next function
            q14();
        }
    });
};

// Indiana Question
function q14(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[13]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Fort Wayne`, `Anderson`, `${capitols[13]}`,`Gary`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a14 = document.createElement('button');
    let b14 = document.createElement('button');
    let c14 = document.createElement('button');
    let d14 = document.createElement('button');


    // Set text for each button
    a14.innerHTML = `<button id = "a14" class = "a">${answerOptions[0]}</button>`;
    b14.innerHTML = `<button id = "b14" class = "b">${answerOptions[1]}</button>`;
    c14.innerHTML = `<button id = "c14" class = "c">${answerOptions[2]}</button>`;
    d14.innerHTML = `<button id = "d14" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a14);
    answerSection.appendChild(b14);
    answerSection.appendChild(c14);
    answerSection.appendChild(d14);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a14.addEventListener("click", function checka14(){
        if (a14.click){
            // Hide answers
            a14.style.display = 'none';
            b14.style.display = 'none';
            c14.style.display = 'none';
            d14.style.display = 'none';

            // Calls next function
            q15();
        }
    });

    b14.addEventListener("click", function checkb14(){
        if (b14.click){
            // Hide answers
            a14.style.display = 'none';
            b14.style.display = 'none';
            c14.style.display = 'none';
            d14.style.display = 'none';

            // Calls next function
            q15();
        }
    });

    c14.addEventListener("click", function checkc14(){
        if (c14.click){
            // Hide answers
            a14.style.display = 'none';
            b14.style.display = 'none';
            c14.style.display = 'none';
            d14.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q15();
        }
    });

    d14.addEventListener("click", function checkd14(){
        if(d14.click){
            // Hide answers
            a14.style.display = 'none';
            b14.style.display = 'none';
            c14.style.display = 'none';
            d14.style.display = 'none';

            // Calls next function
            q15();
        }
    });
};

// Iowa Question
function q15(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[14]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Iowa City`, `Davenport`, `${capitols[14]}`,`Cedar Rapids`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a15 = document.createElement('button');
    let b15 = document.createElement('button');
    let c15 = document.createElement('button');
    let d15 = document.createElement('button');


    // Set text for each button
    a15.innerHTML = `<button id = "a15" class = "a">${answerOptions[0]}</button>`;
    b15.innerHTML = `<button id = "b15" class = "b">${answerOptions[1]}</button>`;
    c15.innerHTML = `<button id = "c15" class = "c">${answerOptions[2]}</button>`;
    d15.innerHTML = `<button id = "d15" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a15);
    answerSection.appendChild(b15);
    answerSection.appendChild(c15);
    answerSection.appendChild(d15);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a15.addEventListener("click", function checka15(){
        if (a15.click){
            // Hide answers
            a15.style.display = 'none';
            b15.style.display = 'none';
            c15.style.display = 'none';
            d15.style.display = 'none';

            // Calls next function
            q16();
        }
    });

    b15.addEventListener("click", function checkb15(){
        if (b15.click){
            // Hide answers
            a15.style.display = 'none';
            b15.style.display = 'none';
            c15.style.display = 'none';
            d15.style.display = 'none';

            // Calls next function
            q16();
        }
    });

    c15.addEventListener("click", function checkc15(){
        if (c15.click){
            // Hide answers
            a15.style.display = 'none';
            b15.style.display = 'none';
            c15.style.display = 'none';
            d15.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q16();
        }
    });

    d15.addEventListener("click", function checkd15(){
        if(d15.click){
            // Hide answers
            a15.style.display = 'none';
            b15.style.display = 'none';
            c15.style.display = 'none';
            d15.style.display = 'none';

            // Calls next function
            q16();
        }
    });
};

// Kansas Question
function q16(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[15]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Dodge City`, `${capitols[15]}`, `Wichita`,`Kansas City`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a16 = document.createElement('button');
    let b16 = document.createElement('button');
    let c16 = document.createElement('button');
    let d16 = document.createElement('button');


    // Set text for each button
    a16.innerHTML = `<button id = "a16" class = "a">${answerOptions[0]}</button>`;
    b16.innerHTML = `<button id = "b16" class = "b">${answerOptions[1]}</button>`;
    c16.innerHTML = `<button id = "c16" class = "c">${answerOptions[2]}</button>`;
    d16.innerHTML = `<button id = "d16" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a16);
    answerSection.appendChild(b16);
    answerSection.appendChild(c16);
    answerSection.appendChild(d16);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a16.addEventListener("click", function checka16(){
        if (a16.click){
            // Hide answers
            a16.style.display = 'none';
            b16.style.display = 'none';
            c16.style.display = 'none';
            d16.style.display = 'none';

            // Calls next function
            q17();
        }
    });

    b16.addEventListener("click", function checkb16(){
        if (b16.click){
            // Hide answers
            a16.style.display = 'none';
            b16.style.display = 'none';
            c16.style.display = 'none';
            d16.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q17();
        }
    });

    c16.addEventListener("click", function checkc16(){
        if (c16.click){
            // Hide answers
            a16.style.display = 'none';
            b16.style.display = 'none';
            c16.style.display = 'none';
            d16.style.display = 'none';

            // Calls next function
            q17();
        }
    });

    d16.addEventListener("click", function checkd16(){
        if(d16.click){
            // Hide answers
            a16.style.display = 'none';
            b16.style.display = 'none';
            c16.style.display = 'none';
            d16.style.display = 'none';

            // Calls next function
            q17();
        }
    });
};

// Kentucky Question
function q17(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[16]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[16]}`, `Bowling Green`, `Lexington`,`Louisville`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a17 = document.createElement('button');
    let b17 = document.createElement('button');
    let c17 = document.createElement('button');
    let d17 = document.createElement('button');


    // Set text for each button
    a17.innerHTML = `<button id = "a17" class = "a">${answerOptions[0]}</button>`;
    b17.innerHTML = `<button id = "b17" class = "b">${answerOptions[1]}</button>`;
    c17.innerHTML = `<button id = "c17" class = "c">${answerOptions[2]}</button>`;
    d17.innerHTML = `<button id = "d17" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a17);
    answerSection.appendChild(b17);
    answerSection.appendChild(c17);
    answerSection.appendChild(d17);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a17.addEventListener("click", function checka17(){
        if (a17.click){
            // Hide answers
            a17.style.display = 'none';
            b17.style.display = 'none';
            c17.style.display = 'none';
            d17.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q18();
        }
    });

    b17.addEventListener("click", function checkb17(){
        if (b17.click){
            // Hide answers
            a17.style.display = 'none';
            b17.style.display = 'none';
            c17.style.display = 'none';
            d17.style.display = 'none';

            // Calls next function
            q18();
        }
    });

    c17.addEventListener("click", function checkc17(){
        if (c17.click){
            // Hide answers
            a17.style.display = 'none';
            b17.style.display = 'none';
            c17.style.display = 'none';
            d17.style.display = 'none';

            // Calls next function
            q18();
        }
    });

    d17.addEventListener("click", function checkd17(){
        if(d17.click){
            // Hide answers
            a17.style.display = 'none';
            b17.style.display = 'none';
            c17.style.display = 'none';
            d17.style.display = 'none';

            // Calls next function
            q18();
        }
    });
};

// Louisiana Question
function q18(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[17]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Shreveport`, `New Orleans`, `Lake Charles`,`${capitols[17]}`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a18 = document.createElement('button');
    let b18 = document.createElement('button');
    let c18 = document.createElement('button');
    let d18 = document.createElement('button');


    // Set text for each button
    a18.innerHTML = `<button id = "a18" class = "a">${answerOptions[0]}</button>`;
    b18.innerHTML = `<button id = "b18" class = "b">${answerOptions[1]}</button>`;
    c18.innerHTML = `<button id = "c18" class = "c">${answerOptions[2]}</button>`;
    d18.innerHTML = `<button id = "d18" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a18);
    answerSection.appendChild(b18);
    answerSection.appendChild(c18);
    answerSection.appendChild(d18);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a18.addEventListener("click", function checka18(){
        if (a18.click){
            // Hide answers
            a18.style.display = 'none';
            b18.style.display = 'none';
            c18.style.display = 'none';
            d18.style.display = 'none';

            // Calls next function
            q19();
        }
    });

    b18.addEventListener("click", function checkb18(){
        if (b18.click){
            // Hide answers
            a18.style.display = 'none';
            b18.style.display = 'none';
            c18.style.display = 'none';
            d18.style.display = 'none';

            // Calls next function
            q19();
        }
    });

    c18.addEventListener("click", function checkc18(){
        if (c18.click){
            // Hide answers
            a18.style.display = 'none';
            b18.style.display = 'none';
            c18.style.display = 'none';
            d18.style.display = 'none';

            // Calls next function
            q19();
        }
    });

    d18.addEventListener("click", function checkd18(){
        if(d18.click){
            // Hide answers
            a18.style.display = 'none';
            b18.style.display = 'none';
            c18.style.display = 'none';
            d18.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q19();
        }
    });
};

// Maine Question
function q19(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[18]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[18]}`, `Bangor`, `Ellsworth`,`Portland`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a19 = document.createElement('button');
    let b19 = document.createElement('button');
    let c19 = document.createElement('button');
    let d19 = document.createElement('button');


    // Set text for each button
    a19.innerHTML = `<button id = "a19" class = "a">${answerOptions[0]}</button>`;
    b19.innerHTML = `<button id = "b19" class = "b">${answerOptions[1]}</button>`;
    c19.innerHTML = `<button id = "c19" class = "c">${answerOptions[2]}</button>`;
    d19.innerHTML = `<button id = "d19" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a19);
    answerSection.appendChild(b19);
    answerSection.appendChild(c19);
    answerSection.appendChild(d19);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a19.addEventListener("click", function checka19(){
        if (a19.click){
            // Hide answers
            a19.style.display = 'none';
            b19.style.display = 'none';
            c19.style.display = 'none';
            d19.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q20();
        }
    });

    b19.addEventListener("click", function checkb19(){
        if (b19.click){
            // Hide answers
            a19.style.display = 'none';
            b19.style.display = 'none';
            c19.style.display = 'none';
            d19.style.display = 'none';

            // Calls next function
            q20();
        }
    });

    c19.addEventListener("click", function checkc19(){
        if (c19.click){
            // Hide answers
            a19.style.display = 'none';
            b19.style.display = 'none';
            c19.style.display = 'none';
            d19.style.display = 'none';

            // Calls next function
            q20();
        }
    });

    d19.addEventListener("click", function checkd19(){
        if(d19.click){
            // Hide answers
            a19.style.display = 'none';
            b19.style.display = 'none';
            c19.style.display = 'none';
            d19.style.display = 'none';

            // Calls next function
            q20();
        }
    });
};

// Maryland Question
function q20(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[19]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Baltimore`, `Salisbury`, `${capitols[19]}`,`Washington`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a20 = document.createElement('button');
    let b20 = document.createElement('button');
    let c20 = document.createElement('button');
    let d20 = document.createElement('button');


    // Set text for each button
    a20.innerHTML = `<button id = "a20" class = "a">${answerOptions[0]}</button>`;
    b20.innerHTML = `<button id = "b20" class = "b">${answerOptions[1]}</button>`;
    c20.innerHTML = `<button id = "c20" class = "c">${answerOptions[2]}</button>`;
    d20.innerHTML = `<button id = "d20" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a20);
    answerSection.appendChild(b20);
    answerSection.appendChild(c20);
    answerSection.appendChild(d20);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a20.addEventListener("click", function checka20(){
        if (a20.click){
            // Hide answers
            a20.style.display = 'none';
            b20.style.display = 'none';
            c20.style.display = 'none';
            d20.style.display = 'none';

            // Calls next function
            q21();
        }
    });

    b20.addEventListener("click", function checkb20(){
        if (b20.click){
            // Hide answers
            a20.style.display = 'none';
            b20.style.display = 'none';
            c20.style.display = 'none';
            d20.style.display = 'none';

            // Calls next function
            q21();
        }
    });

    c20.addEventListener("click", function checkc20(){
        if (c20.click){
            // Hide answers
            a20.style.display = 'none';
            b20.style.display = 'none';
            c20.style.display = 'none';
            d20.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q21();
        }
    });

    d20.addEventListener("click", function checkd20(){
        if(d20.click){
            // Hide answers
            a20.style.display = 'none';
            b20.style.display = 'none';
            c20.style.display = 'none';
            d20.style.display = 'none';

            // Calls next function
            q21();
        }
    });
};

// Massachusetts Question
function q21(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[20]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Cape Cod`, `${capitols[20]}`, `Springfield`,`Worcester`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a21 = document.createElement('button');
    let b21 = document.createElement('button');
    let c21 = document.createElement('button');
    let d21 = document.createElement('button');


    // Set text for each button
    a21.innerHTML = `<button id = "a21" class = "a">${answerOptions[0]}</button>`;
    b21.innerHTML = `<button id = "b21" class = "b">${answerOptions[1]}</button>`;
    c21.innerHTML = `<button id = "c21" class = "c">${answerOptions[2]}</button>`;
    d21.innerHTML = `<button id = "d21" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a21);
    answerSection.appendChild(b21);
    answerSection.appendChild(c21);
    answerSection.appendChild(d21);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a21.addEventListener("click", function checka21(){
        if (a21.click){
            // Hide answers
            a21.style.display = 'none';
            b21.style.display = 'none';
            c21.style.display = 'none';
            d21.style.display = 'none';

            // Calls next function
            q22();
        }
    });

    b21.addEventListener("click", function checkb21(){
        if (b21.click){
            // Hide answers
            a21.style.display = 'none';
            b21.style.display = 'none';
            c21.style.display = 'none';
            d21.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q22();
        }
    });

    c21.addEventListener("click", function checkc21(){
        if (c21.click){
            // Hide answers
            a21.style.display = 'none';
            b21.style.display = 'none';
            c21.style.display = 'none';
            d21.style.display = 'none';

            // Calls next function
            q22();
        }
    });

    d21.addEventListener("click", function checkd21(){
        if(d21.click){
            // Hide answers
            a21.style.display = 'none';
            b21.style.display = 'none';
            c21.style.display = 'none';
            d21.style.display = 'none';

            // Calls next function
            q22();
        }
    });
};

// Michigan Question
function q22(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[21]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[21]}`, `Ann Arbor`, `Detroit`,`Grand Rapids`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a22 = document.createElement('button');
    let b22 = document.createElement('button');
    let c22 = document.createElement('button');
    let d22 = document.createElement('button');


    // Set text for each button
    a22.innerHTML = `<button id = "a22" class = "a">${answerOptions[0]}</button>`;
    b22.innerHTML = `<button id = "b22" class = "b">${answerOptions[1]}</button>`;
    c22.innerHTML = `<button id = "c22" class = "c">${answerOptions[2]}</button>`;
    d22.innerHTML = `<button id = "d22" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a22);
    answerSection.appendChild(b22);
    answerSection.appendChild(c22);
    answerSection.appendChild(d22);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a22.addEventListener("click", function checka22(){
        if (a22.click){
            // Hide answers
            a22.style.display = 'none';
            b22.style.display = 'none';
            c22.style.display = 'none';
            d22.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q23();
        }
    });

    b22.addEventListener("click", function checkb22(){
        if (b22.click){
            // Hide answers
            a22.style.display = 'none';
            b22.style.display = 'none';
            c22.style.display = 'none';
            d22.style.display = 'none';

            // Calls next function
            q23();
        }
    });

    c22.addEventListener("click", function checkc22(){
        if (c22.click){
            // Hide answers
            a22.style.display = 'none';
            b22.style.display = 'none';
            c22.style.display = 'none';
            d22.style.display = 'none';

            // Calls next function
            q23();
        }
    });

    d22.addEventListener("click", function checkd22(){
        if(d22.click){
            // Hide answers
            a22.style.display = 'none';
            b22.style.display = 'none';
            c22.style.display = 'none';
            d22.style.display = 'none';

            // Calls next function
            q23();
        }
    });
};

// Minnesota Question
function q23(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[22]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`St. Cloud`, `Minneapolis`, `Rochester`,`${capitols[22]}`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a23 = document.createElement('button');
    let b23 = document.createElement('button');
    let c23 = document.createElement('button');
    let d23 = document.createElement('button');


    // Set text for each button
    a23.innerHTML = `<button id = "a23" class = "a">${answerOptions[0]}</button>`;
    b23.innerHTML = `<button id = "b23" class = "b">${answerOptions[1]}</button>`;
    c23.innerHTML = `<button id = "c23" class = "c">${answerOptions[2]}</button>`;
    d23.innerHTML = `<button id = "d23" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a23);
    answerSection.appendChild(b23);
    answerSection.appendChild(c23);
    answerSection.appendChild(d23);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a23.addEventListener("click", function checka23(){
        if (a23.click){
            // Hide answers
            a23.style.display = 'none';
            b23.style.display = 'none';
            c23.style.display = 'none';
            d23.style.display = 'none';

            // Calls next function
            q24();
        }
    });

    b23.addEventListener("click", function checkb23(){
        if (b23.click){
            // Hide answers
            a23.style.display = 'none';
            b23.style.display = 'none';
            c23.style.display = 'none';
            d23.style.display = 'none';

            // Calls next function
            q24();
        }
    });

    c23.addEventListener("click", function checkc23(){
        if (c23.click){
            // Hide answers
            a23.style.display = 'none';
            b23.style.display = 'none';
            c23.style.display = 'none';
            d23.style.display = 'none';

            // Calls next function
            q24();
        }
    });

    d23.addEventListener("click", function checkd23(){
        if(d23.click){
            // Hide answers
            a23.style.display = 'none';
            b23.style.display = 'none';
            c23.style.display = 'none';
            d23.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q24();
        }
    });
};

// Mississippi Question
function q24(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[23]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Biloxi`, `${capitols[23]}`, `Hattiesburg`,`Gulfport`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a24 = document.createElement('button');
    let b24 = document.createElement('button');
    let c24 = document.createElement('button');
    let d24 = document.createElement('button');


    // Set text for each button
    a24.innerHTML = `<button id = "a24" class = "a">${answerOptions[0]}</button>`;
    b24.innerHTML = `<button id = "b24" class = "b">${answerOptions[1]}</button>`;
    c24.innerHTML = `<button id = "c24" class = "c">${answerOptions[2]}</button>`;
    d24.innerHTML = `<button id = "d24" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a24);
    answerSection.appendChild(b24);
    answerSection.appendChild(c24);
    answerSection.appendChild(d24);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a24.addEventListener("click", function checka24(){
        if (a24.click){
            // Hide answers
            a24.style.display = 'none';
            b24.style.display = 'none';
            c24.style.display = 'none';
            d24.style.display = 'none';

            // Calls next function
            q25();
        }
    });

    b24.addEventListener("click", function checkb24(){
        if (b24.click){
            // Hide answers
            a24.style.display = 'none';
            b24.style.display = 'none';
            c24.style.display = 'none';
            d24.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q25();
        }
    });

    c24.addEventListener("click", function checkc24(){
        if (c24.click){
            // Hide answers
            a24.style.display = 'none';
            b24.style.display = 'none';
            c24.style.display = 'none';
            d24.style.display = 'none';

            // Calls next function
            q25();
        }
    });

    d24.addEventListener("click", function checkd24(){
        if(d24.click){
            // Hide answers
            a24.style.display = 'none';
            b24.style.display = 'none';
            c24.style.display = 'none';
            d24.style.display = 'none';

            // Calls next function
            q25();
        }
    });
};

// Missouri Question
function q25(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[24]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Kansas City`, `${capitols[24]}`, `Columbia`,`St. Louis`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a25 = document.createElement('button');
    let b25 = document.createElement('button');
    let c25 = document.createElement('button');
    let d25 = document.createElement('button');


    // Set text for each button
    a25.innerHTML = `<button id = "a25" class = "a">${answerOptions[0]}</button>`;
    b25.innerHTML = `<button id = "b25" class = "b">${answerOptions[1]}</button>`;
    c25.innerHTML = `<button id = "c25" class = "c">${answerOptions[2]}</button>`;
    d25.innerHTML = `<button id = "d25" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a25);
    answerSection.appendChild(b25);
    answerSection.appendChild(c25);
    answerSection.appendChild(d25);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a25.addEventListener("click", function checka25(){
        if (a25.click){
            // Hide answers
            a25.style.display = 'none';
            b25.style.display = 'none';
            c25.style.display = 'none';
            d25.style.display = 'none';

            // Calls next function
            q26();
        }
    });

    b25.addEventListener("click", function checkb25(){
        if (b25.click){
            // Hide answers
            a25.style.display = 'none';
            b25.style.display = 'none';
            c25.style.display = 'none';
            d25.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q26();
        }
    });

    c25.addEventListener("click", function checkc25(){
        if (c25.click){
            // Hide answers
            a25.style.display = 'none';
            b25.style.display = 'none';
            c25.style.display = 'none';
            d25.style.display = 'none';

            // Calls next function
            q26();
        }
    });

    d25.addEventListener("click", function checkd25(){
        if(d25.click){
            // Hide answers
            a25.style.display = 'none';
            b25.style.display = 'none';
            c25.style.display = 'none';
            d25.style.display = 'none';

            // Calls next function
            q26();
        }
    });
};

// Montana Question
function q26(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[25]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[25]}`, `Billings`, `Bozeman`,`Missoula`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a26 = document.createElement('button');
    let b26 = document.createElement('button');
    let c26 = document.createElement('button');
    let d26 = document.createElement('button');


    // Set text for each button
    a26.innerHTML = `<button id = "a26" class = "a">${answerOptions[0]}</button>`;
    b26.innerHTML = `<button id = "b26" class = "b">${answerOptions[1]}</button>`;
    c26.innerHTML = `<button id = "c26" class = "c">${answerOptions[2]}</button>`;
    d26.innerHTML = `<button id = "d26" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a26);
    answerSection.appendChild(b26);
    answerSection.appendChild(c26);
    answerSection.appendChild(d26);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a26.addEventListener("click", function checka26(){
        if (a26.click){
            // Hide answers
            a26.style.display = 'none';
            b26.style.display = 'none';
            c26.style.display = 'none';
            d26.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q27();
        }
    });

    b26.addEventListener("click", function checkb26(){
        if (b26.click){
            // Hide answers
            a26.style.display = 'none';
            b26.style.display = 'none';
            c26.style.display = 'none';
            d26.style.display = 'none';

            // Calls next function
            q27();
        }
    });

    c26.addEventListener("click", function checkc26(){
        if (c26.click){
            // Hide answers
            a26.style.display = 'none';
            b26.style.display = 'none';
            c26.style.display = 'none';
            d26.style.display = 'none';

            // Calls next function
            q27();
        }
    });

    d26.addEventListener("click", function checkd26(){
        if(d26.click){
            // Hide answers
            a26.style.display = 'none';
            b26.style.display = 'none';
            c26.style.display = 'none';
            d26.style.display = 'none';

            // Calls next function
            q27();
        }
    });
};

// Nebraska Question
function q27(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[26]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Grand Island`, `Omaha`, `${capitols[26]}`,`North Platte`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a27 = document.createElement('button');
    let b27 = document.createElement('button');
    let c27 = document.createElement('button');
    let d27 = document.createElement('button');


    // Set text for each button
    a27.innerHTML = `<button id = "a27" class = "a">${answerOptions[0]}</button>`;
    b27.innerHTML = `<button id = "b27" class = "b">${answerOptions[1]}</button>`;
    c27.innerHTML = `<button id = "c27" class = "c">${answerOptions[2]}</button>`;
    d27.innerHTML = `<button id = "d27" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a27);
    answerSection.appendChild(b27);
    answerSection.appendChild(c27);
    answerSection.appendChild(d27);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a27.addEventListener("click", function checka27(){
        if (a27.click){
            // Hide answers
            a27.style.display = 'none';
            b27.style.display = 'none';
            c27.style.display = 'none';
            d27.style.display = 'none';

            // Calls next function
            q28();
        }
    });

    b27.addEventListener("click", function checkb27(){
        if (b27.click){
            // Hide answers
            a27.style.display = 'none';
            b27.style.display = 'none';
            c27.style.display = 'none';
            d27.style.display = 'none';

            // Calls next function
            q28();
        }
    });

    c27.addEventListener("click", function checkc27(){
        if (c27.click){
            // Hide answers
            a27.style.display = 'none';
            b27.style.display = 'none';
            c27.style.display = 'none';
            d27.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q28();
        }
    });

    d27.addEventListener("click", function checkd27(){
        if(d27.click){
            // Hide answers
            a27.style.display = 'none';
            b27.style.display = 'none';
            c27.style.display = 'none';
            d27.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q28();
        }
    });
};

// Nevada Question
function q28(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[27]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Reno`, `Mesquite`, `Las Vegas`,`${capitols[27]}`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a28 = document.createElement('button');
    let b28 = document.createElement('button');
    let c28 = document.createElement('button');
    let d28 = document.createElement('button');


    // Set text for each button
    a28.innerHTML = `<button id = "a28" class = "a">${answerOptions[0]}</button>`;
    b28.innerHTML = `<button id = "b28" class = "b">${answerOptions[1]}</button>`;
    c28.innerHTML = `<button id = "c28" class = "c">${answerOptions[2]}</button>`;
    d28.innerHTML = `<button id = "d28" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a28);
    answerSection.appendChild(b28);
    answerSection.appendChild(c28);
    answerSection.appendChild(d28);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a28.addEventListener("click", function checka28(){
        if (a28.click){
            // Hide answers
            a28.style.display = 'none';
            b28.style.display = 'none';
            c28.style.display = 'none';
            d28.style.display = 'none';

            // Calls next function
            q29();
        }
    });

    b28.addEventListener("click", function checkb28(){
        if (b28.click){
            // Hide answers
            a28.style.display = 'none';
            b28.style.display = 'none';
            c28.style.display = 'none';
            d28.style.display = 'none';

            // Calls next function
            q29();
        }
    });

    c28.addEventListener("click", function checkc28(){
        if (c28.click){
            // Hide answers
            a28.style.display = 'none';
            b28.style.display = 'none';
            c28.style.display = 'none';
            d28.style.display = 'none';

            // Calls next function
            q29();
        }
    });

    d28.addEventListener("click", function checkd28(){
        if(d28.click){
            // Hide answers
            a28.style.display = 'none';
            b28.style.display = 'none';
            c28.style.display = 'none';
            d28.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q29();
        }
    });
};

// New Hampshire Question
function q29(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[28]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Manchester`, `Portsmouth`, `Littleton`,`${capitols[28]}`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a29 = document.createElement('button');
    let b29 = document.createElement('button');
    let c29 = document.createElement('button');
    let d29 = document.createElement('button');


    // Set text for each button
    a29.innerHTML = `<button id = "a29" class = "a">${answerOptions[0]}</button>`;
    b29.innerHTML = `<button id = "b29" class = "b">${answerOptions[1]}</button>`;
    c29.innerHTML = `<button id = "c29" class = "c">${answerOptions[2]}</button>`;
    d29.innerHTML = `<button id = "d20" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a29);
    answerSection.appendChild(b29);
    answerSection.appendChild(c29);
    answerSection.appendChild(d29);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a29.addEventListener("click", function checka29(){
        if (a29.click){
            // Hide answers
            a29.style.display = 'none';
            b29.style.display = 'none';
            c29.style.display = 'none';
            d29.style.display = 'none';

            // Calls next function
            q30();
        }
    });

    b29.addEventListener("click", function checkb29(){
        if (b29.click){
            // Hide answers
            a29.style.display = 'none';
            b29.style.display = 'none';
            c29.style.display = 'none';
            d29.style.display = 'none';

            // Calls next function
            q30();
        }
    });

    c29.addEventListener("click", function checkc29(){
        if (c29.click){
            // Hide answers
            a29.style.display = 'none';
            b29.style.display = 'none';
            c29.style.display = 'none';
            d29.style.display = 'none';

            // Calls next function
            q30();
        }
    });

    d29.addEventListener("click", function checkd29(){
        if(d29.click){
            // Hide answers
            a29.style.display = 'none';
            b29.style.display = 'none';
            c29.style.display = 'none';
            d29.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q30();
        }
    });
};

// New Jersey Question
function q30(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[29]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[29]}`, `Jersey City`, `Camden`,`Newark`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a30 = document.createElement('button');
    let b30 = document.createElement('button');
    let c30 = document.createElement('button');
    let d30 = document.createElement('button');


    // Set text for each button
    a30.innerHTML = `<button id = "a30" class = "a">${answerOptions[0]}</button>`;
    b30.innerHTML = `<button id = "b30" class = "b">${answerOptions[1]}</button>`;
    c30.innerHTML = `<button id = "c30" class = "c">${answerOptions[2]}</button>`;
    d30.innerHTML = `<button id = "d30" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a30);
    answerSection.appendChild(b30);
    answerSection.appendChild(c30);
    answerSection.appendChild(d30);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a30.addEventListener("click", function checka30(){
        if (a30.click){
            // Hide answers
            a30.style.display = 'none';
            b30.style.display = 'none';
            c30.style.display = 'none';
            d30.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q31();
        }
    });

    b30.addEventListener("click", function checkb30(){
        if (b30.click){
            // Hide answers
            a30.style.display = 'none';
            b30.style.display = 'none';
            c30.style.display = 'none';
            d30.style.display = 'none';

            // Calls next function
            q31();
        }
    });

    c30.addEventListener("click", function checkc30(){
        if (c30.click){
            // Hide answers
            a30.style.display = 'none';
            b30.style.display = 'none';
            c30.style.display = 'none';
            d30.style.display = 'none';

            // Calls next function
            q31();
        }
    });

    d30.addEventListener("click", function checkd30(){
        if(d30.click){
            // Hide answers
            a30.style.display = 'none';
            b30.style.display = 'none';
            c30.style.display = 'none';
            d30.style.display = 'none';

            // Calls next function
            q31();
        }
    });
};


// New Mexico Question
function q31(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[30]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Los Alamos`, `Albuquerque`, `${capitols[30]}`, `Las Cruces`];
    
    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';
    
    // Parent element
    let answerSection = document.querySelector('#answerChoices');
    
    // Create new buttons for responses
    let a31 = document.createElement('button');
    let b31 = document.createElement('button');
    let c31 = document.createElement('button');
    let d31 = document.createElement('button');
    
    
    // Set text for each button
    a31.innerHTML = `<button id = "a31" class = "a">${answerOptions[0]}</button>`;
    b31.innerHTML = `<button id = "b31" class = "b">${answerOptions[1]}</button>`;
    c31.innerHTML = `<button id = "c31" class = "c">${answerOptions[2]}</button>`;
    d31.innerHTML = `<button id = "d31" class = "d">${answerOptions[3]}</button>`;
    
    
    // Append each button
    answerSection.appendChild(a31);
    answerSection.appendChild(b31);
    answerSection.appendChild(c31);
    answerSection.appendChild(d31);
    
    // Remove play button 
    playBtnDiv.style.display = 'none';
    
    
    // Event listeners for each option
    a31.addEventListener("click", function checka31(){
        if (a31.click){
            // Hide answers
            a31.style.display = 'none';
            b31.style.display = 'none';
            c31.style.display = 'none';
            d31.style.display = 'none';
            
            // Calls next function
            q32();
        }
    });
    
    b31.addEventListener("click", function checkb31(){
        if (b31.click){
            // Hide answers
            a31.style.display = 'none';
            b31.style.display = 'none';
            c31.style.display = 'none';
            d31.style.display = 'none';
            
            // Calls next function
            q32();
        }
    });
    
    c31.addEventListener("click", function checkc31(){
        if (c31.click){
            // Hide answers
            a31.style.display = 'none';
            b31.style.display = 'none';
            c31.style.display = 'none';
            d31.style.display = 'none';

            // Increment score by 1
            correct ++;
            
            // Calls next function
            q32();
        }
    });
    
    d31.addEventListener("click", function checkd31(){
        if(d31.click){
            // Hide answers
            a31.style.display = 'none';
            b31.style.display = 'none';
            c31.style.display = 'none';
            d31.style.display = 'none';
            
            // Calls next function
            q32();
        }
    });
};

// New York Question
function q32(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[31]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Buffalo`, `${capitols[31]}`, `Syracuse`,`New York City`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a32 = document.createElement('button');
    let b32 = document.createElement('button');
    let c32 = document.createElement('button');
    let d32 = document.createElement('button');


    // Set text for each button
    a32.innerHTML = `<button id = "a32" class = "a">${answerOptions[0]}</button>`;
    b32.innerHTML = `<button id = "b32" class = "b">${answerOptions[1]}</button>`;
    c32.innerHTML = `<button id = "c32" class = "c">${answerOptions[2]}</button>`;
    d32.innerHTML = `<button id = "d32" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a32);
    answerSection.appendChild(b32);
    answerSection.appendChild(c32);
    answerSection.appendChild(d32);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a32.addEventListener("click", function checka32(){
        if (a32.click){
            // Hide answers
            a32.style.display = 'none';
            b32.style.display = 'none';
            c32.style.display = 'none';
            d32.style.display = 'none';

            // Calls next function
            q33();
        }
    });

    b32.addEventListener("click", function checkb32(){
        if (b32.click){
            // Hide answers
            a32.style.display = 'none';
            b32.style.display = 'none';
            c32.style.display = 'none';
            d32.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q33();
        }
    });

    c32.addEventListener("click", function checkc32(){
        if (c32.click){
            // Hide answers
            a32.style.display = 'none';
            b32.style.display = 'none';
            c32.style.display = 'none';
            d32.style.display = 'none';

            // Calls next function
            q33();
        }
    });

    d32.addEventListener("click", function checkd32(){
        if(d32.click){
            // Hide answers
            a32.style.display = 'none';
            b32.style.display = 'none';
            c32.style.display = 'none';
            d32.style.display = 'none';

            // Calls next function
            q33();
        }
    });
};

// North Carolina Question
function q33(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[32]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Charlotte`, `${capitols[32]}`, `Greensboro`,`Asheville`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a33 = document.createElement('button');
    let b33 = document.createElement('button');
    let c33 = document.createElement('button');
    let d33 = document.createElement('button');


    // Set text for each button
    a33.innerHTML = `<button id = "a33" class = "a">${answerOptions[0]}</button>`;
    b33.innerHTML = `<button id = "b33" class = "b">${answerOptions[1]}</button>`;
    c33.innerHTML = `<button id = "c33" class = "c">${answerOptions[2]}</button>`;
    d33.innerHTML = `<button id = "d33" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a33);
    answerSection.appendChild(b33);
    answerSection.appendChild(c33);
    answerSection.appendChild(d33);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a33.addEventListener("click", function checka33(){
        if (a33.click){
            // Hide answers
            a33.style.display = 'none';
            b33.style.display = 'none';
            c33.style.display = 'none';
            d33.style.display = 'none';

            // Calls next function
            q34();
        }
    });

    b33.addEventListener("click", function checkb33(){
        if (b33.click){
            // Hide answers
            a33.style.display = 'none';
            b33.style.display = 'none';
            c33.style.display = 'none';
            d33.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q34();
        }
    });

    c33.addEventListener("click", function checkc33(){
        if (c33.click){
            // Hide answers
            a33.style.display = 'none';
            b33.style.display = 'none';
            c33.style.display = 'none';
            d33.style.display = 'none';

            // Calls next function
            q34();
        }
    });

    d33.addEventListener("click", function checkd33(){
        if(d33.click){
            // Hide answers
            a33.style.display = 'none';
            b33.style.display = 'none';
            c33.style.display = 'none';
            d33.style.display = 'none';

            // Calls next function
            q34();
        }
    });
};

// North Dakota Question
function q34(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[33]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[33]}`, `Fargo`, `Grafton`,`Rugby`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a34 = document.createElement('button');
    let b34 = document.createElement('button');
    let c34 = document.createElement('button');
    let d34 = document.createElement('button');


    // Set text for each button
    a34.innerHTML = `<button id = "a34" class = "a">${answerOptions[0]}</button>`;
    b34.innerHTML = `<button id = "b34" class = "b">${answerOptions[1]}</button>`;
    c34.innerHTML = `<button id = "c34" class = "c">${answerOptions[2]}</button>`;
    d34.innerHTML = `<button id = "d34" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a34);
    answerSection.appendChild(b34);
    answerSection.appendChild(c34);
    answerSection.appendChild(d34);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a34.addEventListener("click", function checka34(){
        if (a34.click){
            // Hide answers
            a34.style.display = 'none';
            b34.style.display = 'none';
            c34.style.display = 'none';
            d34.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q35();
        }
    });

    b34.addEventListener("click", function checkb34(){
        if (b34.click){
            // Hide answers
            a34.style.display = 'none';
            b34.style.display = 'none';
            c34.style.display = 'none';
            d34.style.display = 'none';

            // Calls next function
            q35();
        }
    });

    c34.addEventListener("click", function checkc34(){
        if (c34.click){
            // Hide answers
            a34.style.display = 'none';
            b34.style.display = 'none';
            c34.style.display = 'none';
            d34.style.display = 'none';

            // Calls next function
            q35();
        }
    });

    d34.addEventListener("click", function checkd34(){
        if(d34.click){
            // Hide answers
            a34.style.display = 'none';
            b34.style.display = 'none';
            c34.style.display = 'none';
            d34.style.display = 'none';

            // Calls next function
            q35();
        }
    });
};

// Ohio Question
function q35(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[34]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Cleveland`, `${capitols[34]}`, `Dayton`,`Toledo`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a35 = document.createElement('button');
    let b35 = document.createElement('button');
    let c35 = document.createElement('button');
    let d35 = document.createElement('button');


    // Set text for each button
    a35.innerHTML = `<button id = "a35" class = "a">${answerOptions[0]}</button>`;
    b35.innerHTML = `<button id = "b35" class = "b">${answerOptions[1]}</button>`;
    c35.innerHTML = `<button id = "c35" class = "c">${answerOptions[2]}</button>`;
    d35.innerHTML = `<button id = "d35" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a35);
    answerSection.appendChild(b35);
    answerSection.appendChild(c35);
    answerSection.appendChild(d35);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a35.addEventListener("click", function checka35(){
        if (a35.click){
            // Hide answers
            a35.style.display = 'none';
            b35.style.display = 'none';
            c35.style.display = 'none';
            d35.style.display = 'none';

            // Calls next function
            q36();
        }
    });

    b35.addEventListener("click", function checkb35(){
        if (b35.click){
            // Hide answers
            a35.style.display = 'none';
            b35.style.display = 'none';
            c35.style.display = 'none';
            d35.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q36();
        }
    });

    c35.addEventListener("click", function checkc35(){
        if (c35.click){
            // Hide answers
            a35.style.display = 'none';
            b35.style.display = 'none';
            c35.style.display = 'none';
            d35.style.display = 'none';

            // Calls next function
            q36();
        }
    });

    d35.addEventListener("click", function checkd35(){
        if(d35.click){
            // Hide answers
            a35.style.display = 'none';
            b35.style.display = 'none';
            c35.style.display = 'none';
            d35.style.display = 'none';

            // Calls next function
            q36();
        }
    });
};

// Oklahoma Question
function q36(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[35]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[35]}`, `Chickasha`, `Tulsa`,`Boise City`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a36 = document.createElement('button');
    let b36 = document.createElement('button');
    let c36 = document.createElement('button');
    let d36 = document.createElement('button');


    // Set text for each button
    a36.innerHTML = `<button id = "a36" class = "a">${answerOptions[0]}</button>`;
    b36.innerHTML = `<button id = "b36" class = "b">${answerOptions[1]}</button>`;
    c36.innerHTML = `<button id = "c36" class = "c">${answerOptions[2]}</button>`;
    d36.innerHTML = `<button id = "d36" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a36);
    answerSection.appendChild(b36);
    answerSection.appendChild(c36);
    answerSection.appendChild(d36);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a36.addEventListener("click", function checka36(){
        if (a36.click){
            // Hide answers
            a36.style.display = 'none';
            b36.style.display = 'none';
            c36.style.display = 'none';
            d36.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q37();
        }
    });

    b36.addEventListener("click", function checkb36(){
        if (b36.click){
            // Hide answers
            a36.style.display = 'none';
            b36.style.display = 'none';
            c36.style.display = 'none';
            d36.style.display = 'none';

            // Calls next function
            q37();
        }
    });

    c36.addEventListener("click", function checkc36(){
        if (c36.click){
            // Hide answers
            a36.style.display = 'none';
            b36.style.display = 'none';
            c36.style.display = 'none';
            d36.style.display = 'none';

            // Calls next function
            q37();
        }
    });

    d36.addEventListener("click", function checkd36(){
        if(d36.click){
            // Hide answers
            a36.style.display = 'none';
            b36.style.display = 'none';
            c36.style.display = 'none';
            d36.style.display = 'none';

            // Calls next function
            q37();
        }
    });
};

// Oregon Question
function q37(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[36]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Tillamook`, `Eugene`, `Portland`,`${capitols[36]}`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a37 = document.createElement('button');
    let b37 = document.createElement('button');
    let c37 = document.createElement('button');
    let d37 = document.createElement('button');


    // Set text for each button
    a37.innerHTML = `<button id = "a37" class = "a">${answerOptions[0]}</button>`;
    b37.innerHTML = `<button id = "b37" class = "b">${answerOptions[1]}</button>`;
    c37.innerHTML = `<button id = "c37" class = "c">${answerOptions[2]}</button>`;
    d37.innerHTML = `<button id = "d37" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a37);
    answerSection.appendChild(b37);
    answerSection.appendChild(c37);
    answerSection.appendChild(d37);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a37.addEventListener("click", function checka37(){
        if (a37.click){
            // Hide answers
            a37.style.display = 'none';
            b37.style.display = 'none';
            c37.style.display = 'none';
            d37.style.display = 'none';

            // Calls next function
            q38();
        }
    });

    b37.addEventListener("click", function checkb37(){
        if (b37.click){
            // Hide answers
            a37.style.display = 'none';
            b37.style.display = 'none';
            c37.style.display = 'none';
            d37.style.display = 'none';

            // Calls next function
            q38();
        }
    });

    c37.addEventListener("click", function checkc37(){
        if (c37.click){
            // Hide answers
            a37.style.display = 'none';
            b37.style.display = 'none';
            c37.style.display = 'none';
            d37.style.display = 'none';

            // Calls next function
            q38();
        }
    });

    d37.addEventListener("click", function checkd37(){
        if(d37.click){
            // Hide answers
            a37.style.display = 'none';
            b37.style.display = 'none';
            c37.style.display = 'none';
            d37.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q38();
        }
    });
};

// Pennsylvania Question
function q38(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[37]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Pittsburgh`, `${capitols[37]}`, `Erie`,`Philadelphia`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a38 = document.createElement('button');
    let b38 = document.createElement('button');
    let c38 = document.createElement('button');
    let d38 = document.createElement('button');


    // Set text for each button
    a38.innerHTML = `<button id = "a38" class = "a">${answerOptions[0]}</button>`;
    b38.innerHTML = `<button id = "b38" class = "b">${answerOptions[1]}</button>`;
    c38.innerHTML = `<button id = "c38" class = "c">${answerOptions[2]}</button>`;
    d38.innerHTML = `<button id = "d38" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a38);
    answerSection.appendChild(b38);
    answerSection.appendChild(c38);
    answerSection.appendChild(d38);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a38.addEventListener("click", function checka38(){
        if (a38.click){
            // Hide answers
            a38.style.display = 'none';
            b38.style.display = 'none';
            c38.style.display = 'none';
            d38.style.display = 'none';

            // Calls next function
            q39();
        }
    });

    b38.addEventListener("click", function checkb38(){
        if (b38.click){
            // Hide answers
            a38.style.display = 'none';
            b38.style.display = 'none';
            c38.style.display = 'none';
            d38.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q39();
        }
    });

    c38.addEventListener("click", function checkc38(){
        if (c38.click){
            // Hide answers
            a38.style.display = 'none';
            b38.style.display = 'none';
            c38.style.display = 'none';
            d38.style.display = 'none';

            // Calls next function
            q39();
        }
    });

    d38.addEventListener("click", function checkd38(){
        if(d38.click){
            // Hide answers
            a38.style.display = 'none';
            b38.style.display = 'none';
            c38.style.display = 'none';
            d38.style.display = 'none';

            // Calls next function
            q39();
        }
    });
};

// Rhode Island Question
function q39(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[38]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Charlestown`, `Newport`, `Pawtucket`,`${capitols[38]}`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a39 = document.createElement('button');
    let b39 = document.createElement('button');
    let c39 = document.createElement('button');
    let d39 = document.createElement('button');


    // Set text for each button
    a39.innerHTML = `<button id = "a39" class = "a">${answerOptions[0]}</button>`;
    b39.innerHTML = `<button id = "b39" class = "b">${answerOptions[1]}</button>`;
    c39.innerHTML = `<button id = "c39" class = "c">${answerOptions[2]}</button>`;
    d39.innerHTML = `<button id = "d39" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a39);
    answerSection.appendChild(b39);
    answerSection.appendChild(c39);
    answerSection.appendChild(d39);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a39.addEventListener("click", function checka39(){
        if (a39.click){
            // Hide answers
            a39.style.display = 'none';
            b39.style.display = 'none';
            c39.style.display = 'none';
            d39.style.display = 'none';

            // Calls next function
            q40();
        }
    });

    b39.addEventListener("click", function checkb39(){
        if (b39.click){
            // Hide answers
            a39.style.display = 'none';
            b39.style.display = 'none';
            c39.style.display = 'none';
            d39.style.display = 'none';

            // Calls next function
            q40();
        }
    });

    c39.addEventListener("click", function checkc39(){
        if (c39.click){
            // Hide answers
            a39.style.display = 'none';
            b39.style.display = 'none';
            c39.style.display = 'none';
            d39.style.display = 'none';

            // Calls next function
            q40();
        }
    });

    d39.addEventListener("click", function checkd39(){
        if(d39.click){
            // Hide answers
            a39.style.display = 'none';
            b39.style.display = 'none';
            c39.style.display = 'none';
            d39.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q40();
        }
    });
};

// South Carolina Question
function q40(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[39]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Charleston`, `Hilton Head`, `${capitols[39]}`,`Myrtle Beach`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a40 = document.createElement('button');
    let b40 = document.createElement('button');
    let c40 = document.createElement('button');
    let d40 = document.createElement('button');


    // Set text for each button
    a40.innerHTML = `<button id = "a40" class = "a">${answerOptions[0]}</button>`;
    b40.innerHTML = `<button id = "b40" class = "b">${answerOptions[1]}</button>`;
    c40.innerHTML = `<button id = "c40" class = "c">${answerOptions[2]}</button>`;
    d40.innerHTML = `<button id = "d40" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a40);
    answerSection.appendChild(b40);
    answerSection.appendChild(c40);
    answerSection.appendChild(d40);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a40.addEventListener("click", function checka40(){
        if (a40.click){
            // Hide answers
            a40.style.display = 'none';
            b40.style.display = 'none';
            c40.style.display = 'none';
            d40.style.display = 'none';

            // Calls next function
            q41();
        }
    });

    b40.addEventListener("click", function checkb40(){
        if (b40.click){
            // Hide answers
            a40.style.display = 'none';
            b40.style.display = 'none';
            c40.style.display = 'none';
            d40.style.display = 'none';

            // Calls next function
            q41();
        }
    });

    c40.addEventListener("click", function checkc40(){
        if (c40.click){
            // Hide answers
            a40.style.display = 'none';
            b40.style.display = 'none';
            c40.style.display = 'none';
            d40.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q41();
        }
    });

    d40.addEventListener("click", function checkd40(){
        if(d40.click){
            // Hide answers
            a40.style.display = 'none';
            b40.style.display = 'none';
            c40.style.display = 'none';
            d40.style.display = 'none';

            // Calls next function
            q41();
        }
    });
};

// South Dakota Question
function q41(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[40]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[40]}`, `Rapid City`, `Aberdeen`,`Sioux Falls`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a41 = document.createElement('button');
    let b41 = document.createElement('button');
    let c41 = document.createElement('button');
    let d41 = document.createElement('button');


    // Set text for each button
    a41.innerHTML = `<button id = "a41" class = "a">${answerOptions[0]}</button>`;
    b41.innerHTML = `<button id = "b41" class = "b">${answerOptions[1]}</button>`;
    c41.innerHTML = `<button id = "c41" class = "c">${answerOptions[2]}</button>`;
    d41.innerHTML = `<button id = "d41" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a41);
    answerSection.appendChild(b41);
    answerSection.appendChild(c41);
    answerSection.appendChild(d41);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a41.addEventListener("click", function checka41(){
        if (a41.click){
            // Hide answers
            a41.style.display = 'none';
            b41.style.display = 'none';
            c41.style.display = 'none';
            d41.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q42();
        }
    });

    b41.addEventListener("click", function checkb41(){
        if (b41.click){
            // Hide answers
            a41.style.display = 'none';
            b41.style.display = 'none';
            c41.style.display = 'none';
            d41.style.display = 'none';

            // Calls next function
            q42();
        }
    });

    c41.addEventListener("click", function checkc41(){
        if (c41.click){
            // Hide answers
            a41.style.display = 'none';
            b41.style.display = 'none';
            c41.style.display = 'none';
            d41.style.display = 'none';

            // Calls next function
            q42();
        }
    });

    d41.addEventListener("click", function checkd41(){
        if(d41.click){
            // Hide answers
            a41.style.display = 'none';
            b41.style.display = 'none';
            c41.style.display = 'none';
            d41.style.display = 'none';

            // Calls next function
            q42();
        }
    });
};

// Tennessee Question
function q42(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[41]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Memphis`, `${capitols[41]}`, `Knoxville`,`Bristol`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a42 = document.createElement('button');
    let b42 = document.createElement('button');
    let c42 = document.createElement('button');
    let d42 = document.createElement('button');


    // Set text for each button
    a42.innerHTML = `<button id = "a42" class = "a">${answerOptions[0]}</button>`;
    b42.innerHTML = `<button id = "b42" class = "b">${answerOptions[1]}</button>`;
    c42.innerHTML = `<button id = "c42" class = "c">${answerOptions[2]}</button>`;
    d42.innerHTML = `<button id = "d42" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a42);
    answerSection.appendChild(b42);
    answerSection.appendChild(c42);
    answerSection.appendChild(d42);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a42.addEventListener("click", function checka42(){
        if (a42.click){
            // Hide answers
            a42.style.display = 'none';
            b42.style.display = 'none';
            c42.style.display = 'none';
            d42.style.display = 'none';

            // Calls next function
            q43();
        }
    });

    b42.addEventListener("click", function checkb42(){
        if (b42.click){
            // Hide answers
            a42.style.display = 'none';
            b42.style.display = 'none';
            c42.style.display = 'none';
            d42.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q43();
        }
    });

    c42.addEventListener("click", function checkc42(){
        if (c42.click){
            // Hide answers
            a42.style.display = 'none';
            b42.style.display = 'none';
            c42.style.display = 'none';
            d42.style.display = 'none';

            // Calls next function
            q43();
        }
    });

    d42.addEventListener("click", function checkd42(){
        if(d42.click){
            // Hide answers
            a42.style.display = 'none';
            b42.style.display = 'none';
            c42.style.display = 'none';
            d42.style.display = 'none';

            // Calls next function
            q43();
        }
    });
};

// Texas Question
function q43(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[42]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Houston`, `El Paso`, `San Antonio`,`${capitols[42]}`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a43 = document.createElement('button');
    let b43 = document.createElement('button');
    let c43 = document.createElement('button');
    let d43 = document.createElement('button');


    // Set text for each button
    a43.innerHTML = `<button id = "a43" class = "a">${answerOptions[0]}</button>`;
    b43.innerHTML = `<button id = "b43" class = "b">${answerOptions[1]}</button>`;
    c43.innerHTML = `<button id = "c43" class = "c">${answerOptions[2]}</button>`;
    d43.innerHTML = `<button id = "d43" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a43);
    answerSection.appendChild(b43);
    answerSection.appendChild(c43);
    answerSection.appendChild(d43);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a43.addEventListener("click", function checka43(){
        if (a43.click){
            // Hide answers
            a43.style.display = 'none';
            b43.style.display = 'none';
            c43.style.display = 'none';
            d43.style.display = 'none';

            // Calls next function
            q44();
        }
    });

    b43.addEventListener("click", function checkb43(){
        if (b43.click){
            // Hide answers
            a43.style.display = 'none';
            b43.style.display = 'none';
            c43.style.display = 'none';
            d43.style.display = 'none';

            // Calls next function
            q44();
        }
    });

    c43.addEventListener("click", function checkc43(){
        if (c43.click){
            // Hide answers
            a43.style.display = 'none';
            b43.style.display = 'none';
            c43.style.display = 'none';
            d43.style.display = 'none';

            // Calls next function
            q44();
        }
    });

    d43.addEventListener("click", function checkd43(){
        if(d43.click){
            // Hide answers
            a43.style.display = 'none';
            b43.style.display = 'none';
            c43.style.display = 'none';
            d43.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q44();
        }
    });
};

// Utah Question
function q44(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[43]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`St. George`, `Ogden`, `${capitols[43]}`,`Moab`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a44 = document.createElement('button');
    let b44 = document.createElement('button');
    let c44 = document.createElement('button');
    let d44 = document.createElement('button');


    // Set text for each button
    a44.innerHTML = `<button id = "a44" class = "a">${answerOptions[0]}</button>`;
    b44.innerHTML = `<button id = "b44" class = "b">${answerOptions[1]}</button>`;
    c44.innerHTML = `<button id = "c44" class = "c">${answerOptions[2]}</button>`;
    d44.innerHTML = `<button id = "d44" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a44);
    answerSection.appendChild(b44);
    answerSection.appendChild(c44);
    answerSection.appendChild(d44);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a44.addEventListener("click", function checka44(){
        if (a44.click){
            // Hide answers
            a44.style.display = 'none';
            b44.style.display = 'none';
            c44.style.display = 'none';
            d44.style.display = 'none';

            // Calls next function
            q45();
        }
    });

    b44.addEventListener("click", function checkb44(){
        if (b44.click){
            // Hide answers
            a44.style.display = 'none';
            b44.style.display = 'none';
            c44.style.display = 'none';
            d44.style.display = 'none';

            // Calls next function
            q45();
        }
    });

    c44.addEventListener("click", function checkc44(){
        if (c44.click){
            // Hide answers
            a44.style.display = 'none';
            b44.style.display = 'none';
            c44.style.display = 'none';
            d44.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q45();
        }
    });

    d44.addEventListener("click", function checkd44(){
        if(d44.click){
            // Hide answers
            a44.style.display = 'none';
            b44.style.display = 'none';
            c44.style.display = 'none';
            d44.style.display = 'none';

            // Calls next function
            q45();
        }
    });
};

// Vermont Question
function q45(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[44]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[44]}`, `Newport`, `Brattleboro`,`Manchester`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a45 = document.createElement('button');
    let b45 = document.createElement('button');
    let c45 = document.createElement('button');
    let d45 = document.createElement('button');


    // Set text for each button
    a45.innerHTML = `<button id = "a45" class = "a">${answerOptions[0]}</button>`;
    b45.innerHTML = `<button id = "b45" class = "b">${answerOptions[1]}</button>`;
    c45.innerHTML = `<button id = "c45" class = "c">${answerOptions[2]}</button>`;
    d45.innerHTML = `<button id = "d45" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a45);
    answerSection.appendChild(b45);
    answerSection.appendChild(c45);
    answerSection.appendChild(d45);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a45.addEventListener("click", function checka45(){
        if (a45.click){
            // Hide answers
            a45.style.display = 'none';
            b45.style.display = 'none';
            c45.style.display = 'none';
            d45.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q46();
        }
    });

    b45.addEventListener("click", function checkb45(){
        if (b45.click){
            // Hide answers
            a45.style.display = 'none';
            b45.style.display = 'none';
            c45.style.display = 'none';
            d45.style.display = 'none';

            // Calls next function
            q46();
        }
    });

    c45.addEventListener("click", function checkc45(){
        if (c45.click){
            // Hide answers
            a45.style.display = 'none';
            b45.style.display = 'none';
            c45.style.display = 'none';
            d45.style.display = 'none';

            // Calls next function
            q46();
        }
    });

    d45.addEventListener("click", function checkd45(){
        if(d45.click){
            // Hide answers
            a45.style.display = 'none';
            b45.style.display = 'none';
            c45.style.display = 'none';
            d45.style.display = 'none';

            // Calls next function
            q46();
        }
    });
};

// Virginia Question
function q46(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[45]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[45]}`, `Alexandria`, `Virginia Beach`,`Norfolk`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a46 = document.createElement('button');
    let b46 = document.createElement('button');
    let c46 = document.createElement('button');
    let d46 = document.createElement('button');


    // Set text for each button
    a46.innerHTML = `<button id = "a46" class = "a">${answerOptions[0]}</button>`;
    b46.innerHTML = `<button id = "b46" class = "b">${answerOptions[1]}</button>`;
    c46.innerHTML = `<button id = "c46" class = "c">${answerOptions[2]}</button>`;
    d46.innerHTML = `<button id = "d46" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a46);
    answerSection.appendChild(b46);
    answerSection.appendChild(c46);
    answerSection.appendChild(d46);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a46.addEventListener("click", function checka46(){
        if (a46.click){
            // Hide answers
            a46.style.display = 'none';
            b46.style.display = 'none';
            c46.style.display = 'none';
            d46.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q47();
        }
    });

    b46.addEventListener("click", function checkb46(){
        if (b46.click){
            // Hide answers
            a46.style.display = 'none';
            b46.style.display = 'none';
            c46.style.display = 'none';
            d46.style.display = 'none';

            // Calls next function
            q47();
        }
    });

    c46.addEventListener("click", function checkc46(){
        if (c46.click){
            // Hide answers
            a46.style.display = 'none';
            b46.style.display = 'none';
            c46.style.display = 'none';
            d46.style.display = 'none';

            // Calls next function
            q47();
        }
    });

    d46.addEventListener("click", function checkd46(){
        if(d46.click){
            // Hide answers
            a46.style.display = 'none';
            b46.style.display = 'none';
            c46.style.display = 'none';
            d46.style.display = 'none';

            // Calls next function
            q47();
        }
    });
};

// Washington Question
function q47(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[46]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Vancouver`, `Spokane`, `${capitols[46]}`,`Seattle`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a47 = document.createElement('button');
    let b47 = document.createElement('button');
    let c47 = document.createElement('button');
    let d47 = document.createElement('button');


    // Set text for each button
    a47.innerHTML = `<button id = "a47" class = "a">${answerOptions[0]}</button>`;
    b47.innerHTML = `<button id = "b47" class = "b">${answerOptions[1]}</button>`;
    c47.innerHTML = `<button id = "c47" class = "c">${answerOptions[2]}</button>`;
    d47.innerHTML = `<button id = "d47" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a47);
    answerSection.appendChild(b47);
    answerSection.appendChild(c47);
    answerSection.appendChild(d47);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a47.addEventListener("click", function checka47(){
        if (a47.click){
            // Hide answers
            a47.style.display = 'none';
            b47.style.display = 'none';
            c47.style.display = 'none';
            d47.style.display = 'none';

            // Calls next function
            q48();
        }
    });

    b47.addEventListener("click", function checkb47(){
        if (b47.click){
            // Hide answers
            a47.style.display = 'none';
            b47.style.display = 'none';
            c47.style.display = 'none';
            d47.style.display = 'none';

            // Calls next function
            q48();
        }
    });

    c47.addEventListener("click", function checkc47(){
        if (c47.click){
            // Hide answers
            a47.style.display = 'none';
            b47.style.display = 'none';
            c47.style.display = 'none';
            d47.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q48();
        }
    });

    d47.addEventListener("click", function checkd47(){
        if(d47.click){
            // Hide answers
            a47.style.display = 'none';
            b47.style.display = 'none';
            c47.style.display = 'none';
            d47.style.display = 'none';

            // Calls next function
            q48();
        }
    });
};

// South Carolina Question
function q48(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[47]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Fayatteville`, `${capitols[47]}`, `Morgantown`,`Hurricane`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a48 = document.createElement('button');
    let b48 = document.createElement('button');
    let c48 = document.createElement('button');
    let d48 = document.createElement('button');


    // Set text for each button
    a48.innerHTML = `<button id = "a48" class = "a">${answerOptions[0]}</button>`;
    b48.innerHTML = `<button id = "b48" class = "b">${answerOptions[1]}</button>`;
    c48.innerHTML = `<button id = "c48" class = "c">${answerOptions[2]}</button>`;
    d48.innerHTML = `<button id = "d48" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a48);
    answerSection.appendChild(b48);
    answerSection.appendChild(c48);
    answerSection.appendChild(d48);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a48.addEventListener("click", function checka48(){
        if (a48.click){
            // Hide answers
            a48.style.display = 'none';
            b48.style.display = 'none';
            c48.style.display = 'none';
            d48.style.display = 'none';

            // Calls next function
            q49();
        }
    });

    b48.addEventListener("click", function checkb48(){
        if (b48.click){
            // Hide answers
            a48.style.display = 'none';
            b48.style.display = 'none';
            c48.style.display = 'none';
            d48.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q49();
        }
    });

    c48.addEventListener("click", function checkc48(){
        if (c48.click){
            // Hide answers
            a48.style.display = 'none';
            b48.style.display = 'none';
            c48.style.display = 'none';
            d48.style.display = 'none';

            // Calls next function
            q49();
        }
    });

    d48.addEventListener("click", function checkd48(){
        if(d48.click){
            // Hide answers
            a48.style.display = 'none';
            b48.style.display = 'none';
            c48.style.display = 'none';
            d48.style.display = 'none';

            // Calls next function
            q49();
        }
    });
};

// Wisconsin Question
function q49(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[48]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`${capitols[48]}`, `Milwaukee`, `Green Bay`,`Wisconsin Dells`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a49 = document.createElement('button');
    let b49 = document.createElement('button');
    let c49 = document.createElement('button');
    let d49 = document.createElement('button');


    // Set text for each button
    a49.innerHTML = `<button id = "a49" class = "a">${answerOptions[0]}</button>`;
    b49.innerHTML = `<button id = "b49" class = "b">${answerOptions[1]}</button>`;
    c49.innerHTML = `<button id = "c49" class = "c">${answerOptions[2]}</button>`;
    d49.innerHTML = `<button id = "d49" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a49);
    answerSection.appendChild(b49);
    answerSection.appendChild(c49);
    answerSection.appendChild(d49);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a49.addEventListener("click", function checka49(){
        if (a49.click){
            // Hide answers
            a49.style.display = 'none';
            b49.style.display = 'none';
            c49.style.display = 'none';
            d49.style.display = 'none';

            // Increment score by 1
            correct ++;

            // Calls next function
            q50();
        }
    });

    b49.addEventListener("click", function checkb49(){
        if (b49.click){
            // Hide answers
            a49.style.display = 'none';
            b49.style.display = 'none';
            c49.style.display = 'none';
            d49.style.display = 'none';

            // Calls next function
            q50();
        }
    });

    c49.addEventListener("click", function checkc49(){
        if (c49.click){
            // Hide answers
            a49.style.display = 'none';
            b49.style.display = 'none';
            c49.style.display = 'none';
            d49.style.display = 'none';

            // Calls next function
            q50();
        }
    });

    d49.addEventListener("click", function checkd49(){
        if(d49.click){
            // Hide answers
            a49.style.display = 'none';
            b49.style.display = 'none';
            c49.style.display = 'none';
            d49.style.display = 'none';

            // Calls next function
            q50();
        }
    });
};

// Wyoming Question
function q50(){
    // Displays question for user to see
    let question = `What is the capitol of ${states[49]}`;
    questionDiv.innerHTML = question;
    
    // Answer Choices
    let answerOptions = [`Ten Sleep`, `${capitols[49]}`, `Casper`,`Rock Springs`];

    // Displays answers for user to select
    answerDiv.style.display = 'flex';
    answerDiv.style = 'flex-direction: column';

    // Parent element
    let answerSection = document.querySelector('#answerChoices');

    // Create new buttons for responses
    let a50 = document.createElement('button');
    let b50 = document.createElement('button');
    let c50 = document.createElement('button');
    let d50 = document.createElement('button');


    // Set text for each button
    a50.innerHTML = `<button id = "a50" class = "a">${answerOptions[0]}</button>`;
    b50.innerHTML = `<button id = "b50" class = "b">${answerOptions[1]}</button>`;
    c50.innerHTML = `<button id = "c50" class = "c">${answerOptions[2]}</button>`;
    d50.innerHTML = `<button id = "d50" class = "d">${answerOptions[3]}</button>`;


    // Append each button
    answerSection.appendChild(a50);
    answerSection.appendChild(b50);
    answerSection.appendChild(c50);
    answerSection.appendChild(d50);

    // Remove play button 
    playBtnDiv.style.display = 'none';


    // Event listeners for each option
   a50.addEventListener("click", function checka50(){
        if (a50.click){
            // Hide answers
            a50.style.display = 'none';
            b50.style.display = 'none';
            c50.style.display = 'none';
            d50.style.display = 'none';

            // Calls next function
            endQuiz();
        }
    });

    b50.addEventListener("click", function checkb50(){
        if (b50.click){
            // Hide answers
            a50.style.display = 'none';
            b50.style.display = 'none';
            c50.style.display = 'none';
            d50.style.display = 'none';

            // Inrement score by 1
            correct ++;

            // Calls next function
            endQuiz();
        }
    });

    c50.addEventListener("click", function checkc50(){
        if (c50.click){
            // Hide answers
            a50.style.display = 'none';
            b50.style.display = 'none';
            c50.style.display = 'none';
            d50.style.display = 'none';

            // Calls next function
            endQuiz();
        }
    });

    d50.addEventListener("click", function checkd50(){
        if(d50.click){
            // Hide answers
            a50.style.display = 'none';
            b50.style.display = 'none';
            c50.style.display = 'none';
            d50.style.display = 'none';

            // Calls next function
            endQuiz();
        }
    });
};

function endQuiz(){
    //Hide questionDiv and answerDiv
    questionDiv.style.display = 'none';
    answerDiv.style.display = 'none';
    
    // Display resultsDiv
    resultsDiv.style.display = 'flex';

    // Change correct to score
    score = `Score: ${correct}/50`

    // Set score to local storage while calling showResults function
    localStorage.setItem(score, showResults())
    
};

// Shows results at end of quiz from local storage
function showResults(){
    //Get score from local storage
    localStorage.getItem(score);

    // Display the score after pulling from local storage
    resultsDiv.innerHTML = `${score}`;
};

// Event Listeners and Init call
init();