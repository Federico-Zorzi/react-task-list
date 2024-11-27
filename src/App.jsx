import { useState } from "react";
import { tasks } from "./data/data";
import "./App.css";

function App() {
  const filteredTasks = (filters) =>
    tasks.filter((task) => filters.includes(task.state));

  const createList = (filteredTasks) => {
    return filteredTasks.map((task, index) => (
      <li key={index} className="list-group-item">
        <div className="title fw-semibold">
          {task.title} <span>{task.state}</span>
        </div>
        <div>Priority {task.priority}</div>
        <div>Est. time {task.estimatedTime}</div>
      </li>
    ));
  };

  return (
    <>
      <header>
        <div className="container py-2">
          <h1 className="fw-semibold">Task Manager</h1>
        </div>
      </header>

      <div className="container py-2">
        <h4 className="my-3 fw-semibold">
          Current Tasks ({filteredTasks(["backlog", "in_progress"]).length})
        </h4>

        <ul className="list-group list-group-flush">
          {createList(filteredTasks(["backlog", "in_progress"]))}
        </ul>

        <hr />

        <h4 className="my-3 fw-semibold">
          Completed Tasks ({filteredTasks(["completed"]).length})
        </h4>

        <ul className="list-group list-group-flush">
          {createList(filteredTasks(["completed"]))}
        </ul>
      </div>
    </>
  );
}

export default App;
