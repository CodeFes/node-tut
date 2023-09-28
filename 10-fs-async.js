// Reading and writing of files

const log=console.log

const {readFileSync,writeFileSync} = require('fs');
log('start');
//it is a method and in it we need to provide 2 parameters

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
log('Done with the task');

log('Starting the next task!');

//log(first)
//log(second)

writeFileSync('./content/result-sync.txt',
 `Here is the result : ${first}`,{flag: 'a'})
 //11h18min. the 1st para sets the path, the 2nd is the content 
 //that should be created and 3rd is to re-write the text