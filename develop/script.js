//page start elements
const timerEl = document.getElementById('timer');
const startButtonEl = document.getElementById('start-game');
const viewHighScoreEl = document.getElementById('view-high-score');



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


