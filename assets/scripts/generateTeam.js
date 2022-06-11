// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache 2.0 License') {
        return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    }
    if (license === 'MIT') {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }
    if (license === 'General Public License v3.0') {
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    }
    if (license === 'BSD 3-Clause License') {
        return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
    } else {
        return 'No license specified'
    }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string


function renderLicenseLink(license) {
    if (license === 'Apache 2.0 License') {
        return '[License: Apache](https://opensource.org/licenses/Apache-2.0)'
    }
    if (license === 'MIT') {
        return '[License: MIT License](https://opensource.org/licenses/MIT)'
    }
    if (license === 'General Public License v3.0') {
        return '[License: GNU Affero General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)'
    }
    if (license === 'BSD 3-Clause License') {
        return '[License: Boost Software License 1.0](https://opensource.org/licenses/BSD-3-Clause)'
    }

}

//TODO: Create a function that returns the license section of README
//If there is no license, return an empty string

function renderLicenseSection(license) {
    if (license !== "None") {
        return `## License
   This project is licenses under the ${license} license.`

    } else {
        return "";
    }
}

//function to create repo images
function renderImages(title, images, repoName) {
    if (images === 'Screenshot PNG') {
        return `-![${title}](./assets/images/${repoName}.png)`
    }
    if (images === 'Screenshot PNG with Wireframe') {
        return `-![${title}](./assets/images/${repoName}.png)\n- ![wireframe](,/assets/images/wireframe.png)`
    }
    if (images === 'Screenshot GIF') {
        return `-![${title}](./assets/images/${repoName}.gif)`
    }
    if (images === 'Screenshot GIF with Wireframe') {
        return `-![${title}](./assets/images/${repoName}.gif)\n- ![wireframe](./assets/images/wireframe.png)`
    }
    if (images === 'Screenshot GIF with Video') {
        return `-![${title}](./assets/images/${repoName}.gif)\n- [CLICK HERE TO VIEW FULL VIDEO](./assets/images/${repoName}.webm)`
    }
    if (images === 'none') {
        return 'No Images On File'
    }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicenseBadge(data.license)}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Application](#application)
- [images](#images)
- [Tests](#tests)
- [questions](#questions)
- [Contributing](#contributing)
- [License](#license)
- [Copyright](#copyright)


## Description
- ${data.description}


## Installation
Follow these steps to install this project on your local machine.
- Open Bash editor
- mkdir ${data.repoName}
- cd ${data.repoName}
- git clone https://github.com/${data.username}/${data.repoName}.git
- ${data.install}


## Usage
- After cloning this repository...
- ${data.usage}


## Application
- Link to Deployed Application: ${data.deployedURL}


## Images
- ${renderImages(data.title, data.images, data.repoName)}


## Tests
- ${data.tests}


## Questions
- Username: ${data.username}
- GitHub: https://github.com/${data.username}/
- Email: ${data.email}


## Contributing
- If you would like to contribute...
- ${data.contributing}


${renderLicenseSection(data.license)}



## Copyright
- © Copyright ${data.year} ${data.name}
    `;


}
// This project is licenses under the license.
module.exports = generateMarkdown;
//${renderLicenseSection(data.license)}
