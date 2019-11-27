import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = props => (
    <form className="search">
        <div className="form-group">
            <label for="taskInput">Please submit a task:</label>
            <input type="input" className="form-control" id="enterTask" aria-describedby="enterTask" placeholder="task discription" />
        </div>
        <div class="form-group">
            <label for="prioritySelect">What is the priority of this task?</label>
            <select class="form-control" id="selectPriority">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
        </div>
    </form>

)

export default Form;