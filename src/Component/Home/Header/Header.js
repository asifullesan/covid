import React from 'react';
import './Header.css'
import { Carousel, Container, Nav } from 'react-bootstrap';
import img1 from '../../../Image/s-1.png'
import img2 from '../../../Image/s-2.png'
import img3 from '../../../Image/s-3.png'
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

                    <section>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <div className='d-flex justify-content-between container'>
                                    <div className='col-6 s-info'>
                                        <h4 style={{ textAlign: 'left' }}>Wear A Mask!</h4>
                                        <h1 style={{ textAlign: 'left', fontWeight: '700' }}>Save the World.</h1>
                                        <p style={{ textAlign: 'left' }}> COVID-19 Situation!
                                            The coronavirus, or COVID-19, is inciting panic for a number of reasons. It's a new virus, meaning no one has immunity.It is highly contagious, meaning it spreads fast. Its novelty means that scientists aren't completely sure as to how it behaves since they have very little history to go on.</p>
                                        <Nav.Link as={Link} to='/streaming' >  <button onClick={startStream} className='banner-btn'>START STREAMING</button> </Nav.Link>

                                    </div>
                                    <div>
                                        <img
                                            className="d-block w-100 s-i"
                                            src={img1}
                                            alt="First slide"
                                        />
                                    </div>
                                </div>

                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <div className='d-flex justify-content-between container'>
                                    <div className='col-6 s-info'>
                                        <h4 style={{ textAlign: 'left' }}>Get Vaccine!</h4>
                                        <h1 style={{ textAlign: 'left', fontWeight: '700' }}>Keep Safe your Life.</h1>
                                        <p style={{ textAlign: 'left' }}> COVID-19 Situation!
                                            The coronavirus, or COVID-19, is inciting panic for a number of reasons. It's a new virus, meaning no one has immunity.It is highly contagious, meaning it spreads fast. Its novelty means that scientists aren't completely sure as to how it behaves since they have very little history to go on.</p>
                                        <Nav.Link as={Link} to='/streaming' >  <button onClick={startStream} className='banner-btn'>START STREAMING</button> </Nav.Link>

                                    </div>
                                    <div>
                                        <img
                                            className="d-block w-100 s-i2"
                                            src={img2}
                                            alt="First slide"
                                        />
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <div className='d-flex justify-content-between container'>
                                    <div className='col-6 s-info'>
                                        <h4 style={{ textAlign: 'left' }}>Wash Your Hands!</h4>
                                        <h1 style={{ textAlign: 'left', fontWeight: '700' }}>Stay Safe.</h1>
                                        <p style={{ textAlign: 'left' }}> COVID-19 Situation!
                                            The coronavirus, or COVID-19, is inciting panic for a number of reasons. It's a new virus, meaning no one has immunity.It is highly contagious, meaning it spreads fast. Its novelty means that scientists aren't completely sure as to how it behaves since they have very little history to go on.</p>
                                        <Nav.Link as={Link} to='/streaming' >  <button onClick={startStream} className='banner-btn'>START STREAMING</button> </Nav.Link>

                                    </div>
                                    <div>
                                        <img
                                            className="d-block w-100 s-i2"
                                            src={img3}
                                            alt="First slide"
                                        />
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </section>

                </div>
            </section>
        </div>
    );
};

export default Header;








