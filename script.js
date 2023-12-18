function loadQuestion() {
  const filteredQuestions = selectedModule
    ? questions.filter((q) => q.module === selectedModule)
    : questions;

  // Handle case where no questions are found for the selected module
  if (!filteredQuestions.length) {
    console.error('No questions found for the selected module:', selectedModule);
    return; // Exit the function
  }

  // Reset currentQuestionIndex if it's out of bounds
  if (currentQuestionIndex === null || currentQuestionIndex >= filteredQuestions.length) {
    currentQuestionIndex = 0;
  }

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  // ... Rest of the loadQuestion function ...
}