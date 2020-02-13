import Joi from 'joi';
import User from '../../models/user';

/*
    POST /api/auth/register
    {
        username: 'jason',
        password: '1234',
    }
*/

// 회원가입
export const register = async ctx => {
  // Request Body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
  });
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password, name, email } = ctx.request.body;
  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    const exists_email = await User.findByEmail(email);
    if (exists || exists_email) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({
      username,
      name,
      email,
    });
    await user.setPassword(password); // 비밀번호 설정
    await user.save();

    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};

// export const login = async ctx => {
//   // 로그인
// };

// export const check = async ctx => {
//   // 로그인 상태 확인
// };

// export const logout = async ctx => {
//   // 로그아웃
// };
