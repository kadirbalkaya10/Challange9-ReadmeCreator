function renderLicenseBadge(license) {
  const badges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0":
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    Boost:
      "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "Creative Commons - Attribution":
      "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)",
    "The Unlicense":
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  };
  return license in badges ? badges[license] : "";
}

function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: "[License: MIT](https://opensource.org/licenses/MIT)",
    "Apache 2.0": "[License](https://opensource.org/licenses/Apache-2.0)",
    Boost: "[License](https://www.boost.org/LICENSE_1_0.txt)",
    "Creative Commons - Attribution":
      "[License: CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)",
    "The Unlicense": "[License: Unlicense](http://unlicense.org/)",
  };
  return license in licenseLinks ? licenseLinks[license] : "";
}

function renderLicenseSection(license) {
  return license !== "None"
    ? `This project is licensed under the ${license} License.`
    : "This project has no license.";
}

function generateMarkdown(data) {
  const {
    title,
    description,
    install,
    usage,
    guide,
    license,
    tests,
    github,
    email,
  } = data;
  return `
# ${title}
${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${install}

## Usage
${usage}

## How to Contribute
${guide}

## License
${renderLicenseSection(license)}
${renderLicenseLink(license)}

## Tests
${tests}

## Questions
Feel free to reach out to me via [GitHub](https://github.com/${github}) or email at ${email} if you have any questions.
`;
}

module.exports = { generateMarkdown };
