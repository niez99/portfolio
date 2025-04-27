const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const baseDirectory = __dirname; // Serve files from current directory

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
  try {
    let filePath = path.join(baseDirectory, req.url === '/' ? 'portfolio.html' : req.url);
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
      if (error) {
        if(error.code == 'ENOENT'){
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found\n');
        }
        else {
          res.writeHead(500);
          res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
        }
      }
      else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  } catch (err) {
    res.writeHead(500);
    res.end('Server error');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
