import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import TaskTable from './Components/Table/Table';
import { Container } from './Components/Grid/Container';

function App() {
  
  return (
    <Container>
      <Navbar />
      <TaskTable />
    </Container>
  );
}

export default App;