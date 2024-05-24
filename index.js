// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [];
questions.push({
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
});
questions.push({
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.'
});
questions.push({
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project.'
});
questions.push({
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project.'
});
questions.push({
    type: 'input',
    name: 'contribution',
    message: 'Please provide contribution guidelines for your project.'
});
questions.push({
    type: 'input',
    name: 'test',
    message: 'Please provide test instructions for your project.'
});
questions.push({
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project.',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
});
questions.push({
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
});
questions.push({
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync
    (path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', generateMarkdown(answers));
        });
}

// Function call to initialize app
init();
