import React, { useState } from "react";
import Error from "./Error";
import { v4 } from 'uuid'
import PropTypes from 'prop-types'

const Form = ({addTask}) => {
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
    if (date.trim() === "" || description.trim() === "" || name.trim() === "") {
      setError(true);
      return;
    } else {
       //add id to each task 
       form.id = v4();
       addTask(form)
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
      {error && <Error message="All fields is required" /> }
      <div className="card-header text-center">
        <h4>Add task</h4>
      </div>
      <form className=" card card-body mb-3" onSubmit={ handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Typed you task name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            id="name"
            onChange={handleChange}
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
            onChange={ handleChange}
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
            onChange={handleChange}
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

Form.propTypes = {
  addTask:PropTypes.func.isRequired
}

export default Form;
