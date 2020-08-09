import React from "react";

const Task = ({ task }) => {
    if(task.length === 0 ) return null 
  return (
      <div className="bg-secondary p-3 mb-2 ">
        <p>Name: {task.name}</p>
        <p>Description: {task.description}</p>
        <p>Date: {task.date}</p>
      </div>
  );
};

export default Task;
