import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writeSession, updateSessionPost } from '../../modules/writeSession';

const SessionWriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, session, sessionError } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      session: write.session,
      sessionError: write.sessionError,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      writeSession({
        title,
        body,
        tags,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (session) {
      const { _id, user } = session;
      history.push(`/@${user.username}/${_id}`);
    }
    if (sessionError) {
      console.log(sessionError);
    }
  }, [history, session, sessionError]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      //   isEdit={!!originalPostId}
    />
  );
};

export default withRouter(SessionWriteActionButtonsContainer);
