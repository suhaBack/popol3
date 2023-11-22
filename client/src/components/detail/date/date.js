import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const calculateNightStay = () => {
    if (startDate && endDate) {
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      const nightStay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return nightStay;
    }
    return 0;
  };

  return (
    <div className="dateBox">
      <div className="dateflexBox">
        <div>
          <span>체크인: </span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy/MM/dd"
          />
        </div>

        <div>
          <span>체크아웃: </span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="yyyy/MM/dd"
          />
        </div>

        <div>
          {startDate && endDate && (
            <span>{calculateNightStay()}박 {calculateNightStay() + 1}일</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
