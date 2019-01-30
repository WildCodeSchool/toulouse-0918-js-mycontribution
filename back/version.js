const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const readFile = promisify(fs.readFile.bind(fs));
const buildDir = path.resolve(__dirname, '../front/build');
const indexFile = path.join(buildDir, 'index.html');

let commits;

const readIndex = () => readFile(indexFile)
  .then(buf => buf.toString())
  .then(html  => html.replace('[]', commits));

exec('git log -n 3 --oneline', { cwd: __dirname }, (err, stdout) => {
  const output = stdout.split('\n')
    .filter(line => !!line);
  commits = JSON.stringify(output);
})

module.exports = {
  readIndex
};
