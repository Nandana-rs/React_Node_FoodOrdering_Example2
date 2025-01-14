// const http = require('http');
// const fs = require('fs');

// const foodItems = [
// { id: 1, name: 'Pizza', price: 10, image: 'https://via.placeholder.com/150?text=Pizza' },
// { id: 2, name: 'Burger', price: 5, image: 'https://via.placeholder.com/150?text=Burger' },
// { id: 3, name: 'Pasta', price: 8, image: 'https://via.placeholder.com/150?text=Pasta' },
// ];
// const server = http.createServer((req, res) => {
//     if (req.url === '/api/food' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(foodItems));
//     } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//     }
//     });
    
//     const PORT = 5000;
//     server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
//     });

const http = require('http');
const fs = require('fs');
const cors = require('cors');

const foodItems = [
  { id: 1, name: 'Pizza', price: 10, image: 'https://picsum.photos/150?random=1' },
  { id: 2, name: 'Burger', price: 5, image: 'https://picsum.photos/150?random=2' },
  { id: 3, name: 'Pasta', price: 8, image: 'https://picsum.photos/150?random=3' },
];

const server = http.createServer((req, res) => {
  // Enable CORS for all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request (preflight request for CORS)
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/api/food' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(foodItems));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
