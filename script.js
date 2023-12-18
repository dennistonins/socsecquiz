const questions = [
  { question: |What is the total percentage of an employee's earned income (up to the annual limit) that is paid each year into Social Security by the employee and employer?|, answers: [|0.062|, |0.029|, |0.153|, |0.124|], correctAnswer:},
  { question: |If a retiree with a FRA of 67 collects retirement benefits at age 66, what percentage of their PIA will they receive?|, answers: [|1.08|, |0.86|, |0.93|, |1|], correctAnswer:},
  { question: |Why is life expectancy important to discuss when analyzing optimal Social Security claiming dates?|, answers: [|Longevity risk|, |Survivor benefits for couples|, |Maximization of benefits|, |All of the above|], correctAnswer:},
  { question: |How does the money paid to a divorced spouse affect the benefit of the worker?|, answers: [|The worker's benefit amount is not affected|, |The worker's benefit amount is decreased if it is above their PIA|, |The worker's benefit amount can be increased or decreased depending on the ex-spouse's earnings|, |The worker's benefit amount is decreased by a percentage depending on when the ex-spouse collects benefit|], correctAnswer:},
  { question: |Social Security was originally designed as what type of system for retirees?|, answers: [|Pay as you go so that funds coming in from payroll taxes equaled those being paid out each year as benefits.|, |Each retiree had their own Social Security retirement account.|, |Women were not allowed to collect Social Security.|, |It was designed as a family-based insurance program.|], correctAnswer:},
  { question: |If Margaret's PIA is $2,550 and her FRA is 67, what is the difference in her benefit if she claims at age 67 versus age 70?|, answers: [|$7,344 per year|, |$860 per month|, |$660 per month|, |$9,644 per year|], correctAnswer:},
  { question: |Tony has a PIA of $2,500 and a FMB of $4,375. He claims his benefits at FRA. His wife Tina (60) is caring for their two children Karen (15) and Kevin (17). Considering the FMB rules, how much will Tina Karen and Kevin each receive?|, answers: [|833|, |2500|, |1250|, |625|], correctAnswer:},
  { question: |The amount of earnings required for 1 Quarter of Coverage (QC) in 2023 is...|, answers: [|1510|, |1380|, |1640|, |1470|], correctAnswer:},
  { question: |Which of the following statements is not true?|, answers: [|The probability of a 65 year old woman living to age 90 is greater than that for a 65 year old man|, |Life expectancy is not a major consideration in the claiming age decision|, |The "break even" age is not the only factor to consider when deciding when to claim Social Security benefits|, |The probability for one of a couple to live to a particular age is higher than a single person to live to that same age|], correctAnswer:},
  { question: |As a financial professional wishing to help your clients who are in civil unions or other non-marital legal relationships with their Social Security income planning, what information must you know?|, answers: [|In which states they established their non-marital legal relationship and they currently live in|, |How the state they live in treats their inheritance rights if one dies without leaving a will|, |How old they are|, |All of the above|], correctAnswer:},
  { question: |The FRA for someone born in 1959 is...|, answers: [|66 years and 4 months|, |66 years and 6 months|, |66 years and 8 months|, |66 years and 10 months|], correctAnswer:},
  { question: |What categories does the Social Security Administration pay benefits to?|, answers: [|Unemployed workers, retired workers, and disabled workers|, |Retired Workers, disabled workers, and workers in need|, |Retired workers under age 62, survivors of retired workers, and workers on Medicare|, |Retired workers and their dependents, survivors of retired workers, disabled workers and their dependents|], correctAnswer:},
  { question: |If Colleen has an AIME of $6,900 what will be her PIA using the 2023 bend points of $1,115 and $6,721?|, answers: [|2855|, |2824|, |2314|, |2678|], correctAnswer:},
  { question: |If Sammy's AIME is $1,300, what is his PIA, using the 2023 bend points?|, answers: [|1170|, |1020|, |1370|, |1063|], correctAnswer:},
  { question: |What is the FRA for a worker born in 1955?|, answers: [|66 years|, |66 years and 2 months|, |66 years and 4 months|, |66 years and 6 months|], correctAnswer:},
  { question: |Diane (58) lost her husband Doug to cancer last year at the age of 62. Their twin sons are 15 years old. Which of Doug's family members are entitled to survivor benefits?|, answers: [|Diane, but not until age 60|, |Diane and the twins|, |None of them|, |The twin sons|], correctAnswer:},
  { question: |What are the bend point percentages used to calculate the family maximum benefit?|, answers: [|150%, 272%, 134%|, |90%, 32%, 15%|, |150%, 90%,32%, 15%|, |150%, 272%, 134%, 175%|], correctAnswer:},
  { question: |Dan (66) and his wife Debbie (58) have three children - Amy (18), a senior in high school and twins Harry and Heather (16). When Dan starts collecting Social Security this year, which of the following is true?|, answers: [|Debbie can collect spousal benefits.|, |Amy, Harry, and Heather can collect dependent children benefits.|, |Only Harry and Heather can collect benefits until they turn 18.|, |None of Dan�s dependents can collect benefits.|], correctAnswer:},
  { question: |When does the Earnings Test no longer apply to earnings?|, answers: [|The Earnings Test no longer applies when a retiree turns 65.|, |The Earnings Test no longer applies when a retiree makes over $105,000 per year.|, |The Earnings Test no longer applies for the month in which a retiree turns FRA, and for all years after.|, |The Earnings Test no longer applies beginning the year in which a retiree reaches FRA, and for all years after.|], correctAnswer:},
  { question: |Which of the following is not true about women and Social Security?|, answers: [|Women on average have longer life expectancies than men|, |Women are more likely to have significant family income from pensions than men|, |Women who are educated about Social Security claiming options can benefit in the long run|, |Women have historically lower lifetime earnings than men|], correctAnswer:},
  { question: |Which of the following is incorrect about life expectancy and Social Security income planning?|, answers: [|Life expectancy is an important component when deciding how and when to file for Social Security benefits|, |Men generally have longer life expectancies than women, especially if they are married|, |Most people underestimate their life expectancy|, |Couples are smart to plan for the highest wage earner to maximize their Social Security since this is the amount that person with the longest life expectancy, the survivor, will "inherit"|], correctAnswer:},
  { question: |If Linda works for XYZ Corporation and makes $90,000 in 2023 how much will be withheld for Social Security only from her paycheck for this year?|, answers: [|6885|, |4960|, |5580|, |3804|], correctAnswer:},
  { question: |What does FICA stand for?|, answers: [|Federal Insurance Coverage Act - the tax withheld from employee paychecks for Medicare|, |Federal Insurance Contributions Act - the tax withheld from employee paychecks for Social Security and Medicare|, |Fiduciary Insured Contributions Amount - the tax withheld from employee paychecks for unemployment|, |Federal Insurance Coverage Amount - the tax witheld from employees paychecks for Social Security|], correctAnswer:},
  { question: |Retirees turning their FRA this year (2023) were born in which year(s)?|, answers: [|1957|, |1956 and 1957|, |1955 and 1956|, |1954|], correctAnswer:},
  { question: |If Lori's FRA is 67 and her PIA is $2,000, how much would she receive if she delayed starting benefits until age 70?|, answers: [|2480|, |2640|, |2160|, |2320|], correctAnswer:},
  { question: |If Susan works for 2 months and earns $5,100, how many QCs does she earn for 2023?|, answers: [|4|, |3|, |2|, |1|], correctAnswer:},
  { question: |What is true about rule known as the "Widow's Limit"?|, answers: [|The survivor is entitled to at least 82.5% of the worker's PIA, if filing at or after age 62 and 9 months|, |If the benefit of the deceased was taken early the survivor may be entitled to a higher benefit than the deceased received|, |The official title is RIB-LIM|, |All of the above|], correctAnswer:},
  { question: |If Bob works for 6 months and earns $6,500, how many QCs does he earn for 2023?|, answers: [|3|, |2|, |4|, |5|], correctAnswer:},
  { question: |Is there ever a case when it pays to delay taking spousal benefits after FRA?|, answers: [|No, spousal benefits are based only on the spouse's benefit, and filing age doesn't matter|, |Yes, the survivor benefit will be greater if one collects spousal benefits later|, |No, spousal benefits reach their maximum at FRA|, |Yes, the spousal benefits will continue to increase until age 70|], correctAnswer:},
  { question: |How much Social Security tax do self-employed workers pay?|, answers: [|0.062|, |0.029|, |0.153|, |0.124|], correctAnswer:},
  { question: |If a retiree with a FRA of 67 collects retirement benefits at age 69, what percentage of their PIA will they receive?|, answers: [|1.24|, |1.16|, |1.08|, |1.32|], correctAnswer:},
  { question: |If you delay claiming Social Security benefits past your FRA, how much will the benefits increase each year?|, answers: [|0.05|, |0.1|, |0.07|, |0.08|], correctAnswer:},
  { question: |If Barbara works for three months in 2023 and earns $3,000, how many QCs does she earn?|, answers: [|1|, |3|, |2|, |4|], correctAnswer:},
  { question: |Full Retirement Age (FRA) is used for which of the following?|, answers: [|Determining if a worker is eligible for Social Security benefits.|, |Determining the age which a retiree collects their PIA.|, |Determining whether a worker's pension will affect their benefit using WEP.|, |Determining a worker's PIA benefit amount based on their earnings history.|], correctAnswer:},
  { question: |What is the definition of the Primary Insurance Amount (PIA)?|, answers: [|The Social Security benefit you receive if you claim benefits at the exact month and year of your full retirement age (FRA)|, |The amount of insurance you will receive if you file for Social Security at age 62|, |The Social Security benefit you receive if you claim benefits at age 70|, |The amount of insurance you will receive if you file for Social Security at the time you stop working|], correctAnswer:},
  { question: |What determines the amount of a divorced spouse's benefit, and what is the maximum amount?|, answers: [|Depending on the length of the marriage, the ex-spousal benefit is between 32.5% and 50% of their ex's PIA|, |The ex-spousal benefit is a fixed benefit amount, always 50% of the worker's PIA|, |The ex-spousal benefit is dependent on the age of the person when they file, with the maximum of 50% of their ex's PIA|, |A ex-spouse is not entitled to Social Security benefits|], correctAnswer:},
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