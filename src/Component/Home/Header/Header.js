import React from 'react';
import './Header.css'
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavSection from '../../Shared/NavSection/NavSection'

const Header = () => {


const startStream = () => {

    const video = document.createElement("video");
    video.setAttribute("playsinline", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.style.width = "100%";
    video.style.height = "100%";

    const facingMode = "user";
    const constraints = {
        audio: false,
        video: {
            facingMode
        }

    };


    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        video.srcObject = stream;
    });

    document.body.appendChild(video);

}

    return (
        <div>
            <section>
                <div className='banner'>
                    <NavSection />
                    <Container>
                        <section>
                            <div className='row d-flex justify-content-center'>
                                <div className='header-info col-md-9 col-12 pt-5'>
                                    <div className='d-flex justify-content-center'>
                                        <Nav.Link as={Link} to='/streaming' >  <button onClick={startStream} className='banner-btn'>START STREAMING</button> </Nav.Link>
                                        <Nav.Link as={Link} to='/admin' className='a'>a</Nav.Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Container>
                </div>
            </section>
        </div>
    );
};

export default Header;