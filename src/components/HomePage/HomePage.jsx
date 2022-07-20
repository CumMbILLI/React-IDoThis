import React from "react";
import Calendar from "./Calendar/Calendar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main">
      <div className="contetnt">
        <div className="calendar_buts">
          <div className="calendar_block">
            <Calendar />
          </div>
          <div>
            <button  className="create_todo">Create Todo</button>
          </div>
        </div>
        <div className="todos_block">
          <div className="tabs"></div>
          <div className="todos">
            <div className="todo_field">
              <div className="task"></div>
              <div className="buts">
                <div className="coml"></div>
                <div className="remove"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
