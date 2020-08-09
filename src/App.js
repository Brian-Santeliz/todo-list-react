import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Task from './components/Task';

function App() {
  return (
   <>
     <Header
      title="Todo list React"
    />
    <div className="container mt-4">
      <div className="row pt-3">
        <div className="col-md-6">
           <Form/>
        </div>
        <div className="col-md-6">
          <Task/>
        </div>
      </div>
    </div>
   </>
  );
}

export default App;
