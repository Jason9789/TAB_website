import Router from 'koa-router';
import posts from './posts';
import postsSession from './postsSession';
import auth from './auth';

const api = new Router();

// 공지 게시판
api.use('/posts', posts.routes());
// 활동 게시판
api.use('/session', postsSession.routes());
api.use('/auth', auth.routes());

// 라우터를 내보냅니다.
export default api;
