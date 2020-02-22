const Router = require('koa-router');
const postsQna = new Router();

const printInfo = ctx => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

postsQna.get('/', printInfo);
postsQna.post('/', printInfo);
postsQna.get('/:id', printInfo);
postsQna.delete('/:id', printInfo);
postsQna.put('/:id', printInfo);
postsQna.patch('/:id', printInfo);

module.exports = postsQna;
