const nextButton = document.getElementById("next");
const questions = document.getElementById("questions");
const found = document.getElementById("found");
const renew = document.getElementById("renew");

const questionsArr = [
  "Hi! I'm Duckie. Let's work on finding a bug together! How this works is I'll ask you a series of questions. Each question is designed to help you think through the problem methodically and with self-kindness. After a lot of questions, if you haven't found the bug, I'll encourage you to take a break and come back to it soon. If you do find the bug, hit the button that says 'I found it!' and we'll celebrate your success.",
  "Have you seen a bug like this before, and if so, how did you fix it?",
  "Are you spelling everything the same?",
  "Are all of your quotes and brackets in the right places?",
  "Is your coding structure clean and understandable? How can you clean it up?",
  "Are you using tools you don't understand well enough and need to read more on?",
  "Are you over engineering this, and making complexities for yourself?",
  "Start at the beginning of your program and put in console logs. At what point does the program deviate from your mental model?",
  "We've been through a number of questions without success! I'd recommend to take a break and come back with fresh eyes. It's okay; you're learning and figuring it out, you'll get it soon!",
];

let index = 0;

nextButton.onclick = function () {
  questions.innerHTML = questionsArr[index];
  index++;
};

found.onclick = function () {
  questions.innerHTML =
    "Congratulations, you found the bug!<br><br>Go you! Make sure to celebrate you successes before rushing to the next one.";
};

renew.onclick = function () {
  index = 0;
  questions.innerHTML = questionsArr[index];
};
