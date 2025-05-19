const express = require('express');
const router = express.Router();

let items = [];
let idCounter = 1;

// GET all items
router.get('/', (req, res) => {
  res.json(items);
});

// GET item by ID
router.get('/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

// POST a new item
router.post('/', (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  const newItem = {
    id: idCounter++,
    name,
    description
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT (update) an item by ID
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

// DELETE an item by ID
router.delete('/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem[0]);
});

module.exports = router;

