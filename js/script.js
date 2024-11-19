const questions = []; // Placeholder for questions

let currentQuestionIndex = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz');
    const question = questions[currentQuestionIndex];

    if (question) {
        quizContainer.innerHTML = `
            <div class="question">${question.question}</div>
            <div class="options">
                ${question.options.map((option, i) => `<div class="option" onclick="checkAnswer(${i})">${option}</div>`).join('')}
            </div>
        `;
    } else {
        quizContainer.innerHTML = "<div>Quiz Completed!</div>";
    }
}

function checkAnswer(index) {
    const question = questions[currentQuestionIndex];
    if (question.correctAnswer === index) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
    currentQuestionIndex++;
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', loadQuestion);
