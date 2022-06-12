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

function initApp() {
    //Manager
    function addManager() {
        console.log("Crete Manager Profile");
        inquirer.prompt([
            {
                message: "Manager Name:",
                type: "input",
                name: "managerName",
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
                mainMenu();
            });
    }

    //MAIN MENU
    function mainMenu() {
        inquirer.prompt([
            {
                message: "Add employee to directory:",
                type: "list",
                choices: ['Engineer', 'Intern', '>>Exit: Finish building my team <<'],
                name: "menu",
            }]).then(userChoice => {
                switch (userChoice.memberChoice) {
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    default:
                      // Builder ;
                } })
    }
    }
    //Engineer
    function addEngineer() {
        console.log("Crete Engineer Profile");
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
                mainMenu();
            });
    }
    //Intern
    function addIntern() {
        console.log("Crete Intern Profile");
        inquirer.prompt([
            {
                message: "Intern Name:",
                type: "input",
                name: "internName",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid name:";
                }
            }, {
                message: "Intern Employee ID:",
                type: "input",
                name: "internId",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid ID.";
                }
            }, {
                message: "Intern Email Address:",
                type: "input",
                name: "internEmail",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can't be empty.";
                }
            }, {
                message: "Intern School:",
                type: "input",
                name: "internSchool",
            }]).then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                teamArr.push(intern);
                idArr.push(answers.internId);
                mainMenu();
            });
    }
}



// // TODO: Create a function to write README file
// function writeFile(fileName, data) {
//     fs.writeFile(fileName, data, function (err) {

//         if (err) {
//             return console.log(err)
//         } else {
//             console.log("Your README.md file was successfully written")
//         }
//     })
// }


// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//         .then(function (response) {
//             //writeFile("./output/README.md", generateMarkdown(response))
//         })
// }

// Function call to initialize app
init();

