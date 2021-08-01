import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import MainPageBackground from '../../../images/MainPageBackground.png';
import s from './MainPage.module.css'
import '../../../App.css';
import MainPModule from './MainPModule';

function MainPage() {
    return (
        <div className={s.content}>
            <Jumbotron style={{ backgroundImage: `url(${MainPageBackground})`, backgroundSize: 'auto' }}>
                <h1>Hello!</h1>
                <p>
                    Welcome to BRSV.
                </p>
                <p>
                    <MainPModule />
                </p>
            </Jumbotron>
        </div>
    )
}

export default MainPage;