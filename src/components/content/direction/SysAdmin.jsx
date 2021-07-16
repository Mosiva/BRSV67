import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function SysAdmDirection() {
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
                    <Modal.Title>Systems Administrator</Modal.Title>
                </Modal.Header>
                <Modal.Body>Companies need skilled administrators with the experience and knowledge to manage their complex computer options. Systems administrators are IT directors who ensure enterprise networks are installed and updated right. 
                    Getting desktop and mobile computing devices synced to share workplace data electronically is their mission.</Modal.Body>
                
                <Modal.Body>To read full article click on <a href="https://www.computersciencedegreehub.com/faq/what-is-a-systems-administrator/" target="_blank"> What is a Systems Administrator?</a>
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
export default SysAdmDirection