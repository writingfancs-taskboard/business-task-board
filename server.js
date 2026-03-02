const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  // Default to taskboard.html
  let filePath = req.url === '/' ? '/taskboard.html' : req.url;
  filePath = path.join(__dirname, filePath);

  // Security: prevent directory traversal
  const realPath = fs.realpathSync(__dirname);
  if (!filePath.startsWith(realPath)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  // Try to serve the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If not found, try taskboard.html (for client-side routing)
      fs.readFile(path.join(__dirname, 'taskboard.html'), (err2, data2) => {
        if (err2) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 - Not Found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data2);
      });
    } else {
      // Determine content type
      const ext = path.extname(filePath).toLowerCase();
      let contentType = 'text/plain';
      
      if (ext === '.html') contentType = 'text/html';
      else if (ext === '.json') contentType = 'application/json';
      else if (ext === '.js') contentType = 'application/javascript';
      else if (ext === '.css') contentType = 'text/css';
      else if (ext === '.png') contentType = 'image/png';
      else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
      else if (ext === '.gif') contentType = 'image/gif';
      else if (ext === '.svg') contentType = 'image/svg+xml';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Task Board Server running on port ${PORT}`);
  console.log(`📊 Visit: http://localhost:${PORT}/taskboard.html`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
