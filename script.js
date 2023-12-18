let questions = [];
let currentQuestionIndex = 0;
let selectedModule = null;

// Dummy CSV data loader (replace with your CSV loading logic)
async function loadQuestionsFromCSV() {
    // Replace this with actual CSV loading logic
    return [
        { module: 'module1', question: 'Question 1', answers: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
        // ... other questions ...
    ];
}

// Load questions from CSV
loadQuestionsFromCSV().then(loadedQuestions => {
    questions = loadedQuestions;
    loadQuestion();
});

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
    if (currentQuestionIndex >= filteredQuestions.length) currentQuestionIndex = 0;
    let currentQuestion = filteredQuestions[currentQuestionIndex];

    document.getElementById('question').innerText = currentQuestion.question;
    let answersHtml = currentQuestion.answers.map((answer, index) =>
        `<button onclick="selectAnswer(${index})">${answer}</button>`
    ).join('');
    document.getElementById('answers').innerHTML = answersHtml;
}

function selectAnswer(index) {
    let filteredQuestions = selectedModule ? questions.filter(q => q.module === selectedModule) : questions;
    let currentQuestion = filteredQuestions[currentQuestionIndex];
    alert(index === currentQuestion.correctAnswer ? "Correct!" : "Wrong!");
}

function checkAnswer() {
    // Logic to check the answer
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Initial load
loadHomeScreen();
