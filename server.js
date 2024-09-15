const http = require('http');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

console.log('Starting server...');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(`Port set to: ${PORT}`);

app.use(express.json());
app.use(express.static('public'));

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});

// Import and use API routes
try {
  const apiRoutes = require('./src/routes/api');
  app.use('/api', apiRoutes);
  console.log('API routes loaded successfully');
} catch (error) {
  console.error('Error loading API routes:', error);
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('An unexpected error occurred');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});