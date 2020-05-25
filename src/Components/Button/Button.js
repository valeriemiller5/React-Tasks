import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Button = (props) => (
    <button {...props} className={props.className || "btn btn-lg btn-secondary input-lg"}>
        {props.buttonname}
    </button>
)

export default Button;