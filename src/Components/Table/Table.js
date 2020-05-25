import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";
import Row from "./Row";

class Table extends React.Component {
    state = {
        tasks: Object.keys(localStorage)
    }

    handleEdit = (e) => {

    }

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
                    {this.state.tasks.map(task => (
                        <Row
                            key={task + 1}
                            task={task}
                            priority={localStorage.getItem(task)}
                            handleDelete={() => {localStorage.removeItem(task); window.location.reload()}}
                        />  
                    ))}
                </tbody>
            </table>
        )
    };
};

export default Table;

