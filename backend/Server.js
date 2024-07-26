const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');


const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', formRoutes);   

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
