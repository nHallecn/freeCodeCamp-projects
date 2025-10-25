** start of script.js **

const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["O2", "CO2", "H2O"],
    answer: "H2O"
  },
  {
    category: "History",
    question: "In what year did the Titanic sink?",
    choices: ["1912", "1905", "1918"],
    answer: "1912"
  },
  {
    category: "Geography",
    question: "What is the capital city of Australia?",
    choices: ["Sydney", "Melbourne", "Canberra"],
    answer: "Canberra"
  },
  {
    category: "Literature",
    question: "Who wrote the play 'Romeo and Juliet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    category: "Technology",
    question: "What does 'HTML' stand for?",
    choices: ["Hyper Text Markup Language", "High Tech Modern Link", "Home Tool Management Logic"],
    answer: "Hyper Text Markup Language"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  const correctAnswer = question.answer;

  if (computerChoice === correctAnswer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${correctAnswer}`;
  }
}

** end of script.js **

