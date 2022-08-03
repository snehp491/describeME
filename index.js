// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// THEN a high-quality, professional README.md is generated with the
// title of my project and sections entitled
// Description,
// Table of Contents,
// Installation,
// Usage,
// License,
// Contributing,
// Tests,
// and Questions
const questions = [
    {type: 'input', name: 'title'}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
    });
}

// Function call to initialize app
init();
