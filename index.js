// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'Github',
    }, 
    {
        type: 'input',
        message: "What is your email address?",
        name: 'Email',
    }, 
    {
        type: 'input', 
        message: "What is your project's name?",
        name: 'Project',
    }, 
    {
        type: 'input', 
        message: "Give a brief description of your project.",
        name: 'Description',
    },
    {
        type: 'input',
        message: "How does your project get installed? Please list step by step instructions.",
        name: 'Installation'
    },
    {
        type: 'input',
        message: "Include any instructions for using your project.",
        name: 'Usage',
    },
    {
        type: 'input', 
        message: "List credits to other contributors, third-party assets, tutorials, etc.",
        name: 'Credit',
    },
    {
        type: 'input',
        message: "How can someone contribute to this project?",
        name: 'Contribution',
    },
    {
        type: 'input', 
        message: "How do you run the tests on this project?",
        name: 'Tests', 
    },
    {
        type: 'list', 
        message: "What kind of license should your project have?",
        name: 'License',
        choices: [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 2.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License 2.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unilicense',
        ],
    },
    {
        type: 'confirm',
        message: "Would you like to include a table of contents?",
        name: 'TOC'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    console.log("The following prompt will generate a README file. If you do not want to include a section, leave line blank and use the <return> or <enter> key to skip.")
    inquirer.prompt(data).then((answers) => {
        const { github, email, project, description, installation, usage, credit, contribution, tests, license } = answers;
        // generateMarkdown(answers)

        fs.writeFile('READMETEST.md', generateMarkdown(answers), function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('README was created successfully')
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile(questions);
}

// Function call to initialize app
init();
