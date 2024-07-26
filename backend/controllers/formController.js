const jwt = require('jsonwebtoken');
const connection = require('../config/db');

// User Registration Handler
exports.handleFormSubmission = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  if (password.length <6){
    return res.status(400).json({error: 'Password must be at least 6 charater long'});
  }
      const checkUserSql = 'SELECT * FROM users WHERE email = ?';
  connection.query(checkUserSql, [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const insertUserSql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    connection.query(insertUserSql, [email, password], (err) => {
      if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json({ message: 'User registered successfully' });
    });
    });
  };

// Contact Form Handler
exports.handleFormSubmission2 = (req, res) => {
  const { email, fullName, feedback } = req.body;
  if (!email || !fullName || !feedback) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  connection.query('INSERT INTO Contacts (email, fullName, feedback) VALUES (?, ?, ?)', [email, fullName, feedback], (err) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Form submitted successfully' });
  });
};

// User Login Handler
exports.handleLogin = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  connection.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Error retrieving user' });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const user = results[0];
    const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  });
};
