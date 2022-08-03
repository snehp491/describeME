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

  return `## This project is licensed under the [${license}](${renderLicenseLink(license)}) license. `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(renderLicenseSection('MIT License'));
  return `# ${data.title}
`;
}
module.exports = generateMarkdown;
