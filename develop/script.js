//page start elements
const timerEl = document.getElementById('timer');
const startButtonEl = document.getElementById('start-game');
const viewHighScoreEl = document.getElementById('view-high-score');
const pageStartContainerEl = document.getElementById('page-start-container');
const questionContainerEl = document.getElementById('question-container');
const endContainerEl = document.getElementById('end-container');
const highScoreContainerEl = document.getElementById('high-score-container');
const questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')

var questionIndex = 0;
var currentQuestion = 0;
var highScores = [];
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


var startGame = function() {
    questionIndex = 0;
    timeLeft = 10;
    pageStartContainerEl.classList.add('hide')
    pageStartContainerEl.classList.remove('show');
    questionContainerEl.classList.add('Show');
    questionContainerEl.classList.remove('hide');

    var startTimer = setInterval(function() {
        timeLeft --;
        timerEl.textContent = timeLeft;
       
        if(timeLeft <= 0 || questionIndex < questions.length - 1) { // may need to add a minus one to use the last question
            clearInterval(startTimer)
            timerEl.textContent= 0;
            ;
        }

    },1000);
    renderQuestions();
}

console.log(questions[questionIndex].question)
console.log(questions[questionIndex].choices)
console.log(questions[questionIndex].answer)

   


var renderQuestions = function() {
    //sets the question elements text content to display the questions array at the index of zero and only the questions
    questionEl.textContent = questions[questionIndex].question;
    //creates buttons for the 4 choices available
    var choice1 = document.createElement('button')
    var choice2 = document.createElement('button')
    var choice3 = document.createElement('button')
    var choice4 = document.createElement('button')
    //changes the text inside the buttons to match that of the choices indexed
    choice1.innerHTML = questions[questionIndex].choices[0];
    choice2.innerHTML = questions[questionIndex].choices[1];
    choice3.innerHTML = questions[questionIndex].choices[2];
    choice4.innerHTML = questions[questionIndex].choices[3];
    //add the choices to HTML in order to be displayed
    answerButtonsEl.appendChild(choice1)
    answerButtonsEl.appendChild(choice2)
    answerButtonsEl.appendChild(choice3)
    answerButtonsEl.appendChild(choice4)
    // add classes to the buttons for styling
    choice1.classList.add('btn')
    choice2.classList.add('btn')
    choice3.classList.add('btn')
    choice4.classList.add('btn')
}





startButtonEl.addEventListener('click',startGame);

console.log(questions[questionIndex].choices[1]);