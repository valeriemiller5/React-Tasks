import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);

export default Container;