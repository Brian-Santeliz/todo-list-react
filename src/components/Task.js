import React from "react";
import "./Task.css";
import PropTypes from 'prop-types'

const Task = ({ task, deleteTask }) => {
  if (task.length === 0) return null;
  const handleClick = ()=>{
    deleteTask(task.id)
  }
  return (
    <>
      <div className="bg text-white p-3 mb-3">
        <p className=" bold">
          Name: <span className="normal">{task.name}</span>
        </p>
        <p className=" bold">
          Description: <span className="normal">{task.description}</span>
        </p>
        <p className=" bold">
          Date: <span className="normal">{task.date}</span>
        </p>
        <button 
        className="btn btn-danger btn-block bold"
        onClick={()=>handleClick()}
        >DELETE &times;</button>
      </div>
    </>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default Task;
