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
  { question: "As a financial professional wishing to help your clients who are in civil unions or other non-marital legal relationships with their Social Security income planning, what information must you know?", answers: ["In which states they established their non-marital legal relationship and they currently live in", "How the state they live in treats their inheritance rights if one dies without leaving a will", "How old they are", "All of the above"], correctAnswer: 0 },
  { question: "The FRA for someone born in 1959 is...", answers: ["66 years and 4 months", "66 years and 6 months", "66 years and 8 months", "66 years and 10 months"], correctAnswer: 0 },
  { question: "What categories does the Social Security Administration pay benefits to?", answers: ["Unemployed workers, retired workers, and disabled workers", "Retired Workers, disabled workers, and workers in need", "Retired workers under age 62, survivors of retired workers, and workers on Medicare", "Retired workers and their dependents, survivors of retired workers, disabled workers and their dependents"], correctAnswer: 0 },
  { question: "If Colleen has an AIME of $6,900 what will be her PIA using the 2023 bend points of $1,115 and $6,721?", answers: ["2855", "2824", "2314", "2678"], correctAnswer: 0 },
  { question: "If Sammy's AIME is $1,300, what is his PIA, using the 2023 bend points?", answers: ["1170", "1020", "1370", "1063"], correctAnswer: 0 },
  { question: "What is the FRA for a worker born in 1955?", answers: ["66 years", "66 years and 2 months", "66 years and 4 months", "66 years and 6 months"], correctAnswer: 0 },
  { question: "Diane (58) lost her husband Doug to cancer last year at the age of 62. Their twin sons are 15 years old. Which of Doug's family members are entitled to survivor benefits?", answers: ["Diane, but not until age 60", "Diane and the twins", "None of them", "The twin sons"], correctAnswer: 0 },
  { question: "What are the bend point percentages used to calculate the family maximum benefit?", answers: ["150%, 272%, 134%", "90%, 32%, 15%", "150%, 90%,32%, 15%", "150%, 272%, 134%, 175%"], correctAnswer: 0 },
  { question: "Dan (66) and his wife Debbie (58) have three children - Amy (18), a senior in high school and twins Harry and Heather (16). When Dan starts collecting Social Security this year, which of the following is true?", answers: ["Debbie can collect spousal benefits.", "Amy, Harry, and Heather can collect dependent children benefits.", "Only Harry and Heather can collect benefits until they turn 18.", "None of Dan’s dependents can collect benefits."], correctAnswer: 0 },
  { question: "When does the Earnings Test no longer apply to earnings?", answers: ["The Earnings Test no longer applies when a retiree turns 65.", "The Earnings Test no longer applies when a retiree makes over $105,000 per year.", "The Earnings Test no longer applies for the month in which a retiree turns FRA, and for all years after.", "The Earnings Test no longer applies beginning the year in which a retiree reaches FRA, and for all years after."], correctAnswer: 0 },
  { question: "Which of the following is not true about women and Social Security?", answers: ["Women on average have longer life expectancies than men", "Women are more likely to have significant family income from pensions than men", "Women who are educated about Social Security claiming options can benefit in the long run", "Women have historically lower lifetime earnings than men"], correctAnswer: 0 },

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

