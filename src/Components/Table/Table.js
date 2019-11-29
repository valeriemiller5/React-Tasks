import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";

class TaskTable extends React.Component {

    // When component mounts, find data saved in session storage and render it in a table row
    componentDidMount() {
        const table = document.getElementById("myTable");
        let row = table.insertRow(-1);
        row.classList.add("stripes");
        let newTask = row.insertCell(0);
        let newPriority = row.insertCell(1);
        const button = "<button class='btn btn-warning'>Edit</button>" +  
        "<button class='btn btn-danger'>Delete</button>";
        newTask.innerHTML = window.sessionStorage.getItem("task");
        newPriority.innerHTML = window.sessionStorage.getItem("priority");
        newPriority.innerHTML += button;
    };

    handleDelete() {
        window.sessionStorage.removeItem("task");
        window.sessionStorage.removeItem("priority");
    };

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody id="myTable">
                    <tr className="stripes">
                        <td>Example: Walk the dog</td>
                        <td>
                            High
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr className="stripes">
                        <td>Example: Feed the dog</td>
                        <td>
                            High
                            <button className="btn btn-warning edit">Edit</button>
                            <button className="btn btn-danger delete" onClick={this.handleDelete}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    };
};

export default TaskTable;

