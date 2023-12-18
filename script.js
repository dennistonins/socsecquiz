const csvFilePath = '/questions.csv'; // Adjust the file path accordingly

let questions = [];
let currentQuestionIndex = null;
let selectedAnswerIndex = null;
let correctAnswerRevealed = false;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuestionsFromCSV() {
  fetch(csvFilePath)
    .then(response => response.text())
    .then(data => {
      questions = parseCSV(data);
      console.log('Parsed Questions:', questions);
      currentQuestionIndex = Math.floor(Math.random() * questions.length);
      loadQuestion();
    })
    .catch(error => console.error('Error loading CSV:', error));
}

function parseCSV(csv) {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentLine = lines[i].split(',');

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j].trim()] = currentLine[j].trim();
    }

    result.push(obj);
  }

  return result;
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').innerText = currentQuestion.question;

  // Copy the answers array and shuffle the order only if it's a new question
  const shuffledAnswers = currentQuestion.shuffledAnswers || [
    currentQuestion.answer1,
    currentQuestion.answer2,
    currentQuestion.answer3,
    currentQuestion.answer4
  ];

  if (!currentQuestion.shuffledAnswers) {
    shuffleArray(shuffledAnswers);

    // Update the correct answer index for the shuffled answers
    currentQuestion.shuffledCorrectAnswer = shuffledAnswers.indexOf(currentQuestion['correctAnswer']);

    currentQuestion.shuffledAnswers = shuffledAnswers;
  }

  const answersHtml = shuffledAnswers.map((answer, index) => {
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
  const correctAnswerIndex = parseInt(currentQuestion.shuffledCorrectAnswer);

  const answers = document.querySelectorAll('.answer');
  answers.forEach((answer, index) => {
    answer.classList.remove('correct', 'wrong', 'selected'); // Clear previous answer highlighting
    if (index === correctAnswerIndex) {
      answer.classList.add('correct'); // Highlight the correct answer in green
    } else if (index === selectedAnswerIndex && index !== correctAnswerIndex) {
      answer.classList.add('wrong'); // Red for wrong answer
    }
  });

  correctAnswerRevealed = true;
}

function nextQuestion() {
  selectedAnswerIndex = null;
  correctAnswerRevealed = false;

  // Reset the shuffledAnswers and shuffledCorrectAnswer properties for the next question
  const currentQuestion = questions[currentQuestionIndex];
  currentQuestion.shuffledAnswers = null;
  currentQuestion.shuffledCorrectAnswer = null;

  // Randomly select the next question index
  currentQuestionIndex = Math.floor(Math.random() * questions.length);

  loadQuestion();
}

// Initial load
loadQuestionsFromCSV();
