import React from 'react';
import { MDBFooter, MDBContainer } from "mdbreact";


function Footer() {
    return (
        <MDBFooter color="black">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} KV67: <a href="/"> BRSV.COM </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    )
}

export default Footer