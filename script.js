// script.js

const questions = [];

let currentQuestionIndex = null;
let selectedAnswerIndex = null;
let correctAnswerRevealed = false;
let selectedModule = null;

// CSV loading functions (unchanged)

async function loadQuestionsFromCSV(file) {
  const csvData = await loadCSV(file);
  return parseCSV(csvData);
}

const questionsPromise = loadQuestionsFromCSV('questions.csv');

questionsPromise.then((loadedQuestions) => {
  questions.push(...loadedQuestions);
  currentQuestionIndex = Math.floor(Math.random() * questions.length);
  loadQuestion();
});

// Helper functions (unchanged)

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Flashcard functions (unchanged)

function loadHomeScreen() {
  document.getElementById('homeScreen').style.display = 'flex';
  document.getElementById('flashcard').style.display = 'none';
}

function loadQuestion() {
  console.log('Loading question for module:', selectedModule);

  const filteredQuestions = selectedModule
    ? questions.filter((q) => q.module === selectedModule)
    : questions;

  console.log('Filtered questions:', filteredQuestions);

  // ... existing loadQuestion logic ...
}

function selectModule(module) {
  console.log('Selected module:', module);
  selectedModule = module;
  loadQuestion();
}

function selectAnswer(selectedIndex) {
  selectedAnswerIndex = selectedIndex;
  loadQuestion();
}

function checkAnswer() {
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswerIndex = currentQuestion.shuffledCorrectAnswer;

  const answers = document.querySelectorAll('.answer');
  answers.forEach((answer, index) => {
    answer.classList.remove('correct', 'wrong', 'selected');

    if (index === correctAnswerIndex && selectedAnswerIndex === correctAnswerIndex) {
      answer.classList.add('correct', 'selected');
    } else if (index === selectedAnswerIndex && index !== correctAnswerIndex) {
      answer.classList.add('wrong');
    }
  });

  correctAnswerRevealed = true;
}

function nextQuestion() {
  selectedAnswerIndex = null;
  correctAnswerRevealed = false;

  const currentQuestion = questions[currentQuestionIndex];
  currentQuestion.shuffledAnswers = null;
  currentQuestion.shuffledCorrectAnswer = null;

  currentQuestionIndex = Math.floor(Math.random() * questions.length);

  loadQuestion();
}

// Initial load (unchanged)

loadQuestion();
