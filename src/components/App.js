import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { getNodeText } from "@testing-library/react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleDeleteButton(e){
    setTasks(tasks.filter(task => {
      return task.text !== e.target.previousSibling.innerText
    }))
  }

  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value)
  }

  const tasksToDisplay = tasks.filter(task => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory
  })

  const searchedTasksToDisplay = tasksToDisplay.filter(task => {
    return task.text.includes(search)
  })

  function addTask(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm onTaskFormSubmit={addTask}/>
      <TaskList handleDeleteButton={handleDeleteButton} tasks={searchedTasksToDisplay} category={CATEGORIES}/>
    </div>
  );
}

export default App;
