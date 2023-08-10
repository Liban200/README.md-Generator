const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your project. "
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functonality of this project. ",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license applicable to this project",
        choices: ["MIT", "apache2.0", "Boost1.0", "MPL2.0", "BSD2" , "BSD3", "none"] 
    },
    {
        type: "input",
        name: "installation",
        message: "List any project dependencies here. ",
        default: "npm i",
    },
    {
        type: "input",
        name: "test",
        message: "Please write any tests for this project.",
        default: "npm test",

    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies used in this project. ",
    },
    {
        type: "input",
        name: "creator",
        message: "Write your GitHub username. ",
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address. ",
    },
    {
        type: "input",
        name: "contributers",
        message: "Please list any contributors GitHub username. ",
    }
];   

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions). then((responses) => {
        console.log("Creating Professional README.md File... ");
        const finishedData = generateMarkdown(responses)
        console.log(responses)
        writeToFile("nodeREADME.md", finishedData);
    });
};
init();
