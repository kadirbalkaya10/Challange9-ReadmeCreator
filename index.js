// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { generateMarkdown } = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  // Project Title
  {
    type: "input",
    message: "Please enter your project's title:",
    name: "title",
  },
  // Description
  {
    type: "input",
    message: "Description of the project:",
    name: "description",
  },
  // Installation Instructions
  {
    type: "input",
    message: "Installation instructions:",
    name: "installation",
  },
  // Usage Information
  {
    type: "input",
    message: "Usage information:",
    name: "usage",
  },
  // Contributions and Guidelines
  {
    type: "input",
    message: "Contributions and guidelines:",
    name: "contribution",
  },
  // Test Instructions
  {
    type: "input",
    message: "Test instructions:",
    name: "tests",
  },
  // Choose a License
  {
    type: "list",
    message: "Choose a license:",
    name: "license",
    choices: [
      "MIT",
      "Apache 2.0",
      "Boost",
      "Creative Commons - Attribution",
      "The Unlicense",
      "None",
    ],
  },
  // GitHub Username
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  // Email
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log(`File ${fileName} was saved with data!`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log(
    "Welcome to the README Generator!\nPlease answer the following questions:\n"
  );

  // Ask questions
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate markdown string
      const readmeContent = generateMarkdown(answers);
      // Save string to disk
      writeToFile("README.md", readmeContent);
    })
    .catch((err) => {
      console.error("Error occurred during user interaction:", err);
    });
}

// Function call to initialize app
init();
