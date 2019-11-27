import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);