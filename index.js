// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

// TODO: Create an array of questions for user input



  function Manager(){
    //Manager
  createManager[
    {
        message: "Manager Name:",
        type: "input",
        name: "manager_name",
    },
    {
        message: "Manager Employee ID:",
        type: "input",
        name: "manager_ID",
    },
    {
        message: "Manager Email Address:",
        type: "input",
        name: "manager_email",
    },
    {
        message: "Office Number:",
        type: "input",
        name: "managers_office_number",
    }]
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
  
 function Engineer() {
     createEngineer[
    //Engineer
    {
        message: "Engineer Name:",
        type: "input",
        name: "engineer_name",
    },
    {
        message: "Engineer Employee ID:",
        type: "input",
        name: "engineer_ID",
    },
    {
        message: "Engineer Email Address:",
        type: "input",
        name: "engineer_email",
    },
     {
         message: "Engineer GitHub Username:",
         type: "input",
         name: "engineer_github",
     }]
}
function Intern() {
    createIntern[
        //Intern
        {
            message: "Intern Name:",
            type: "input",
            name: "intern_name",
        }, {
            message: "Intern Employee ID:",
            type: "input",
            name: "intern_ID",
        }, {
            message: "Intern Email Address:",
            type: "input",
            name: "intern_email",
        }, {
            message: "Intern School:",
            type: "input",
            name: "intern_school",
        }]
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

