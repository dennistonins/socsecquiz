// script.js

const questions = [];

let currentQuestionIndex = null;
let selectedAnswerIndex = null;
let correctAnswerRevealed = false;
let selectedModule = null;

// ... existing script.js content ...

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

function loadHomeScreen() {
  // Implement the home screen with buttons for each module and an "All Questions" button
  // Handle button clicks to set the selectedModule and load questions accordingly
  // This function should be called initially and when the "X" button is clicked on the flashcard page
  document.getElementById('homeScreen').style.display = 'flex'; // or 'block' depending on your styling
  document.getElementById('flashcard').style.display = 'none';
}

function loadQuestion() {
  const filteredQuestions = selectedModule
    ? questions.filter((q) => q.module === selectedModule)
    : questions;

  // ... existing loadQuestion logic ...
}

function selectModule(module) {
  console.log('Selected module:', module); // Add this line for debugging
  selectedModule = module;
  loadQuestion();
}

function loadFlashcardPage() {
  // Implement the flashcard page with an "X" button in the upper right corner
  // Handle the "X" button click to navigate back to the home screen
  document.getElementById('homeScreen').style.display = 'none';
  document.getElementById('flashcard').style.display = 'block';
}


// ... existing script.js content ...

// Initial load
loadHomeScreen();
