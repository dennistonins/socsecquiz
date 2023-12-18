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

function showFlashcardView() {
  document.getElementById('homeScreen').style.display = 'none';
  document.getElementById('flashcard').style.display = 'flex';
}

function loadQuestion() {
  console.log('Loading question for module:', selectedModule);

  const filteredQuestions = selectedModule
    ? questions.filter((q) => q.module === selectedModule)
    : questions;

  console.log('Filtered questions:', filteredQuestions);

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const questionDiv = document.getElementById('question');
  const answersDiv = document.getElementById('answers');

  // Clear existing content
  questionDiv.innerText = '';
  answersDiv.innerHTML = '';

  // Set question text
  questionDiv.innerText = currentQuestion.question;

  // Shuffle and display answer options
  const shuffledAnswers = shuffleArray([...currentQuestion.answers]);
  shuffledAnswers.forEach((answer, index) => {
    const answerButton = document.createElement('button');
    answerButton.innerText = answer;
    answerButton.classList.add('answer');
    answerButton.onclick = () => selectAnswer(index);
    answersDiv.appendChild(answerButton);
  });
}

function selectModule(module) {
  console.log('Selected module:', module);
  selectedModule = module;
  showFlashcardView();
  loadQuestion();
}

function selectAnswer(selectedIndex) {
  selectedAnswerIndex = selectedIndex;
  loadQuestion();
}

function checkAnswer() {
  // ... existing checkAnswer logic ...
}

function nextQuestion() {
  // ... existing nextQuestion logic ...
}

// Initial load (unchanged)
loadQuestion();
