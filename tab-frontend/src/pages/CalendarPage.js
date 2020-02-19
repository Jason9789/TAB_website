import React, { Component } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
// import Calendar from '../components/calendar/Calendar';
// import Calendar from 'react-calendar';
import '../components/calendar/Calendar.scss';
import styled from 'styled-components';
import Calendar from 'react-calendar/dist/entry.nostyle';
import Footer from '../components/common/Footer';

const CalendarBlock = styled.div`
  margin-top: 4rem;
`;
class MainPage extends Component {
  //   state = {
  //     date: new Date(),
  //   };

  //   onChange = date => this.setState({ date });

  render() {
    return (
      <>
        <HeaderContainer />
        {/* <div>Calendar Page TEST</div> */}
        <CalendarBlock>
          <Calendar className="react-calendar" />
          {/* <Calendar /> */}
        </CalendarBlock>
        <Footer />
      </>
    );
  }
}

export default MainPage;
