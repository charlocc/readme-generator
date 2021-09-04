// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please type a detailed description of your project:',
        name: 'descriptioncontent',
    },
    {
        type: 'input',
        message: 'Please type the installation instructions for your project:',
        name: 'installationinstructions',
    },
    {
        type: 'input',
        message: 'Please type the usage information for your project:',
        name: 'usageinformation',
    },
    {
        type: 'list',
        message: 'What type of licensing would you like to use?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        message: 'Please type the contribution guidelines:',
        name: 'contributionguidelines',
    },
    {
        type: 'input',
        message: 'Please type the test instructions:',
        name: 'testinstructions',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'gitusername',
    },
    {
        type: 'input',
        message: 'Please type your github url',
        name: 'giturl',
    },
    {
        type: 'input',
        message: 'Input the email you are willing to receive questions at',
        name: 'email',
    },
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {inquirer
    .prompt(questions)
    .then(response => {
        fs.writeFile("README.md", generateMarkdown(response), (err) =>
        err ? console.log(err) : console.log('success')
        );  
    })

}



// Function call to initialize app
init();
