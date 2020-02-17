import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Calendar from '../components/calendar/Calendar';
import Footer from '../components/common/Footer';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <div>Calendar Page TEST</div>
      <Calendar />
      <Footer />
    </>
  );
};

export default MainPage;
