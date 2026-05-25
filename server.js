/* // Define server port
const PORT = 8080
// Import the HTTP module
const http = require('http'), fs = require('fs'), path = require('path');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body as 'Hello, World!'
  res.end('Hello, World!\n');
});

// Define the port to listen on const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
 */

const http = require('http'), fs = require('fs'), path =
require('path');
  const PORT = 8080;
  http.createServer((req, res) => {
    const file = req.url === '/' ? 'index.html' : req.url.slice(1);
    const p = path.join(__dirname, file);
    fs.readFile(p, (err, data) => {
      if (err) return res.writeHead(404).end('Not found');
      res.writeHead(200, { 'Content-Type': file.endsWith('.js') ?
'application/javascript' : 'text/html' });
      res.end(data);
    });
  }).listen(PORT, () => console.log(`http://localhost:${PORT}`));