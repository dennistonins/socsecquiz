const questions = [
  { question: "Question 1?", answers: ["A", "B", "C", "D"], correctAnswer: 0 },
  // Add more questions here...
];
let currentQuestionIndex = 0;
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
