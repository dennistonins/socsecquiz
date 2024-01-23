var currentModule = "";
var currentQuestionIndex = 0;
var currentQuestion = [];
var moduleQuestions = [];
var questions = [];

function loadQuestions(module) {
    currentModule = module;
    currentQuestionIndex = 0;

    if(currentModule == 'all'){
        moduleQuestions = questions;
    }else{
        moduleQuestions = questions.filter(question => question.module === module);
    }
    
    displayQuestion(moduleQuestions[currentQuestionIndex]);
}

function displayQuestion(question) {
    if(question.question == undefined){
        return loadHomeScreen();
    }
    var questionDiv = document.getElementById('question');
    var answersDiv = document.getElementById('answers');

    questionDiv.textContent = question.question;
    answersDiv.innerHTML = "";

    console.log('question', question);
    var options = [];
    for (var key in question) {
        if (key.startsWith('answer')) {
            options.push(question[key]);
        }
    }

    options.forEach((option, index) => {
        var optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('optionsBtn');
        optionButton.addEventListener('click', function() {
            if(document.getElementsByClassName('selected')[0]){
                document.getElementsByClassName('selected')[0].classList.remove('selected');
            }
            if(document.getElementsByClassName('correct')[0]){
                document.getElementsByClassName('correct')[0].classList.remove('correct');
            }
            if(document.getElementsByClassName('wrong')[0]){
                document.getElementsByClassName('wrong')[0].classList.remove('wrong');
            }
            
            this.classList.add('selected');
        });
        answersDiv.appendChild(optionButton);
    });

    currentQuestion = question;

    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('flashcard').style.display = 'block';
}

function checkAnswer() {
    var answerButtons = document.getElementById('answers');
    var answerButtonsSelected = document.getElementsByClassName('selected')[0];

    var index = Array.prototype.indexOf.call(answerButtons.children, answerButtonsSelected);

    if(document.getElementsByClassName('selected')[0]){
        document.getElementsByClassName('selected')[0].classList.remove('selected');
    }
    if(document.getElementsByClassName('correct')[0]){
        document.getElementsByClassName('correct')[0].classList.remove('correct');
    }
    if(document.getElementsByClassName('wrong')[0]){
        document.getElementsByClassName('wrong')[0].classList.remove('wrong');
    }

    if(index !== -1){
        if(currentQuestion.correctAnswer == (index + 1)){
            answerButtonsSelected.classList.add('correct');
        }else{
            answerButtonsSelected.classList.add('wrong');
        }
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < moduleQuestions.length) {
        displayQuestion(moduleQuestions[currentQuestionIndex]);
    } else {
        loadHomeScreen();
    }
}

function loadHomeScreen() {
    currentModule = "";
    currentQuestionIndex = 0;

    document.getElementById('homeScreen').style.display = 'block';
    document.getElementById('flashcard').style.display = 'none';
}

async function initialize() {
    var csvRows = await loadQuestionsFromCSV();
    var headers = csvRows[0].split(',');

    for (var i = 1; i < csvRows.length; i++) {
        var values = csvRows[i].split(',');
        var questionObject = {};

        for (var j = 0; j < headers.length; j++) {
            questionObject[headers[j]] = values[j];
        }

        questions.push(questionObject);
    }
}


async function loadQuestionsFromCSV() {
    const response = await fetch('questions.csv');
    const csvText = await response.text();

    var csvRows = csvText.split('\r\n');

    var modules = [...new Set(csvRows.slice(1).map(row => row.split(',')[0]))];

    var moduleButtonsDiv = document.getElementById('moduleButtons');
    modules.forEach(module => {
        if (module.trim() === '') return;

        var button = document.createElement('button');
        button.textContent = module.trim();
        button.classList.add('button');
        button.addEventListener('click', function() {
            loadQuestions(module);
        });
        moduleButtonsDiv.appendChild(button);
    });
    return csvRows;
}

initialize();