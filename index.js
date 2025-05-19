const express = require('express');
const itemRoutes = require('./routes/items');
app.use('/items', itemRoutes);


const app = express();
const PORT = 3000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Items routes
app.use('/items', itemRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
