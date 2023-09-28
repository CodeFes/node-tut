const path = require('path')
// to get the seperator
console.log(path.sep)
const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)

//if we only want the last portion of the file(test.txt)
const base = path.basename(filePath)
console.log(base)

//   returns an absolute path
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)