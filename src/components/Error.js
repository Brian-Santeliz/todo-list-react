import React from "react";

const Error = ({message}) => (
  <div className="alert alert-danger p-3 text-center text-uppercase">
    {message}
  </div>
);

export default Error;
