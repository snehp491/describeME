const licenses = [
  {
    name: 'GNU AGPL v3',
    link: 'https://choosealicense.com/licenses/agpl-3.0/',
    badge: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg'
  },
  {
    name: 'GNU GPL v3',
    link: 'https://choosealicense.com/licenses/gpl-3.0/',
    badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  },
  {
    name: 'GNU LGPL v3',
    link: 'https://choosealicense.com/licenses/lgpl-3.0/',
    badge: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg'
  },
  {
    name: 'Mozilla Public License',
    link: 'https://choosealicense.com/licenses/mpl-2.0/',
    badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  },
  {
    name: 'Apache License 2.0',
    link: 'https://choosealicense.com/licenses/apache-2.0/',
    badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  },
  {
    name: 'MIT License',
    link: 'https://choosealicense.com/licenses/mit/',
    badge: 'https://img.shields.io/badge/License-MIT-yellow.svg'
  },
  {
    name: 'Boost Software License 1.0',
    link: 'https://choosealicense.com/licenses/bsl-1.0/',
    badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
  },
  {
    name: 'The Unlicense',
    link: 'https://choosealicense.com/licenses/unlicense/',
    badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg'
  }
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  for (let licenseItem of licenses) {
    if (licenseItem.name === license) {
      return `![badge](${licenseItem.badge})`;
    }
  }

  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  for (let licenseItem of licenses) {
    if (licenseItem.name === license) {
      return licenseItem.link;
    }
  }

  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license. `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Tests](#Tests)
  * [Contributing](#Contributing)
  * [Questions](#Questions)
    
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Tests 
  ${data.tests}

  ## Contributing
  ${data.contributing}
  
  ## Questions
  Follow on [GitHub](https://github.com/${data.github}) or via email [${data.email}](mailto:${data.email})
`;
}
module.exports = generateMarkdown;

// # <Your-Project-Title>
//
// ## Description
//
// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
//
// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?
//
// ## Table of Contents (Optional)
//
// If your README is long, add a table of contents to make it easy for users to find what they need.
//
// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)
//
// ## Installation
//
// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
//
// ## Usage
//
// Provide instructions and examples for use. Include screenshots as needed.
//
// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
//
//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```
//
// ## Credits
//
// List your collaborators, if any, with links to their GitHub profiles.
//
// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
//
// If you followed tutorials, include links to those here as well.
//
// ## License
//
// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
//
// ---
//
// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
//
// ## Badges
//
// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
//
// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
//
// ## Features
//
// If your project has a lot of features, list them here.
//
// ## How to Contribute
//
// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
//
// ## Tests
