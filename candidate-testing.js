const input = require('readline-sync');

// TODO 1.1a: Define candidateName below this line.
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer below this line.
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

// Multiple questions and answers
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

let candidateAnswers = [];

// TODO 1.1b: Ask for candidate's name
function askForName() {
  candidateName = input.question("Enter your name: ");
  // TODO 1.1c: Greet the user
  console.log(`Hello, ${candidateName}! `);
}

// TODO 1.2b: Ask the candidate the question and store their answer
function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  }
}

// TODO 1.2c: Check the candidate's answer
function gradeQuiz(candidateAnswers) {
  let numberOfCorrectAnswers = 0;

  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].trim().toLowerCase() === correctAnswers[i].toLowerCase()) {
      numberOfCorrectAnswers++;
    }
  }

  let grade = (numberOfCorrectAnswers / questions.length) * 100;

  console.log(`\nCandidate Name: ${candidateName}`);
  for (let i = 0; i < questions.length; i++) {
    console.log(`${i + 1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }

  console.log(`Overall Grade: ${grade}%`);
  console.log(grade >= 80 ? "Status: PASSED" : "Status: FAILED");

  return grade;
}


function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(candidateAnswers);
}

runProgram();

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};