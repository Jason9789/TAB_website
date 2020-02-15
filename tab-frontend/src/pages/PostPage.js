import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import Footer from '../components/common/Footer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      <Footer />
    </>
  );
};

export default PostPage;
