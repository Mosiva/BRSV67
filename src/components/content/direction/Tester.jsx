import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function TesterDirection() {
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
                    <Modal.Title>Tester</Modal.Title>
                </Modal.Header>
                <Modal.Body>Website testers are primarily responsible for testing and monitoring websites and web applications on multiple desktops, laptops, and mobile devices by applying quality-assurance methods. They must be detail-oriented, possess programming skills, and have a commitment to accuracy. Because they are tasked with increasing user satisfaction, they must ensure that the final product meets client expectations. 
                    Website testers may work on limited-time projects as a contractor, or they may find full-time permanent work with an employer.</Modal.Body>
                
                <Modal.Body>To read full article click on <a href="https://www.jobhero.com/job-description/examples/web-development/web-tester#:~:text=Website%20testers%20are%20primarily%20responsible,have%20a%20commitment%20to%20accuracy." target="_blank"> What is Tester?</a>
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
export default TesterDirection