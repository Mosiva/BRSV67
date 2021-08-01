import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Col, Button } from 'react-bootstrap';


function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('brsv_service', 'contact_form', e.target, 'user_vCpY4Np0oCQgl7jxezsd0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <Form onSubmit={sendEmail}>
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
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" placeholder="Leave a comment here for BRSV" name="message" />
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
    );
}

export default ContactUs;