import React from 'react';
import './Calendar.scss';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Calendar = () => {
  return (
    <div className="Calendar">
      <div className="head">
        <button>
          <MdChevronLeft />
        </button>
        <span className="title">December 2016</span>
        <button>
          <MdChevronRight />
        </button>
      </div>
      <div className="body">Body</div>
    </div>
  );
};

export default Calendar;
