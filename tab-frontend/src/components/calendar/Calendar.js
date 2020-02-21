// import React from 'react';
// import './Calendar.scss';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import moment, { Moment as MomentTypes } from 'moment';

// const Calendar = () => {
//   const generate = () => {
//     const today = moment();
//     const startWeek = today
//       .clone()
//       .startOf('month')
//       .week();
//     const endWeek =
//       today
//         .clone()
//         .endOf('month')
//         .week() === 1
//         ? 53
//         : today
//             .clone()
//             .endOf('month')
//             .week();
//     let calendar = [];

//     for (let week = startWeek; week <= endWeek; week++) {
//       calendar.push(
//         <div className="row" key={week}>
//           {Array(7)
//             .fill(0)
//             .map((n, i) => {
//               let current = today
//                 .clone()
//                 .week(week)
//                 .startOf('week')
//                 .add(n + i, 'day');

//               let isSelected =
//                 today.format('YYYYMMDD') === current.format('YYYYMMDD')
//                   ? 'selected'
//                   : '';
//               let isGrayed =
//                 current.format('MM') === today.format('MM') ? '' : 'grayed';
//               return (
//                 <div className={`box ${isSelected} ${isGrayed}`} key={i}>
//                   <span className={`text`}>{current.format('D')}</span>
//                 </div>
//               );
//             })}
//         </div>,
//       );
//     }
//     return calendar;
//   };

//   return (
//     <div className="Calendar">
//       <div className="head">
//         <button>
//           <MdChevronLeft />
//         </button>
//         <span className="title">{moment().format('MMMM YYYY')}</span>
//         <button>
//           <MdChevronRight />
//         </button>
//       </div>
//       <div className="body">
//         <div className="row">
//           <div className="box">
//             <span className="text">SUN</span>
//           </div>
//           <div className="box">
//             <span className="text">MON</span>
//           </div>
//           <div className="box">
//             <span className="text">TUE</span>
//           </div>
//           <div className="box">
//             <span className="text">WED</span>
//           </div>
//           <div className="box">
//             <span className="text">THU</span>
//           </div>
//           <div className="box">
//             <span className="text">FRI</span>
//           </div>
//           <div className="box">
//             <span className="text">SAT</span>
//           </div>
//         </div>

//         {generate()}
//       </div>
//     </div>
//   );
// };

// export default Calendar;

import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);

/**
 * new Data();
 * new Date(value);
 * new Date(dateString);
 * new Date(year, monthIndex[, day[, [hour[, minutes[, seconds[, miliiseconds]]]]]]);
 * monthIndex는 0부터 시작합니다. 0은 1월을 의미하고, 11은 12월을 의미
 */

const Calendar = () => {
  <div style={{ height: 500 }}>
    <BigCalendar
      //  events={[
      //      title: "2.20 출근",
      //      allDay: false,
      //      start: new Date(2020, 1, 20, 10, 0),   // 10.00 AM
      //      end: new Date(2020, 1, 20, 10, 30)     // 2.00 PM
      //  ],
      // [
      //     title: "2.00 퇴근",
      //     allDay: false,
      //      start: new Date(2020, 1, 20, 17, 30),   // 10.00 AM
      //      end: new Date(2020, 1, 20, 17, 40)     // 2.00 PM
      // ]}
      step={60}
      view="month"
      views={['month']}
      min={new Date(2008, 0, 1, 8, 0)}
      max={new Date(2008, 0, 1, 17, 0)}
      date={new Date(2020, 1, 20)}
    />
  </div>;
};

export default Calendar;
