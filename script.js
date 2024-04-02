const quizData = [
  {
    question: 'What is the capital of France?',
    choices: ['Paris', 'Rome', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars'
  },
  {
    question: 'What is the largest mammal?',
    choices: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Blue Whale'
  }
];

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  
  choicesElement.innerHTML = '';
  currentQuestion.choices.forEach(choice => {
    const choiceElement = document.createElement('button');
    choiceElement.textContent = choice;
    choiceElement.addEventListener('click', () => checkAnswer(choice));
    choicesElement.appendChild(choiceElement);
  });
}

function checkAnswer(choice) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (choice === currentQuestion.correctAnswer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    displayQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.textContent = `Your Score: ${score} / ${quizData.length}`;
  choicesElement.innerHTML = '';
  submitButton.style.display = 'none';
}

displayQuestion();
