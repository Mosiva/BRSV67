import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function GraphicDesignerDirection() {
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
                    <Modal.Title>Graphic Designer</Modal.Title>
                </Modal.Header>
                <Modal.Body>Graphic design is a craft where professionals create visual content to communicate messages.
                    By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users’
                    specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.
                </Modal.Body>
                <Modal.Body>To read full article click on <a href="https://www.interaction-design.org/literature/topics/graphic-design" target="_blank"> What is Graphic Design?</a>
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
export default GraphicDesignerDirection