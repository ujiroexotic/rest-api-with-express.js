# Simple REST API with Express.js

## Overview
This is a simple RESTful API using Express.js with CRUD operations on an in-memory store.

## Features
- Full CRUD: Create, Read, Update, Delete
- Middleware and 404 route handling
- Modular code structure
- Error handling

## Endpoints

| Method | Endpoint       | Description            |
|--------|----------------|------------------------|
| GET    | /items         | Get all items          |
| GET    | /items/:id     | Get item by ID         |
| POST   | /items         | Create new item        |
| PUT    | /items/:id     | Update existing item   |
| DELETE | /items/:id     | Delete item by ID      |

## Sample Item
```json
{
  "name": "Notebook",
  "description": "A ruled notebook"
}

