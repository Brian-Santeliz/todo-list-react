import React from "react";
import "./Task.css";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const Task = ({ task, deleteTask }) => {
  if (task.length === 0) return null;
  const handleClick = () => {
    Swal.fire({
      title: "Delete!",
      text: `Are you sure delete task: ${task.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.value) {
        deleteTask(task.id);
        Swal.fire("Deleted!", "Task deleted successfully!", "success");
      }
    });
  };
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
        <button className="btn btn-danger btn-block bold" onClick={handleClick}>
          DELETE &times;
        </button>
      </div>
    </>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
