import React from "react";
import { format } from "date-fns";
import axiosInstance from "../../../utils/axiosInstance.js";
import del from "../../icon/delete.svg";
import "../../style/HomePage.css";

const Todo = ({ index, todo, date, getTodos }) => {
  const removeTodo = async (id) => {
    try {
      const { data, status } = await axiosInstance.delete(
        `/todo/${id}/?date=${format(date, "Y-M-d")}`
      );
      console.log(status);
      console.log(data);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };
  const changeActive = async (id) => {
    try {
      const { data, status } = await axiosInstance.patch(
        `/todo/${id}/?date=${format(date, "Y-M-d")}`
      );
      console.log(status);
      console.log(data);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={todo.checked? "todo active" : "todo"} onClick={()=>{changeActive(todo.id)}}>
      <div className="todo_num">
        <div className="num">{index + 1}</div>
        <div className="line"></div>
        <div className="todo_text">{todo.title}</div>
      </div>

      <div className="buts">
        <div className="line"></div>
        <input
            className="todo_checked"
            type="checkbox"
            checked={todo.checked}
            onChange={() => changeActive(todo.id)}
          />
        <img
          className="todo_delete"
          src={del}
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
