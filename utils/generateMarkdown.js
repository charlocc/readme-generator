// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, gitusername) {
  switch (license) {
    case 'MIT':
      return `Copyright (c) 2021 ${gitusername} and others
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
        
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
        
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  case 'Apache':
    return `im apache`;
  default:
    return "no license";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Description 
  ${response.descriptioncontent}
          
  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#test)
  [Questions](#questions)
          
  ## Installation
  ${response.installationinstructions}
          
  ## Usage
  ${response.usageinformation}
          
  ## License
  ${response.license}

  ${renderLicenseSection(response.license, response.gitusername)}
  [${response.license} link](${renderLicenseLink(response.license)})


  ## Contributing
  ${response.contributionguidelines}
          
  ## Tests
  ${response.testinstructions}
          
  ## Questions
  If you have any questions, please feel free to reach out to me on github here: [${response.gitusername}](${response.giturl}), or by email: ${response.email}`;
}

module.exports = generateMarkdown;
