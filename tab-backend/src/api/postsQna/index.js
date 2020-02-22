import Router from 'koa-router';
import * as postsQnaCtrl from './postsQna.ctrl';

const postsQna = new Router();

postsQna.get('/', postsQnaCtrl.list);
postsQna.post('/', postsQnaCtrl.write);

const qna = new Router(); // /api/qna/:id
qna.get('/', postsQnaCtrl.read);
qna.delete('/', postsQnaCtrl.remove);
qna.patch('/', postsQnaCtrl.update);

postsQna.use('/:id', postsQnaCtrl.checkObjectId, qna.routes());

export default postsQna;
