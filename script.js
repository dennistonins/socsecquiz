let questions = [];
let currentQuestionIndex = 0;
let selectedModule = null;

// Dummy CSV data loader (replace with your CSV loading logic)
async function loadQuestionsFromCSV() {
    const response = await fetch('questions.csv');
    const csvText = await response.text();
    return csvText.split('\n').slice(1).map(line => {
        const [module, question, a1, a2, a3, a4, correctAnswerIndex] = line.split(',');
        return {
            module: module.trim(),
            question: question.trim(),
            answers: [a1, a2, a3, a4].map(answer => answer.trim()),
            correctAnswer: parseInt(correctAnswerIndex.trim())
        };
    });
}

async function loadQuestionsFromCSV() {
    const response = await fetch('questions.csv');
    const csvText = await response.text();
    return csvText.split('\n').slice(1).map(line => {
        const fields = line.split(',').map(field => field.trim());

        // Check if all expected fields are present
        if (fields.length !== 7) {
            console.error('Invalid line in CSV:', line);
            return null; // Skip this line
        }

        const [module, question, a1, a2, a3, a4, correctAnswerIndex] = fields;
        return {
            module,
            question,
            answers: [a1, a2, a3, a4],
            correctAnswer: parseInt(correctAnswerIndex, 10)
        };
    }).filter(question => question !== null); // Remove invalid entries
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
