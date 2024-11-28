import { useState } from "react";
import { tasks } from "./data/data";
import "./App.css";

function App() {
  const filteredTasks = (filters) => {
    if (filters) {
      return tasks.filter((task) => filters.includes(task.state));
    } else return tasks;
  };

  const createList = (filteredTasks) => {
    return (
      <ul className="list-group list-group-flush">
        {filteredTasks.map((task, index) => (
          <li key={index} className="list-group-item">
            <div className="title fw-semibold">
              {task.title} <span className={task.state}>{task.state}</span>
            </div>
            <div>Priority {task.priority}</div>
            <div>Est. time {task.estimatedTime}</div>
          </li>
        ))}
      </ul>
    );
  };

  const completedTasksFilter = ["completed"];
  const uncompletedTasksFilter = ["backlog", "in_progress"];

  return (
    <>
      <header>
        <div className="container py-2">
          <h1 className="fw-semibold">Task Manager</h1>
        </div>
      </header>

      <div className="container py-2">
        <h4 className="my-3 fw-semibold">
          Current Tasks ({filteredTasks(uncompletedTasksFilter).length})
        </h4>

        {createList(filteredTasks(uncompletedTasksFilter))}

        <hr />

        <h4 className="my-3 fw-semibold">
          Completed Tasks ({filteredTasks(completedTasksFilter).length})
        </h4>

        {createList(filteredTasks(completedTasksFilter))}
      </div>
    </>
  );
}

export default App;
