import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";
import Button from "../Button/Button";

const Row = (props) => (
    <tr className="stripes">
        <td style={{width: 50+"%"}}>{props.task}</td>
        <td>
            {props.priority}
            <Button type="submit" className="btn btn-warning" onClick={props.handleEdit} buttonname="Edit" />
            <Button type="submit" className="btn btn-danger" onClick={(e) => props.handleDelete(e)} buttonname="Delete" />
        </td>
    </tr>
)

export default Row;