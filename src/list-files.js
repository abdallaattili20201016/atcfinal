const fs = require('fs');
const path = require('path');

function listFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      listFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const projectDir = path.resolve(__dirname);
const files = listFiles(projectDir);
fs.writeFileSync('files_structure.txt', files.join('\n'), 'utf-8');
console.log('File structure saved to files_structure.txt');
