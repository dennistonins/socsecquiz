// CSV parsing function
function parseCSV(csv) {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');

  return lines.slice(1).map(line => {
    const values = line.split(',');
    return headers.reduce((obj, header, index) => {
      obj[header.trim()] = values[index].trim();
      return obj;
    }, {});
  });
}

// Function to load questions from CSV
function loadQuestionsFromCSV() {
  fetch('your_file_path/questions.csv') // Update with your actual CSV file path
    .then(response => response.text())
    .then(data => {
      questions = parseCSV(data);
      console.log('Parsed Questions:', questions);
      currentQuestionIndex = Math.floor(Math.random() * questions.length);
      loadQuestion();
    })
    .catch(error => console.error('Error loading CSV:', error));
}

// Load question function
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').innerText = currentQuestion.question;

  // Extract answers and correct answer from current question
  const answers = [
    currentQuestion.answer1,
    currentQuestion.answer2,
    currentQuestion.answer3,
    currentQuestion.answer4
  ];

  // Copy the answers array and shuffle the order only if it's a new question
  const shuffledAnswers = currentQuestion.shuffledAnswers || [...answers];
  if (!currentQuestion.shuffledAnswers) {
    shuffleArray(shuffledAnswers);

    // Update the correct answer index for the shuffled answers
    currentQuestion.shuffledCorrectAnswer = shuffledAnswers.indexOf(currentQuestion.correctAnswer);

    currentQuestion.shuffledAnswers = shuffledAnswers;
  }

  const answersHtml = shuffledAnswers.map((answer, index) => {
    const selectedClass = index === selectedAnswerIndex ? 'selected' : '';
    return `<div class="answer ${selectedClass}" onclick="selectAnswer(${index})">${answer}</div>`;
  }).join('');

  document.getElementById('answers').innerHTML = answersHtml;
}

// Check answer function
function checkAnswer() {
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswerIndex = parseInt(currentQuestion.shuffledCorrectAnswer);

  const answers = document.querySelectorAll('.answer');
  answers.forEach((answer, index) => {
    answer.classList.remove('correct', 'wrong', 'selected'); // Clear previous answer highlighting
    if (index === correctAnswerIndex && index === selectedAnswerIndex) {
      answer.classList.add('correct', 'selected'); // Green for correct answer if selected
    } else if (index === selectedAnswerIndex && index !== correctAnswerIndex) {
      answer.classList.add('wrong'); // Red for wrong answer
    }
  });

  correctAnswerRevealed = true;
}

// Next question function
function next
