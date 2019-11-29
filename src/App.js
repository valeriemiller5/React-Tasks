import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import TaskTable from "./Components/Table/Table";
import Container from "./Components/Container/Container";

class App extends React.Component {

    render() {
      return (
        <Container>
          <Navbar />
          <TaskTable />
        </Container>
      )
    };
};

export default App;