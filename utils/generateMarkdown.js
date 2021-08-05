function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Licensing

[![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

For more information please check [GitHub Licensing](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Acknowledgments](#acknowledgments)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.test}

## Acknowledgments

This README was Created by [Dobbs96](https://github.com/Dobbs96) READMEs Generator.
${data.acknowledgments}

## Questions
- Check my GitHub [${data.github}](https://github.com/${data.github})
- If you have any quetions don't hesitate to email at ${data.email}
`;
}

module.exports = generateMarkdown;
