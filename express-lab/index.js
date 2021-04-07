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

// 静态资源
app.use('/static', express.static('public', {
  setHeaders: (res) => {
    res.set('access-control-allow-origin', '*');
  }
}));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});