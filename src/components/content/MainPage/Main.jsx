import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import MainPageBackground from '../../../images/MainPageBackground.png';
import '../../../App.css';

function MainPage() {
    return (
   
            <Jumbotron style={{ backgroundImage: `url(${MainPageBackground})`, backgroundSize: 'auto' }}>
                <h1>Hello!</h1>
                <p>
                    Welcome to BRSV.
                </p>
                <p>
                    <Button variant="primary">Click me</Button>
                </p>
            </Jumbotron>
          
    )
}

export default MainPage;