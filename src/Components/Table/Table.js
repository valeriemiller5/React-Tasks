import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css'

const TaskTable = props => (
    <table>
        <thead>
            <tr>
                <th>Task</th>
                <th>Priority</th>
            </tr>
        </thead>
        <tbody>
            <tr className="stripes">
                <td>Example: Walk the dog</td>
                <td>High</td>
            </tr>
            <tr className="stripes">
                <td>Example: Feed the dog</td>
                <td>High</td>
            </tr>
            {props.addLine}
        </tbody>
    </table>
)

export default TaskTable;

