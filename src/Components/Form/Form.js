import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends React.Component {
    state = {
        newTask: [],
        newPriority: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // Currently, this is only saving one task at a time.
    handleFormSubmit = event => {
        event.preventDefault();
        let tasks = this.state.newTask;
        let priorities = this.state.newPriority;
        // tasks.push(tasks);
        // priorities.push(priorities);
        console.log(tasks);
        console.log(priorities);
        // tasks.map(task => {
        //     console.log(task);
        // });
        // Verify that the new task and priority have been set to state
        console.log(`New Task: ${this.state.newTask}, Priority: ${this.state.newPriority}`);
        this.setState({
            newTask: tasks,
            newPriority: priorities
        });
        // push new tasks into newTask array and corresponding priority in to the newPriority array
        window.sessionStorage.setItem("task", this.state.newTask);
        window.sessionStorage.setItem("priority", this.state.newPriority);
        window.location.reload();
    };

    render() {
        return (
            <div>
                <form className="search">
                    <div className="form-group">
                        <label for="taskInput">Please submit a task:</label>
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
                        <label for="prioritySelect">What is the priority of this task?</label>
                        <select className="form-control" value={this.state.newPriority} name="newPriority" onChange={this.handleInputChange} type="text">
                            <option>Select Priority</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <button className="btn btn-info" type="submit" data-dismiss="modal" onClick={this.handleFormSubmit} style={{marginRight: 5 + 'px'}}>Submit</button>
                    <button className="btn btn-secondary" type="button" onClick={() => window.location.reload()}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default Form;
