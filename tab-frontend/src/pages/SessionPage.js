import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <div>Session Page</div>
      <PostListContainer />
      <PaginationContainer />
      <Footer />
    </>
  );
};

export default PostListPage;
