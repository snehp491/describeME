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
// Username (github)
// Email
const questions = [
    {type: 'input', name: 'title', message: 'Enter your project title'},
    {type: 'input', name: 'description', message: 'Enter a description of your project'},
    {type: 'input', name: 'installation', message: 'Enter installation instructions'},
    {type: 'input', name: 'usage', message: 'Enter a usage snippet'},
    {type: 'input', name: 'license', message: 'Enter your project license'},
    {type: 'input', name: 'contributing', message: 'Describe how to contribute to this project'},
    {type: 'input', name: 'tests', message: 'Describe how to run tests'},
    {type: 'input', name: 'username', message: 'Provide your GitHub username'},
    {type: 'input', name: 'email', message: 'Provide your contact email'}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
    });
}

console.log(generateMarkdown({title: 'MIT'}));
// Function call to initialize app
init();
