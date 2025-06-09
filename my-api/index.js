const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors()); // allows your React app to fetch from this backend

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

app.get('/', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
