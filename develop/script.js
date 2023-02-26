// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
/* All needed variables*/

const viewHighScoreEl = document.getElementById('view-high-score');
//Need to add text content to display time and have time decrease by 1 per second
const timerEl = document.getElementById('timer');
const introContainer = document.getElementById('intro-container');
const StartGameButton = document.getElementById('start-quiz');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerA = document.getElementById('A');
const answerB = document.getElementById('B');
const answerC = document.getElementById('C');
const answerD = document.getElementById('D');
const endGameContainer = document.getElementById('end-game-container');
const endGameDisplayScore = document.getElementById('display-score');
const initialsInput = document.getElementById('initials');
const submitInitialsButton = document.getElementById('submit-initials');
const highScoreContainerEl = document.getElementById('high-score-container');
const highScoreList = document.getElementById('high-score-list');
const highScoreGoBackButton = document.getElementById('go-back');
const clearHighScoresButton = document.getElementById('clear-high-scores');

// Array of all questions that will be rendered
const questions = [
    {
        question: 'When was JavaScript created?',
        choices: ['A. 2001', 'B. 2009', 'C. It was always present', 'D. 1995'],
        answer: 'D. 1995'
    },
    {
        question: 'Inside of which HTML element do we put the JavaScript link?',
        choices: ['A. <js>', 'B. <javascript>', 'C. <scripting>', 'D. <script>'],
        answer: 'D. <script>'
    },
    {
        question: 'Arrays in JavaScript can be used to store ______',
        choices: ['A. strings', 'B. objects', 'C. arrays', 'D. All of the above'],
        answer: 'D. All of the above'
    },
    {
        question: 'Commonly used data types do not include?',
        choices: ['A. strings', 'B. booleans', 'C. alerts', 'D. numbers'],
        answer: 'C. numbers'
    }
]
//Gives the selection in the array a starting point of zero or the first question.
let questionIndex = 0;


//Start quiz function
function startQuiz() {
    //sets the index to zero again, creates a variable for the starting time and changes the text content to that said time
    var totalTime = 5;
    questionIndex = 0;
    timerEl.textContent = totalTime;
    // hides the IntroContainer and shows the questions container
    introContainer.classList.remove('show');
    introContainer.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    questionContainerEl.classList.add('show');
    //function to start the time and decrement by 1.
    var startTimer = setInterval(function () {
        timerEl.textContent = totalTime;
        totalTime--;
        if (totalTime < 0) {
            clearInterval(startTimer);
            if (questionIndex <= questions.length - 1) {
                console.log('this works') // will have to add the actual functionality 
            }
        }
    }, 1000);
}



// start game button
StartGameButton.addEventListener('click', startQuiz)