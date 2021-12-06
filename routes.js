
const requestManager = (req,res)=>{

    const method = req.method;
    const url  = req.url;

    if(url === '/'){
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title> Greetings Card</title></head>');
        res.write('<body><h2>Good day everyone, How do you do?</h2><form action="/create-user" method="POST"><input type="text" name=username><button type="submit">create user</button></form></body>')
        res.write('</html>');
        return res.end();
    };

    if(url  === '/users'){
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title> Users:</title></head>');
        res.write('<body><h2>Dummy Users: </h2><ol><li>Collins</li><li>Michael</li><li>Prosper</li><li>Shuggies</li></ol></body>');
        res.write('</html>');
        return res.end();

    };

    if(url === '/create-user' && method === 'POST'){
       const body = [];
        req.on('data', (chunk)=>{
         body.push(chunk);
         console.log(body);

        });
        req.on('end',()=>{
          
         const parsedData = Buffer.concat(body).toString();
         const userData =parsedData.split('=')[1];
         console.log(userData);
         res.statusCode =302;
         res.setHeader('Location','/');
         return res.end();


        });
        


    };



};
module.exports =requestManager;