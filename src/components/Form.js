import React, { useState } from "react";
import Error from "./Error";
import { v4 } from 'uuid'
const Form = () => {
  //state to the inputForm
  const [form, setForm] = useState({
    name: "",
    description: "",
    date: "",
  });

  //state to the error
  const [error, setError] = useState(false);

  //add state the value of inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const { date, description, name } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    ///Validate the form
    if (date === "" || description === "" || name === "") {
      setError(true);
      return;
    } else {
       //add id to each task 
       form.id = v4();
       console.log(form)
        //reset form
      setForm({
        name: "",
        description: "",
        date: "",
      });
      setError(false);
    }
  };
  return (
    <>
      {error ? <Error message="All fields is required" /> : null}
      <div className="card-header text-center">
        <h4>Add task</h4>
      </div>
      <form className=" card card-body" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Typed you task name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            id="name"
            onChange={(e) => handleChange(e)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Describe your task:</label>
          <textarea
            name="description"
            id="description"
            placeholder="Description..."
            className="form-control"
            onChange={(e) => handleChange(e)}
            value={description}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date to complete task:</label>
          <input
            type="date"
            name="date"
            id="date"
            className="form-control"
            onChange={(e) => handleChange(e)}
            value={date}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-info btn-block">SUBMIT</button>
        </div>
      </form>
    </>
  );
};

export default Form;
