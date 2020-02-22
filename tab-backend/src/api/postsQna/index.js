const Router = require('koa-router');
const postsQnaCtrl = require('./postsQna.ctrl');

const postsQna = new Router();

postsQna.get('/', postsQnaCtrl.list);
postsQna.post('/', postsQnaCtrl.write);
postsQna.get('/:id', postsQnaCtrl.read);
postsQna.delete('/:id', postsQnaCtrl.remove);
postsQna.put('/:id', postsQnaCtrl.replace);
postsQna.patch('/:id', postsQnaCtrl.update);

module.exports = postsQna;
