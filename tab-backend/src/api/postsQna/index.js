import Router from 'koa-router';
import * as postsQnaCtrl from './postsQna.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const postsQna = new Router();

postsQna.get('/', postsQnaCtrl.list);
postsQna.post('/', checkLoggedIn, postsQnaCtrl.write);

const qna = new Router(); // /api/qna/:id
qna.get('/', postsQnaCtrl.read);
qna.delete('/', checkLoggedIn, postsQnaCtrl.checkOwnPost, postsQnaCtrl.remove);
qna.patch('/', checkLoggedIn, postsQnaCtrl.checkOwnPost, postsQnaCtrl.update);

postsQna.use('/:id', postsQnaCtrl.getPostById, qna.routes());

export default postsQna;
