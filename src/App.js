import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Table from "./Components/Table/Table";
import Container from "./Components/Container/Container";

class App extends React.Component {

    render() {
      return (
        <Container>
          <Navbar />
          <Table />
        </Container>
      )
    };
};

export default App;