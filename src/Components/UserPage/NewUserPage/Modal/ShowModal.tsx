import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import './ShowModal.scss'

  function App(props: any) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" id="add-user-btn" onClick={() => setModalShow(true)}>
            Add User
        </Button>
  
        <MyVerticallyCenteredModal
          {...props}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default App;