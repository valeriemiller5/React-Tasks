import React from "react";
import AddTask from "../Modal/Modal";
import Dropdown from "../Dropdown/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends React.Component {
    
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark" style={{ marginBottom: 10 + 'px', marginTop: 10 + 'px' }}>
                <form className="form-inline">
                    <span className="navbar-brand mb-0 h1">Task Manager</span>
                    <AddTask />
                </form>
                <Dropdown />
            </nav>
        )
    };
};

export default Navbar;