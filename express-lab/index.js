const express = require('express');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log('req.path:', req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('hello');
  // res.end();
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});