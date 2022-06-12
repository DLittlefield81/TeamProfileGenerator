// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

// Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Create empty arrays for team and id as place holders
const teamArr = [];
const idArr = [];


//Manager
function addManager() {
    inquirer.prompt([
        {
            message: "Manager Name:",
            type: "input",
            name: "managerName"
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid name:";
            }
        },
        {
            message: "Manager ID:",
            type: "input",
            name: "managerId",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid ID.";
            }
        },
        {
            message: "Manager Email:",
            type: "input",
            name: "managerEmail",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Email address can't be empty.";
            }
        },
        {
            message: "Office Number:",
            type: "input",
            name: "managerOfficeNumber",
        }]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            addTeam();
        });
}

//CREATE EMPLOYEE MENU
function Options() {
    userOptions[{
        message: "Add employee to directory:",
        type: "list",
        choices: ['Engineer', 'Intern', '>>Exit<<'],
        name: "menu",
    }]
}
//Engineer
function addEngineer() {
    inquirer.prompt([

        {
            message: "Engineer Name:",
            type: "input",
            name: "engineerName",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid name:";
            }
        },
        {
            message: "Engineer Employee ID:",
            type: "input",
            name: "engineerId",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid ID.";
            }
        },
        {
            message: "Engineer Email Address:",
            type: "input",
            name: "engineerEmail",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Email address can't be empty.";
            }
        },
        {
            message: "Engineer GitHub Username:",
            type: "input",
            name: "engineerGithub",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the engineer's GitHub username.";
            }
        }]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArr.push(engineer);
            idArr.push(answers.engineerId);
            addTeam();
        });
}
//Intern
function addIntern() {
    inquirer.prompt([
        {
            message: "Intern Name:",
            type: "input",
            name: "intern_name",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid name:";
            }
        }, {
            message: "Intern Employee ID:",
            type: "input",
            name: "intern_ID",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid ID.";
            }
        }, {
            message: "Intern Email Address:",
            type: "input",
            name: "intern_email",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Email address can't be empty.";
            }
        }, {
            message: "Intern School:",
            type: "input",
            name: "intern_school",
        }])
}




// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {

        if (err) {
            return console.log(err)
        } else {
            console.log("Your README.md file was successfully written")
        }
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (response) {
            //writeFile("./output/README.md", generateMarkdown(response))
        })
}

// Function call to initialize app
init();

