// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let contributions =`${data.creatorName}`;
  if(data.confirmCreditors==true){
    
  }
  const createMD = `# ${data.Title}
  
  ## Description

  ${data.Description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.Install}

  ## Usage

  ${data.Usage}

  ## Credits

  ${data.Collaborators}

  ## License

  ${data.License}

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
