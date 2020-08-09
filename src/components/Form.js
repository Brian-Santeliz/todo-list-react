import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    date: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submiting ");
  };
  const { date, description, name } = form;
  return (
    <>
      <div className="card-header text-center">
        <h4>Add task</h4>
      </div>
      <form className=" card card-body" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Type you task name:</label>
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
