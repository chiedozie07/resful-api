const http = require('http');
const app = require('./app.js');

//create server
const server = http.createServer(app);

const port = process.env.PORT || 5000;
//listens for port
server.listen(port, () => console.log(`Attention Chiedozie! Server is alive at http://localhost:${port}`));