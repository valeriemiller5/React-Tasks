import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";
import Row from "./Row";

class Table extends React.Component {
    state = {
        tasks: Object.keys(localStorage)
    }

    render() {
        return (
            <table>
                <thead className="navbar-dark bg-dark mb-0 h5 text-white">
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
                            handleDelete={() => { localStorage.removeItem(task); window.location.reload() }}
                        />
                    ))}
                </tbody>
            </table>
        )
    };
};

export default Table;

