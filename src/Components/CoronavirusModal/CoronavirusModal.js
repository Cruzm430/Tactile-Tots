import React from 'react';
import {Button, Modal} from 'react-bootstrap';

function CoronavirusModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Unable to continue
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Not accepting enrollments at this time</h4>
        <p>
          Due to the Coronavirus Pandemic, we are unable to enroll students at this time. Please contact us at tactiletots@gmail.com for more information!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CoronavirusModal;