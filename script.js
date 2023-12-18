const questions = [
  { question: "What is the total percentage of an employee's earned income (up to the annual limit) that is paid each year into Social Security by the employee and employer?", answers: ["0.062", "0.029", "0.153", "0.124"], correctAnswer: 0 },

  // Add more questions here...
];
let selectedAnswerIndex = null; // Track the user's selected answer

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').innerText = currentQuestion.question;

  const answersHtml = currentQuestion.answers.map((answer, index) => {
    const selectedClass = index === selectedAnswerIndex ? 'selected' : '';
    return `<div class="answer ${selectedClass}" onclick="selectAnswer(${index})">${answer}</div>`;
  }).join('');

  document.getElementById('answers').innerHTML = answersHtml;
}

function selectAnswer(selectedIndex) {
  selectedAnswerIndex = selectedIndex;
  loadQuestion();
}

function checkAnswer() {
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswerIndex = currentQuestion.correctAnswer;

  const answers = document.querySelectorAll('.answer');
  answers.forEach((answer, index) => {
    if (index === correctAnswerIndex) {
      answer.classList.add('correct');
    } else {
      answer.classList.remove('correct');
    }
  });
}

function nextQuestion() {
  selectedAnswerIndex = null; // Reset the selected answer when moving to the next question
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  loadQuestion();
}

// Initial load
loadQuestion();