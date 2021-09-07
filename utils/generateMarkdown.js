// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';

    case 'Apache':
     return 'https://www.apache.org/licenses/LICENSE-2.0';

    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0.html';
    
    default:
      return "no license";
  }
}

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
included in all copies or substantial portions of the Software.`;
  case 'Apache':
    return `Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;
  case 'GPL':
    return `GNU GENERAL PUBLIC LICENSE, Version 3, 29 June 2007. Copyright © 2007 Free Software Foundation, Inc. 
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`
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
  ${renderLicenseBadge(response.license)}


  ## Contributing
  ${response.contributionguidelines}
          
  ## Tests
  ${response.testinstructions}
          
  ## Questions
  If you have any questions, please feel free to reach out to me on github here: [${response.gitusername}](${response.giturl}), or by email: ${response.email}`;
}

module.exports = generateMarkdown;
