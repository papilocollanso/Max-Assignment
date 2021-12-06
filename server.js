const http = require('http');

const routes =require('./routes');

const server= http.createServer(routes);
console.log('server started at port 3000');

server.listen(3000);