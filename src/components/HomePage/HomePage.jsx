import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import Calendar from "./Calendar/Calendar";
import axiosInstance from "../../utils/axiosInstance";
import Popap from "../Popap/Popap";
import Todo from "./Todo/Todo";
import "../style/HomePage.css";
import "../style/adaptive.css";

const HomePage = () => {
  const USER = localStorage.getItem("user");
  const [activePopap, setActivePopap] = useState(false);
  const [todos, setTodos] = useState([{ message: "No Todo :)" }]);
  const [todosAll, setTodosAll] = useState([{}]);
  const [todosAcive, setTodosActive] = useState([{}]);
  const [todosComplite, setTodosComplite] = useState([{}]);
  const [date, setDate] = useState(new Date());

  const getTodos = async () => {
    try {
      const { data, status } = await axiosInstance.get(
        `/todo/?date=${format(date, "Y-M-d")}`
      );
      console.log(status);
      console.log(data);
      if (status === 200) {
        setTodos(data.todos);
        setTodosAll(data.todos);
        setTodosActive(data.todos.filter((todo) => !todo.checked));
        setTodosComplite(data.todos.filter((todo) => todo.checked));
      }
      if (status === 209) {
        setTodos([{ message: "No Todo :)" }]);
      }
      if (status === 403) {
        setTodos([{ message: "Server died :c" }]);
      }
      if (status === 500) {
        setTodos([{ message: "Sign in to see your todo list." }]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, [date]);

  return (
    <div className="main">
      <div className="content">
        <div className="calendar_buts">
          <div className="calendar_block">
            <Calendar date={date} setDate={setDate} />
          </div>
          {USER && (
            <div className="but_create">
              <button
                className="create_todo"
                onClick={() => setActivePopap(true)}
              >
                Create Todo
              </button>
            </div>
          )}
        </div>
        <div className="todos_block">
          {todos[0].hasOwnProperty("message") ? (
            <div className="mes">{todos[0].message}</div>
          ) : (
            <>
              <div className="tabs">
                <button className="tabs__btn" onClick={() => setTodos(todosAll)}>All</button>
                <button className="tabs__btn" onClick={() => {setTodos(todosAcive)}}>Active</button>
                <button className="tabs__btn" onClick={() => {setTodos(todosComplite)}}>Completed</button>
              </div>
              <div className="todos">
                {todos?.map((todo, index) => (
                  <Todo
                    key={todo.id}
                    index={index}
                    todo={todo}
                    date={date}
                    getTodos={getTodos}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Popap
        activePopap={activePopap}
        setActivePopap={setActivePopap}
        date={date}
        getTodos={getTodos}
      />
    </div>
  );
};

export default HomePage;
