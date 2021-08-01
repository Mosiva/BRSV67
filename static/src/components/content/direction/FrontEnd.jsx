import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function FrontEndDirection() {
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
                    <Modal.Title>Front End</Modal.Title>
                </Modal.Header>
                <Modal.Body>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques
                    used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.</Modal.Body>
               
                <Modal.Body>To read full article click on <a href="https://frontendmasters.com/books/front-end-handbook/2018/what-is-a-FD.html" target="_blank"> What Is a Front-End Developer?</a>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Footer></Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default FrontEndDirection