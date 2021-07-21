// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {name: 'creatorName',
    type: 'input',
    message: 'What is your full name?'
    },
    {name: 'email',
    message: 'What is your email address?',
    type: 'input'},
    {name: 'Title',
    message: 'What is the name of your project?',
    type: 'input'},
    {name: 'Description', 
    message: 'What was your motivation and what problem does your project solve?',
    type: 'input'},
    {name:'Install',
    message: 'How do you install your project?',
    type: 'input'},
    {name: 'Usage', 
    message: 'Please provide instructions of how to use your project or application.',
    type: 'input'},
    {name: 'Contribution',
    message: 'What are the guidelines you would like to place for contributions to your project?',
    type: 'input'},
    {name: 'confirmCreditors',
    message: 'Did you have other collaborators for this project?',
    type: 'confirm'},
    {name: 'Collaborators',
    message: 'List your collaborators (and if possible their gitHub links)',
    type: 'input'},
    {name: 'confirmResource',
    message: 'Did you use any Third-Party assets that require attribution?',
    type: 'confirm'},
    {name: '3rdParty',
    message: 'List third-party assets used:',
    type: 'input'},
    {name : 'License',
    message: 'Please select a license for your application:',
    type :'list',
    choices : [
        'Apache License V2.0', 
        'MIT License', 
        'GNU General Public V3.0', 
        'Creative Commons Attribute Share',
        'No License'
    ]},
    {name: 'Features',
    message: 'Please describe any special features in your project:',
    type: 'input'},
    {name: 'Test',
    message: 'How would you test your application?',
    type: 'input'}

];


   
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            console.error(err)
            return
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    var generatedData;
    inquirer.prompt(questions).then((answers) => {
    generatedData = generateMarkdown(answers);
    writeToFile('./utils/ReadMe.md', generatedData);
    }).catch((error) =>{
        if(error.isTtyError){
            console.log('error b/c prompt couldn\'t be rendered')
        } else {
            console.log(error , ' error found');
        }
    }
    );
   
}

// Function call to initialize app
init();
