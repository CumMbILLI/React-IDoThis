import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { isSameMonth } from "date-fns";
import "react-day-picker/dist/style.css";

const Calendar = () => {
  const today = new Date();
  const [month, setMonth] = useState(new Date());
  return (
    <>
      <div className="calendar">
        <DayPicker month={month} onMonthChange={setMonth} />
      </div>
      <div>
        {!isSameMonth(today, month) && (
          <button className="today" onClick={() => setMonth(today)}>Today</button>
        )}
      </div>
    </>
  );
};

export default Calendar;
