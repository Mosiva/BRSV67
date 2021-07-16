import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import BackEndDirection from './Backend'
import BDdirection from '../../../images/BDdirection.png'
import FrontEndDirection from './FrontEnd'
import FRdirection from '../../../images/FRdirection.png'
import GraphicDesignerDirection from './GraphicDesigner'
import Ddirection from '../../../images/Ddirection.jpg'
import TesterDirection from './Tester'
import Tdirection from '../../../images/Tdirection.png'
import SysAdmDirection from './SysAdmin'
import SAdirection from '../../../images/SAdirection.jpg'

function Direction() {
    return (<div>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={Ddirection} />
                <Card.Body>
                    <Card.Title>Graphic Design</Card.Title>
                    <Card.Text>
                        Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers ...
                    </Card.Text>
                </Card.Body>
                <GraphicDesignerDirection />
            </Card>
            <Card>
                <Card.Img variant="top" src={Tdirection} />
                <Card.Body>
                    <Card.Title>Tester</Card.Title>
                    <Card.Text>
                        Website testers are primarily responsible for testing and monitoring websites and web applications
                        on multiple desktops, laptops ...
                    </Card.Text>
                </Card.Body>
                <TesterDirection />
            </Card>
            <Card>
                <Card.Img variant="top" src={FRdirection} />
                <Card.Body>
                    <Card.Title>Front End</Card.Title>
                    <Card.Text>
                        Front-end web development, also known as client-side development is the practice of producing HTML,
                        CSS and JavaScript for a website or Web Application so that ...
                    </Card.Text>
                </Card.Body>
                <FrontEndDirection />
            </Card>
            <Card>
                <Card.Img variant="top" src={BDdirection} />
                <Card.Body>
                    <Card.Title>Back End</Card.Title>
                    <Card.Text>
                        Back-end Development refers to the server-side development. It focuses on databases, scripting, website architecture.
                        It contains behind-the-scene activities ...
                    </Card.Text>
                </Card.Body>
                <BackEndDirection />
            </Card>
            <Card>
                <Card.Img variant="top" src={SAdirection} />
                <Card.Body>
                    <Card.Title>System administrator</Card.Title>
                    <Card.Text>
                        If you’ve ever considered a career in information technology, becoming a systems
                        administrator would be a great start  ...
                    </Card.Text>
                </Card.Body>
                <SysAdmDirection />
            </Card>
        </CardDeck>
        </div>
    )
}
export default Direction