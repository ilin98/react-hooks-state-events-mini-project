import React from "react";
import Task from "./Task.js";

function TaskList({ tasks, handleDeleteButton }) {

  const categoryArray = tasks.map((task, index) => <Task handleDeleteButton={handleDeleteButton}
  key={index} text={task.text} category={task.category}></Task>)

  return (
    <div className="tasks">
      {categoryArray}
    </div>
  );
}

export default TaskList;
