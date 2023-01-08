// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseBadge;
  if (license === "None") {
    licenseBadge = "";
  }
  if (license === "Apache License 2.0") {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license === 'GNU General Public License v3.0') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (license === 'MIT License') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'BSD 2-Clause "Simplified" License') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  }
  else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
  else if (license === 'Boost Software License 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } 
  else if (license === 'Creative Commons Zero v1.0 Universal') {
    licenseBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
  }
  else if (license === 'Eclipse Public License 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  }
  else if (license === 'GNU Affero General Public License 2.0') {
    licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  } 
  else if (license === 'GNU General Public License v2.0') {
    licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  }
  else if (license === 'GNU Lesser General Public License v2.1') {
    licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  }
  else {
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
  return licenseBadge;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  let html = "";
  let questionsHtml = '\n## Questions'
  let licenseBadgeHtml;

  if (data.License) {
    licenseBadgeHtml = renderLicenseBadge(data.License);
    html += licenseBadgeHtml;
  }
  
  for (const property in data) {
    let newHtml = "";
    if (property === "Github" || property === "Email") {
      if (data[property]) {
        newHtml = `\n\n ${property} : ${data[property]}`
        questionsHtml += newHtml;
      }
      continue;
    }
    else if (property === "Project") {
      newHtml = `\n\n# ${data[property]}`;
      html += newHtml;
    }
    else if (property === "TOC") {
      let tocList = []
      let tocHtml = `\n## Table of Contents`;
      if (data[property]) {
        for (const key in data) {
          if (key === "Github" || key === "Email" || key === "TOC" || key === "Project" || key === "Description" || !data[key] || (key === "License" && data[key] === "None")) {
            continue;
          } else {
            tocList.push(key)
          }
        }
        for (let i = 0; i < tocList.length; i++) {
          newHtml = `\n- [${tocList[i]}](#${tocList[i].toLowerCase()})`
          tocHtml += newHtml
        }
        html += tocHtml;
      }
      continue;
    }
    else if (data[property]) {
      if (property === "License") {
        newHtml = `\n## ${property} \n${data[property]} \n\nFor more details, please refer to the LICENSE in the repo.`
        html += newHtml;
      }
      else {
        newHtml = `\n## ${property} \n${data[property]}`;
        html += newHtml;
      }
    }
  }

  // adding Questions section to html markup
  html += questionsHtml;

  return html
}

module.exports = generateMarkdown;