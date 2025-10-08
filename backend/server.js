// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Import routes
const userRoutes = require('./api/users');
const farmerRoutes = require('./api/farmers');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// ===============================
// Middleware
// ===============================
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Serve static files (optional, for images or docs if needed)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ===============================
//  MongoDB Connection
// ===============================
const MONGO_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://admin:nm3WFYMX13IQWWB3@cluster0.ofrm5kp.mongodb.net/AhianovaDB';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((error) => console.error('❌ MongoDB connection error:', error));

// ===============================
//  API Routes
// ===============================
app.use('/api/users', userRoutes);
app.use('/api/farmers', farmerRoutes);

//  Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: '✅ Ahianova API is running smoothly!' });
});

// ===============================
// Start Server
// ===============================
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
  console.log(` API base URL: http://localhost:${PORT}/api`);
});

