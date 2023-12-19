// src/pages/api/logout.js
export default async function handler(req, res) {
    if (req.method === 'GET') {
      
      res.redirect('/login');
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  