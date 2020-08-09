import React from "react";

const Header = ({ title }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary d-flex justify-content-center ">
        <h1 className="navbar-brand mb-0  font-bold">
            {title}
        </h1>
      </nav>
    </>
  );
};

export default Header;
