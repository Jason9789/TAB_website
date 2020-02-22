import Router from 'koa-router';
import * as postsQnaCtrl from './postsQna.ctrl';

const postsQna = new Router();

postsQna.get('/', postsQnaCtrl.list);
postsQna.post('/', postsQnaCtrl.write);
postsQna.get('/:id', postsQnaCtrl.read);
postsQna.delete('/:id', postsQnaCtrl.remove);
postsQna.patch('/:id', postsQnaCtrl.update);

export default postsQna;
