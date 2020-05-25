import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Table from "./Components/Table/Table";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer/Footer"

class App extends React.Component {

  render() {
    return (
      <>
        <Container>
          <Navbar />
          <Table />
        </Container>
        <Footer />
      </>
    )
  };
};

export default App;