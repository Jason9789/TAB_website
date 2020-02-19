import React, { Component } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
// import Calendar from '../components/calendar/Calendar';
import Calendar from 'react-calendar';
import Footer from '../components/common/Footer';

// const MainPage = () => {
//   return (
//     <>
//       <HeaderContainer />
//       <div>Calendar Page TEST</div>
//       <Calendar />
//       <Footer />
//     </>
//   );
// };

class MainPage extends Component {
  state = {
    date: new Date(),
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <>
        <HeaderContainer />
        {/* <div>Calendar Page TEST</div> */}
        <Calendar />
        <Footer />
      </>
    );
  }
}

export default MainPage;
