import React, {useState} from "react";

function NewTaskForm({ onTaskFormSubmit }) {

  const [taskCategory, setTaskCategory] = useState("Code")
  const [taskName, setTaskName] = useState("")

  function handleCatChange(e) {
    setTaskCategory(e.target.value)
  }

  function handleTaskChange(e) {
    setTaskName(e.target.value)
  }

  function taskFormSubmit(e){
    e.preventDefault();
    const newTask = {
      text: taskName,
      category: taskCategory,
    };
    onTaskFormSubmit(newTask)
    setTaskCategory("Code")
    setTaskName("")
  }

  return (
    <form className="new-task-form" onSubmit={taskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTaskChange} value={taskName}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCatChange} value={taskCategory}>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
