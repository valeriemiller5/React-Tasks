import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";

class TaskTable extends React.Component {

    // When component mounts, find data saved in session storage and render it in a table row
    // This currently works if there is only one task saved in the session storage.
    // Once multiple tasks are saved in the state array, then .map() will sort through the array and print each task on its own line
    componentDidMount() {
        if (window.sessionStorage.getItem("task") === null) {
            console.log("create a task to start a new row.");
        } else {
            const table = document.getElementById("myTable");
            let row = table.insertRow(-1);
            row.classList.add("stripes");
            let newTask = row.insertCell(0);
            let newPriority = row.insertCell(1);
            const button = "<button class='btn btn-warning'>Edit</button>" + "<button id='delete' class='btn btn-danger'>Delete</button>";
            newTask.innerHTML = window.sessionStorage.getItem("task");
            newPriority.innerHTML = window.sessionStorage.getItem("priority");
            newPriority.innerHTML += button;
            document.addEventListener("click", function (e) {
                if (e.target && e.target.id === "delete") {
                    window.sessionStorage.removeItem("task");
                    window.sessionStorage.removeItem("priority");
                    document.getElementById("myTable").deleteRow(e.target.id);
                }
            });
        };
    };

    //This only works on the hard-coded test rows in the table.  
    handleDelete = (e) => {
        window.sessionStorage.removeItem("task");
        window.sessionStorage.removeItem("priority");
        document.getElementById("myTable").deleteRow(e.target);
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
                            <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    };
};

export default TaskTable;

