'use strict';
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
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
// Grabs all of the answer buttons to make an event listener easier
const allAnswerButtons = document.querySelectorAll('.answer-btn')
const endGameContainer = document.getElementById('end-game-container');
const endGameDisplayScore = document.getElementById('display-score');
const initialsInput = document.getElementById('initials');
const submitInitialsButton = document.getElementById('submit-initials');
const highScoreContainerEl = document.getElementById('high-score-container');
const highScoreList = document.getElementById('high-score-list');
const highScoreGoBackButton = document.getElementById('go-back');
const clearHighScoresButton = document.getElementById('clear-high-scores');
const initialsForm = document.getElementById('initials-form')

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
        answer: 'C. alerts'
    }
]
//Gives the selection in the array a starting point of zero or the first question.
let questionIndex = 0;
var totalTime = 30;
var highScores = [];

//Start quiz function
function startQuiz() {
    //sets the index to zero again, creates a variable for the starting time and changes the text content to that said time
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
        if (totalTime < 0 || questionIndex >= questions.length) {
            clearInterval(startTimer);
            GameOver();

        }
    }, 1000);
    // renders the initial questions and answers
    renderQuestions();
}

//function that renders the initial questions and answers
function renderQuestions() {

    questionEl.textContent = questions[questionIndex].question;

    choiceA.textContent = questions[questionIndex].choices[0]
    choiceB.textContent = questions[questionIndex].choices[1]
    choiceC.textContent = questions[questionIndex].choices[2]
    choiceD.textContent = questions[questionIndex].choices[3]
};

var answerCheck = function (event) {
    var selectedAnswer = event.target
    if (questions[questionIndex].answer !== selectedAnswer.innerText) {
        totalTime = totalTime - 5;
    }

    questionIndex++;
    if (questionIndex < questions.length) {
        renderQuestions();
    } else {
        GameOver();
    }
}


function GameOver() {
    questionContainerEl.classList.remove('show');
    questionContainerEl.classList.add('hide');
    endGameContainer.classList.remove('hide');
    endGameContainer.classList.add('show');

    endGameDisplayScore.textContent = timerEl.textContent;
}
// displays highScore page and hides intro container
function highScore() {
    introContainer.classList.remove('show');
    introContainer.classList.add('hide');
    highScoreContainerEl.classList.remove('hide');
    highScoreContainerEl.classList.add('show');
    renderHighScoreList();
}

function goBack() {
    highScoreContainerEl.classList.remove('show');
    highScoreContainerEl.classList.add('hide');
    introContainer.classList.remove('hide');
    introContainer.classList.add('show');

}

function SubmitToHighScore() {
    endGameContainer.classList.remove('show');
    endGameContainer.classList.add('hide');
    highScoreContainerEl.classList.remove('hide');
    highScoreContainerEl.classList.add('show');
}

function renderHighScoreList(event) {
    event.preventDefault();
    var initials = localStorage.getItem(initials)
    var score = localStorage.getItem(score)
    if (!initials || !score) {
        return;
    }
    var li = document.createElement('li');
    li.textContent = initials, score;
    highScoreList.append(li)
}


function clearHighScores() {
    highScoreList.remove('li')
}

var clearScores = function () {
    highScores = [];
    while (highScoreList.firstChild) {
        highScoreList.removeChild(highScoreList.firstChild);
    }

    localStorage.clear(highScore)
}
//event listeners

//start game button
StartGameButton.addEventListener('click', startQuiz);
// check if answers are clicked and correct
questionContainerEl.addEventListener('click', answerCheck);
// view high score button
viewHighScoreEl.addEventListener('click', highScore);
// go back button in high score page
highScoreGoBackButton.addEventListener('click', goBack);
// add event listener to submit button that stores the users initials and there score.
submitInitialsButton.addEventListener('click', function (event) {
    event.preventDefault();

    var initials = document.getElementById('initials').value;
    var score = totalTime + 1;

    if (initials === '') {
        alert('error,You must enter initials');
        return;
    }

    var highScore = {
        initials: initials,
        score: score
    }
    localStorage.setItem('initials', initials)
    localStorage.setItem('score', score);
    SubmitToHighScore();
    highScores.push(highScore);
    highScores.sort((a, b) => { return b.score - a.score });

    for (var i = 0; i < highScores.length; i++) {
        var highScoresEl = document.createElement('li');
        highScoresEl.innerHTML = highScores[i].initials + ' - ' + highScores[i].score;
        highScoreList.append(highScoresEl);

        initialsForm.reset();

    }
})

clearHighScoresButton.addEventListener('click', clearScores)

