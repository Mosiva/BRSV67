import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import PromasskingModal from './ProMasskingModal';
import Massking from '../../../images/Massking.jpg';
import s from './ProMassking.module.css'
function ProMassking() {
    return (
        <div className={s.content}>
            <Card className="bg-dark text-white" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={Massking} />
                <Card.Body>
                    <Card.Title>MaskKing High-Pro Max</Card.Title>
                    <Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item >Capacity: 4.5 ml</ListGroup.Item>
                            <ListGroup.Item >Number of tightening: 1500</ListGroup.Item>
                            <ListGroup.Item >Battery capacity: 850 mAh</ListGroup.Item>
                            <ListGroup.Item >Corps material: Plastik (PCTG)</ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                    <PromasskingModal />
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProMassking;