const http = require('http')

const server = http.createServer((req, res)=>{
   if(req.url === '/'){
    res.end('Welcome to our home page')
   }

   if(req.url === '/about'){
    res.end('Here is our about history')
   }
   res.end(
    `<h1>Oops!</h1>
    <p>We cant Can't seem to find the page you are looking for</p>
    <a href='/'>back to home page</a>`
   )        // in case the file doesn't exsist
//res.write('Welcome to our 4home page');
//res.end();
})

server.listen(5000) //port the server is listening to 5000