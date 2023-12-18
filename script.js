const questions = [
  { question: "What is the total percentage of an employee's earned income (up to the annual limit) that is paid each year into Social Security by the employee and employer?", answers: ["0.062", "0.029", "0.153", "0.124"], correctAnswer: 0 },
  { question: "If a retiree with a FRA of 67 collects retirement benefits at age 66, what percentage of their PIA will they receive?", answers: ["1.08", "0.86", "0.93", "1"], correctAnswer: 0 },
  { question: "If a retiree with a FRA of 67 collects retirement benefits at age 66, what percentage of their PIA will they receive?", answers: ["1.08", "0.86", "0.93", "1"], correctAnswer: 0 },
  { question: "Why is life expectancy important to discuss when analyzing optimal Social Security claiming dates?", answers: ["Longevity risk", "Survivor benefits for couples", "Maximization of benefits", "All of the above"], correctAnswer: 0 },
  { question: "How does the money paid to a divorced spouse affect the benefit of the worker?", answers: ["The worker's benefit amount is not affected", "The worker's benefit amount is decreased if it is above their PIA", "The worker's benefit amount can be increased or decreased depending on the ex-spouse's earnings", "The worker's benefit amount is decreased by a percentage depending on when the ex-spouse collects benefit"], correctAnswer: 0 },
  { question: "Social Security was originally designed as what type of system for retirees?", answers: ["Pay as you go so that funds coming in from payroll taxes equaled those being paid out each year as benefits.", "Each retiree had their own Social Security retirement account.", "Women were not allowed to collect Social Security.", "It was designed as a family-based insurance program."], correctAnswer: 0 },
  { question: "If Margaret's PIA is $2,550 and her FRA is 67, what is the difference in her benefit if she claims at age 67 versus age 70?", answers: ["$7,344 per year", "$860 per month", "$660 per month", "$9,644 per year"], correctAnswer: 0 },
  { question: "Tony has a PIA of $2,500 and a FMB of $4,375. He claims his benefits at FRA. His wife Tina (60) is caring for their two children Karen (15) and Kevin (17). Considering the FMB rules, how much will Tina Karen and Kevin each receive?", answers: ["833", "2500", "1250", "625"], correctAnswer: 0 },
  { question: "The amount of earnings required for 1 Quarter of Coverage (QC) in 2023 is...", answers: ["1510", "1380", "1640", "1470"], correctAnswer: 0 },
  { question: "Which of the following statements is not true?", answers: ["The probability of a 65 year old woman living to age 90 is greater than that for a 65 year old man", "Life expectancy is not a major consideration in the claiming age decision", "The 'break even' age is not the only factor to consider when deciding when to claim Social Security benefits", "The probability for one of a couple to live to a particular age is higher than a single person to live to that same age"], correctAnswer: 0 },

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
  // Handle user selection (if needed)
}

function checkAnswer() {
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswerIndex = currentQuestion.correctAnswer;

  const answers = document.querySelectorAll('.answer');
  answers.forEach((answer, index) => {
    if (index === correctAnswerIndex) {
      answer.classList.add('correct');
    }
  });
}

function nextQuestion() {
  // Reset highlighting
  const answers = document.querySelectorAll('.answer');
  answers.forEach(answer => {
    answer.classList.remove('correct');
  });

  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  loadQuestion();
}

// Initial load
loadQuestion();

