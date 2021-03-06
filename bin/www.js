// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('../app'); // The express app we just created

console.log(process.env.PORT);
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.set('port', port);
const server = http.createServer(app);
server.listen(port);