const express = require('express');
const router = express.Router();

let items = [];
let idCounter = 1;

// GET /items - Retrieve all items
router.get('/', (req, res) => {
  res.json(items);
});

// GET /items/:id - Retrieve item by ID
router.get('/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

// POST /items - Create a new item
router.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  const newItem = { id: idCounter++, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT /items/:id - Update an existing item
router.put('/:id', (req, res) => {
  const { name, description } = req.body;
  const item = items.find(i => i.id === parseInt(req.params.id));

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  item.name = name;
  item.description = description;
  res.json(item);
});

// DELETE /items/:id - Delete item by ID
router.delete('/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deleted = items.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
