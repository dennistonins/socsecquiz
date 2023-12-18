const questions = [
  { question: "What is the total percentage of an employee's earned income (up to the annual limit) that is paid each year into Social Security by the employee and employer?", answers: ["0.062", "0.029", "0.153", "0.124"], correctAnswer: 0 },
// Add more questions here...
];
let currentQuestionIndex = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').innerText = currentQuestion.question;

  const answersHtml = currentQuestion.answers.map((answer, index) => {
    return `<div class="answer" onclick="selectAnswer(${index})">${answer}</div>`;
  }).join('');

  document.getElementById('answers').innerHTML = answersHtml;
}

function selectAnswer(selectedIndex) {
  // Handle user selection
  // You can add your logic here
}

function checkAnswer() {
  // Check the selected answer against the correct answer
  // Add your logic here
}

function nextQuestion() {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  loadQuestion();
}

// Initial load
loadQuestion();
