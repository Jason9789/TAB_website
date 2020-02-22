import React, { Component } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Calendar from 'react-calendar';
import '../components/calendar/Calendar.scss';
import styled from 'styled-components';
import Footer from '../components/common/Footer';

const CalendarBlock = styled.div`
  padding-top: 4rem;
`;
class MainPage extends Component {
  render() {
    return (
      <>
        <HeaderContainer />
        {/* <div>Calendar Page TEST</div> */}
        <CalendarBlock>
          <Calendar className="react-calendar" />
        </CalendarBlock>
        <Footer />
      </>
    );
  }
}

export default MainPage;
