const Koa = require('koa');

const app = new Koa();
const port = 3001;

app.use(ctx => {
  ctx.body = 'hello';
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});