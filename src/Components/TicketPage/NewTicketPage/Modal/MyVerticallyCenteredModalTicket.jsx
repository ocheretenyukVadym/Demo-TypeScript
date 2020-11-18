import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';



function MyVerticallyCenteredModalTicket(props) {

  const _handleKeyDown = e => e.key === 'Enter' && props.submitHandler(props.input);
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Ticket
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="new-ticket-form">
              <input className='title-inp' onKeyDown={_handleKeyDown} type="text" placeholder="Ticket" value={props.input} onChange={e => props.setInput(e.target.value)}/>
             <input className='add-ticket-button' type="submit" value="Submit" onClick={() => props.submitHandler(props.input)}/>
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="close-btn" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModalTicket;