import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends React.Component {
    state = {
        newTask: "",
        newPriority: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let tasks = this.state.newTask;
        console.log(tasks);
        let priorities = this.state.newPriority;
        console.log(priorities);
        localStorage.setItem(tasks, priorities);
        window.location.reload();
    };

    render() {
        return (
            <div>
                <form className="search">
                    <div className="form-group">
                        <label htmlFor="taskInput">Please submit a task:</label>
                        <input
                            className="form-control"
                            value={this.state.newTask}
                            name="newTask"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Enter Task Here"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prioritySelect">What is the priority of this task?</label>
                        <select className="form-control" name="newPriority" onChange={this.handleInputChange} type="text">
                            <option>Select Priority</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <button className="btn btn-info" type="button" data-dismiss="modal" onClick={this.handleFormSubmit} style={{ marginRight: 5 + 'px' }}>Submit</button>
                    <button className="btn btn-secondary" type="button" onClick={() => window.location.reload()}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default Form;
