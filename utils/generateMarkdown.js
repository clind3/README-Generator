// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge= '';
  switch (license) {
    case 'Apache License V2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'; 
      break;
    case 'MIT License':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'; 
      break;
    case 'GNU General Public V3.0':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
    if(license != 'No License'){
      link = '- [License](#license)';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = '';
  switch (license) {
    case 'Apache License V2.0':
      section = 'This project has a license with [Apache License Version 2.0], January 2004 (http://www.apache.org/licenses/)' ; 
      break;
    case 'MIT License':
      section = `
      MIT License

      Copyright (c) [year] [fullname]
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.` ; 
      break;
    case 'GNU General Public V3.0':
      section = 'This project has a license with [GNU General Public V3.0], (https://choosealicense.com/licenses/gpl-3.0/)';
      break;
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.License);
  const licenseLink = renderLicenseLink(data.License);
  const licenseSection = renderLicenseSection(data.License);
  let collaborators =`${data.creatorName}`;
  if(data.confirmCreditors==true){
    collaborators += '\n\n' + data.Collaborators;
  }
  if(data.confirmResource == true){
    collaborators += '\n\n' + data.thirdParty;
  }
  collaborators += '\n\n Contact me with any questions at my email '+ data.email +' or at my GitHub ' + data.gitHub;

  const createMD = `# ${data.Title}

  ${licenseBadge}
  
  ## Description

  ${data.Description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${licenseLink}
  - [Features](#features)
  - [Contributing](#contributing)
  - [Testing](#testing)

  ## Installation

  ${data.Install}

  ## Usage

  ${data.Usage}

  ## Credits

  ${collaborators}

  ## License

  ${licenseSection}
  

  ---

  ## Features

  ${data.Features}

  ## Contributing

  ${data.Contribution}

  ## Testing

  ${data.Test}
  `;

  return createMD;
}

module.exports = generateMarkdown;
