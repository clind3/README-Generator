// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License V2.0':
      return ; 
    case 'MIT License':
      return ; 
    case 'GNU General Public V3.0':
      return ;
    case 'Creative Commons Attribute Share':
      return ;
    case 'No License':
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License V2.0':
      return ; 
    case 'MIT License':
      return ; 
    case 'GNU General Public V3.0':
      return ;
    case 'Creative Commons Attribute Share':
      return ;
    case 'No License':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache License V2.0':
      return 'This project has a license with [Apache License Version 2.0], January 2004 (http://www.apache.org/licenses/)' ; 
    case 'MIT License':
      return 'This project has a license with [MIT License], (https://choosealicense.com/licenses/mit/)' ; 
    case 'GNU General Public V3.0':
      return 'This project has a license with [GNU General Public V3.0], (https://choosealicense.com/licenses/gpl-3.0/)';
    case 'No License':
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  let collaborators =`${data.creatorName}`;
  if(data.confirmCreditors==true){
    collaborators += data.Collaborators;
  }

  const createMD = `# ${data.Title}

  ${licenseBadge}
  
  ## Description

  ${data.Description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [How to Contribute](#how to Contribute)
  - [Testing](#testing)

  ## Installation

  ${data.Install}

  ## Usage

  ${data.Usage}

  ## Credits

  ${collaborators}

  ## License

  ${licenseSection}
  ${licenseLink}

  ---

  ## Features

  ${data.Features}

  ## How to Contribute

  ${data.Contribution}

  ## Testing

  ${data.Test}
  `;

  console.log(createMD);
  return createMD;
}

module.exports = generateMarkdown;
