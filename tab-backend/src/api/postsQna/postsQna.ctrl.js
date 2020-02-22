import Qna from '../../models/postQna';

/**
 * POST /api/qna
 * {
 *  title: '제목',
 *  body: '내용',
 *  tags: ['태그1', '태그2']
 * }
 */
export const write = async ctx => {
  const { title, body, tags } = ctx.request.body;
  const post = new Qna({
    title,
    body,
    tags,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async ctx => {
  try {
    const posts = await Qna.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async ctx => {
  const { id } = ctx.params;
  try {
    const post = await Qna.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Qna.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const update = async ctx => {
  const { id } = ctx.params;
  try {
    const post = await Qna.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 이 값을 설정하면 업데이트된 데이터를 반환
      // false일 때는 업데이트되기 전의 데이터를 반환
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
