import React, { useState } from 'react';
import { Modal, Button, Row, Col, Card, ListGroup} from 'react-bootstrap';
import HighPromax from '../../../images/HighPromax.jpg'
import ContactUs from '../Contacts/Contacts'

function PromasskingModal() {
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
                    <Modal.Title>Maskking High Pro Max 1500puffs Disposable with Led Light</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={HighPromax} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListGroup>
                                <ListGroup.Item action variant="light">
                                    Volume: 4.5ml
                                </ListGroup.Item>
                                <ListGroup.Item action variant="light">
                                    Battery capacity: 850mah Material: Aluminum alloy+PCTG
                                </ListGroup.Item>
                                <ListGroup.Item action variant="light">
                                    Nic: 5%</ListGroup.Item>
                                <ListGroup.Item variant="dark">
                                    BRSV can recharge the device to continue to use it (1 time)
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3> Contact us</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ContactUs />
                        </Col>
                    </Row>
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




export default PromasskingModal;


