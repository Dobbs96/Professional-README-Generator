// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  // title of project
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  // Description
  {
    type: "input",
    message: "Write a description?",
    name: "description",
  },
  // licensing
  {
    type: "list",
    message: "Choose one of the following licensing;",
    name: "licensing",
    choices: [
      "Apache",
      "MIT",
      "Mozilla-Public",
      "GNU-General-Public",
      "Common-Development-and Distribution",
      "None",
    ],
  },
  // Installation
  {
    type: "input",
    message: "How can someone Instal?",
    name: "installation",
  },
  // Usage
  {
    type: "input",
    message: "What is the usage?",
    name: "usage",
  },
  // Contributing
  {
    type: "input",
    message: "Who is contributing?",
    name: "contributing",
  },
  // Test
  {
    type: "input",
    message: "Please show a test.",
    name: "test",
  },
  // Acknowledgments
  {
    type: "input",
    message: "List of Acknowledgments;",
    name: "acknowledgments",
  },
  // questions
  {
    type: "input",
    message: "What is your github username? ",
    name: "github",
  },
  {
    type: "input",
    message: "What is you email?",
    name: "email",
  },
];
inquirer
  .prompt(questions)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    if (err.isTtyError) {
      console.log(err);
    } else {
      console.log(err);
    }
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
