import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function BackEndDirection() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Look more...
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Back End</Modal.Title>
                </Modal.Header>
                <Modal.Body>Back-end Development refers to the server-side development. It focuses on databases, scripting, website architecture. It contains behind-the-scene activities that occur when performing any action on a website. It can be an account login or making a purchase from an online store.
                    Code written by back-end developers helps browsers to communicate with database information.</Modal.Body>
                
                <Modal.Body>To read full article click on <a href="https://www.guru99.com/what-is-backend-developer.html#1" target="_blank"> What is Backend Development?</a>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default BackEndDirection