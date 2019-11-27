import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import TaskTable from './Components/Table/Table';
import { Container } from './Components/Grid/Container';

class App extends React.Component {

    // componentDidMount() {
    //   window.sessionStorage.getItem("key");
    // }


    render() {
      return (
        <Container>
          <Navbar />
          <TaskTable />
        </Container>
      )
    }
}

export default App;