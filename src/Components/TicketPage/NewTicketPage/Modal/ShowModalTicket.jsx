import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModalTicket from './MyVerticallyCenteredModalTicket';
import './ShowModalTicket.scss'

  function App(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" id="add-ticket-btn" onClick={() => setModalShow(true)}>
            Add Ticket
        </Button>
  
        <MyVerticallyCenteredModalTicket
          {...props}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default App;