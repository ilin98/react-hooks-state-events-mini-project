import React from "react";

function Task( {text, category, key, handleDeleteButton} ) {

  return (
    <div className="task" key={key}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteButton}>X</button>
    </div>
  );
}

export default Task;
