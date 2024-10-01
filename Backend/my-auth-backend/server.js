const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Mengizinkan frontend mengakses backend
app.use(express.json()); // Mengizinkan request body berupa JSON

// Rute contoh
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Endpoint untuk registrasi
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  // Proses penyimpanan ke database
  // res.json({ message: 'User registered successfully', user: { username } });
  res.status(200).json({ message: 'User registered successfully', user: { username } });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
