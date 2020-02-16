import Router from 'koa-router';
import * as postsSessionCtrl from './postsSession.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const postsSession = new Router();

postsSession.get('/', postsSessionCtrl.list);
postsSession.post('/', checkLoggedIn, postsSessionCtrl.write);

const session = new Router(); //  /api/postsSession/:id

session.get('/', postsSessionCtrl.read);
session.delete(
  '/',
  checkLoggedIn,
  postsSessionCtrl.checkOwnSession,
  postsSessionCtrl.remove,
);
session.patch(
  '/',
  checkLoggedIn,
  postsSessionCtrl.checkOwnSession,
  postsSessionCtrl.update,
);

postsSession.use('/:id', postsSessionCtrl.getSessionById, session.routes());

export default postsSession;
