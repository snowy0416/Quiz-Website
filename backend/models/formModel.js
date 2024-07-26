const db = require('../config/db');

const createUser = (email, password, callback) => {
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const createContact = (email, fullname,feedback, callback) => {
  const query = 'INSERT INTO feedback (email, fullname,feedback) VALUES (?, ?,?)';
  db.query(query, [email, fullname,feedback], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { createUser ,createContact };
