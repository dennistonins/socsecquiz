// script.js

let questions = [];
let currentQuestionIndex = 0;
let selectedModule = null;

// Load questions when the script starts
async function initialize() {
    questions = await loadQuestionsFromCSV();
}

async function loadQuestionsFromCSV() {
    const response = await fetch('questions.csv');
    const csvText = await response.text();
    return csvText.split('\n').slice(1).map(line => {
        const fields = line.split(',').map(field => field.trim());

        if (fields.length !== 7) {
            console.error('Invalid line in CSV:', line);
            return null;
        }

        const [module, question, a1, a2, a3, a4, correctAnswerIndex] = fields;
        return {
            module,
            question,
            answers: [a1, a2, a3, a4],
            correctAnswer: parseInt(correctAnswerIndex, 10)
        };
    }).filter(question => question !== null);
}

function loadHomeScreen() {
    document.getElementById('homeScreen').style.display = 'block';
    document.getElementById('flashcard').style.display = 'none';
}

function selectModule(module) {
    selectedModule = module;
    currentQuestionIndex = 0;
    loadQuestion();
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('flashcard').style.display = 'block';
}

function loadQuestion() {
    let filteredQuestions = selectedModule ? questions.filter(q => q.module === selectedModule) : questions;

    if (!filteredQuestions.length) {
        console.error('No questions available for the selected module:', selectedModule);
        return;
    }

    if (currentQuestionIndex < 0 || currentQuestionIndex >= filteredQuestions.length) {
        currentQuestionIndex = 0;
    }

    let currentQuestion = filteredQuestions[currentQuestionIndex];

    document.gtElementById('question').innerText = currentQuestion.question;
    let answersHtml = currentQuestion.answers.map((answer, index) =>
        `<div class="answer" onclick="selectAnswer(${index})">${answer}</div>`
    ).join('');
    document.getElementById('answers').innerHTML = answersHtml;
}

function selectAnswer(index) {
    let answersDivs = document.querySelectorAll('#answers .answer');

    // Remove the 'selected' class from all answers
    answersDivs.forEach(answerDiv => answerDiv.classList.remove('selected'));

    // Add the 'selected' class to the clicked answer
    answersDivs[index].classList.add('selected');
}

function checkAnswer() {
    let filteredQuestions = selectedModule ? questions.filter(q => q.module === selectedModule) : questions;
    let currentQuestion = filteredQuestions[currentQuestionIndex];
    let selectedAnswerIndex = Array.from(document.querySelectorAll('#answers .answer')).findIndex(answerDiv => answerDiv.classList.contains('selected'));

    if (selectedAnswerIndex === -1) {
        // No answer selected
        return;
    }

    let isCorrect = selectedAnswerIndex === currentQuestion.correctAnswer;

    // Remove the 'selected' class from all answers
    document.querySelectorAll('#answers .answer').forEach(answerDiv => answerDiv.classList.remove('selected'));

    // Add the appropriate class based on correctness
    document.querySelectorAll('#answers .answer')[selectedAnswerIndex].classList.add(isCorrect ? 'correct' : 'wrong');
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Initial load
initialize();
loadHomeScreen();
