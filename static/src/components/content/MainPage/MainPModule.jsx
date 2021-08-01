import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function MainPModule() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Click it
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>BRSV</Modal.Title>
                </Modal.Header>
                <Modal.Body>BRSV is a non-commerce project developed by KV67. You can find solutions for your ideas in five directions (see direction) and contact the developer (see developer) to solve or develop them.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default MainPModule