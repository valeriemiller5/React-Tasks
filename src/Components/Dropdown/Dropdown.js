import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown } from "react-bootstrap";

const DropDown = (props) => (
    <DropdownButton variant="secondary" id="dropdown-basic-button" title="Sort">
        <Dropdown.Item href={props.sortHigh}>High to Low</Dropdown.Item>
        <Dropdown.Item href={props.sortLow}>Low to High</Dropdown.Item>
    </DropdownButton>
)

export default DropDown;


