import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Task from "./components/Task";

function App() {
  //get tasks of localStorage
  let taskslS = JSON.parse(localStorage.getItem("list"));
  if (taskslS === null) {
    taskslS = [];
  }

  //state for all the task
  const [tasks, setTasks] = useState(taskslS);

  //save the tasks in localStorage

  useEffect(() => {
    if (taskslS) {
      localStorage.setItem("list", JSON.stringify(tasks));
    } else {
      localStorage.setItem("list", JSON.stringify([]));
    }
  }, [tasks, taskslS]);

  //take a task & add to the state of Tasks
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  //delete a task
  const deleteTask = (id) => {
    const taskDelete = tasks.filter((task) => task.id !== id);
    setTasks(taskDelete);
  };
  //show a title conditional
  const title = tasks.length === 0 ? "Add task to start" : "List of tasks";

  return (
    <>
      <Header title="Task's App" />
      <div className="container mt-4">
        <div className="row pt-3">
          <div className="col-md-6">
            <Form addTask={addTask} />
          </div>
          <div className="col-md-6">
            <h1 className="text-center mt-3" style={{textTransform:'uppercase', fontSize:'1.5em'}}>{title}</h1>
            <div className="container pt-3">
              {tasks.map((task) => (
                <Task task={task} key={task.id} deleteTask={deleteTask} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
