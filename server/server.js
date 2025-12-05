require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion DB
connectDB();

// Routes
app.use('/api/grades', require('./routes/grades'));
app.use('/api/students', require('./routes/students'));
app.use('/api/courses', require('./routes/courses'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: '✅ Server running' });
});

const PORT = process.env.PORT || 8010;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
