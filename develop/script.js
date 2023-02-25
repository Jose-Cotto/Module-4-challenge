//page start elements
const timerEl = document.getElementById('timer');
const startButtonEl = document.getElementById('start-game');
const viewHighScoreEl = document.getElementById('view-high-score');
const pageStartContainerEl = document.getElementById('page-start-container');
const questionContainerEl = document.getElementById('question-container');
const endContainerEl = document.getElementById('end-container');
const highScoreContainerEl = document.getElementById('high-score-container');
var currentQuestion = 0;
var questions = [
    {
        question:'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var','let', 'both a and b', 'none of the above'],
        answer: 'both a and b'
    },
    { 
        question:'Which of the following methods can be used to display data in some form using Javascript?',
        choices: ['document.write()','console.log()','window.alert()','All of the above'],
        answer: 'All of the above'
    },
    {
        question: 'When was javascript created?',
        choices: ['2020', '1999' , '1945' , '1995'],
        answer: '1995'
    },
    {
        question:'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['stringify()', 'parse()', 'convert()','None of the above'],
        answer: 'stringify()'
    }
]
//Add event listener that triggers the time, and renders the questions page while also hiding the page-start-container

var startGame = function() {
    pageStartContainerEl.classList.add('hide')
    pageStartContainerEl.classList.remove('show');
    questionContainerEl.classList.add('Show');
    questionContainerEl.classList.remove('hide');
    setTime();
}


var setTime = function() {
    timeLeft = 40;

    var timerDisplay = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft --;

        if(timeLeft <= 0 || currentQuestion >= questions.length) {
            clearInterval(setTime)
            timerEl.textContent= 0;
        }

    },1000)
}

startButtonEl.addEventListener('click',startGame)