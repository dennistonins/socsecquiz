// csvLoader.js

async function loadCSV(file) {
  const response = await fetch(file);
  const data = await response.text();
  return data;
}

function parseCSV(csv) {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  const questions = [];

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i].split(',');
    const question = {
      question: currentLine[0],
      answers: [currentLine[1], currentLine[2], currentLine[3], currentLine[4]],
      correctAnswer: parseInt(currentLine[5])
    };
    questions.push(question);
  }

  return questions;
}
