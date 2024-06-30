document.addEventListener("DOMContentLoaded", () => {
  displayQuestion(0); // Initially display the first question
});

let currentQuestionIndex = 0;

function displayQuestion(index) {
  const questions = document.querySelectorAll(".question");
  questions.forEach((question, idx) => {
    question.classList.toggle("hidden", idx !== index);
  });
}

function checkAnswer(questionName, correctAnswer) {
  const selectedOption = document.querySelector(
    `input[name="${questionName}"]:checked`
  );

  if (selectedOption) {
    if (selectedOption.value === correctAnswer) {
      currentQuestionIndex++;
      const questions = document.querySelectorAll(".question");
      if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
      } else {
        alert("No more questions.");
      }
    } else {
      alert("Not right. Choose another one.");
    }
  } else {
    alert("Please select an answer.");
  }
}
