import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import MainPage from './pages/MainPage';
import Session from './pages/SessionPage';
import CalendarPage from './pages/CalendarPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>TAB</title>
      </Helmet>
      <Route component={MainPage} path="/main" />
      <Route component={Session} path={'/session'} />
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={CalendarPage} path="/calendar" />
    </>
  );
};

export default App;
