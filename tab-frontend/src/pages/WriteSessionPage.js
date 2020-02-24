import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import SessionWriteActionButtonsContainer from '../containers/write/SessionWriteActionButtonsContainer';
import { Helmet } from 'react-helmet-async';

const WriteSessionPage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - TAB</title>
      </Helmet>
      <div>session 글쓰기</div>
      <EditorContainer />
      <TagBoxContainer />
      <SessionWriteActionButtonsContainer />
    </Responsive>
  );
};

export default WriteSessionPage;
