import React,{ useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Task from './components/Task';

function App() {
  //state for all the task
  const [tasks, setTasks] =useState([]) 

  //take a task & add to the state of Tasks
  const addTask = task =>{
    setTasks([
      ...tasks,
      task
    ])
  }
  const title = tasks.length === 0 ? "Add task to start" : "List of tasks";

  return (

   <>
     <Header
      title="Todo list React"
    />
    <div className="container mt-4">
      <div className="row pt-3">
        <div className="col-md-6">
           <Form
            addTask={addTask}
           />
        </div>
        <div className="col-md-6">
        <h1 className="text-center mt-3">{title}</h1>
        <div className="container pt-3">
          {tasks.map(task=>
            <Task
              task={task}
              key={task.id}
            />
          )}
          </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default App;
