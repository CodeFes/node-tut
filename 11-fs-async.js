//could not understand the error 1h26 min

// Reading and writing of files

const {readFileSync, writeFileSync} = require('fs')
//it is a method and in it we need to provide 2 parameters

const {readFile, writeFile} = require('fs')
console.log('Start')
//it is a method and in it we need to provide 2 parameters

/* first method

readFile('./content/second.txt','utf8',
(err, result)=>{
    if(err){
    console.log(err);
    return
}
console.log(result)
})*/


    readFile('./content/first.txt','utf8',(err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const first = result;
        readFile('./content/second.txt','utf8',(err, result)=>{
            if(err){
                console.log(err);
                return
            }
            const second = result;
        writeFile('./content/result-sync.txt',
        `Here is the result : ${second} , ${first}`
        ,(err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('Done with this task')
        }
        )
        })
    })

    console.log('Starting next task')