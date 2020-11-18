import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';


function MyVerticallyCenteredModal(props: any) {
  
  const _handleKeyDown = (e: any) => e.key === 'Enter' && props.submitHandler(props.name);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="new-user-form">
              <input className='name-inp' onKeyDown={_handleKeyDown} type="text" placeholder="Username" value={props.name} onChange={(e) => props.setName(e.target.value)}/>
             <input className='add-user-button' type="submit" value="Submit" onClick={() => props.submitHandler(props.name)}/>
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="close-btn" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal;