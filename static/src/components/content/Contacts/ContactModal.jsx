import React, { useState } from 'react';
import { Modal, Button, Form, Col, } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('brsv_service', 'template_drW17DBc', e.target, 'user_vCpY4Np0oCQgl7jxezsd0')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }
  
  return (
    <>
      <Button variant="dark" onClick={handleShow} type="submit">
        Form
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please fill out the form</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form onSubmit={sendEmail}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="user_email" required />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="user_name" required />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridPhone">
            <Form.Label>Phone Number*</Form.Label>
            <Form.Control placeholder="Enter Number" type="number" name="user_number" required />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City*</Form.Label>
              <Form.Control type="text" placeholder="Enter city" name="user_city" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Description*</Form.Label>
              <Form.Control as="textarea" placeholder="Please write briefly about your offer" name="message" required/>
            </Form.Group>
          </Form.Row>
          <Button type="submit" variant="dark">Send </Button>
          <Form.Row>
            <Form.Group controlId="formGridCity">
              <Form.Label>After sending you will receive a message.</Form.Label>
              <Form.Label>Please check you're mail.</Form.Label>
            </Form.Group>

          </Form.Row>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactModal;