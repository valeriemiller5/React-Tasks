import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../../Components/Form/Form';
import { Modal, Button } from 'react-bootstrap';

const AddTask = () => {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="info" onClick={handleShow}>
          Add Task
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default AddTask;