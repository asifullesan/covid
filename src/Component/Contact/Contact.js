import React from 'react';
import './Contact.css'
import { Container, Form, Nav } from 'react-bootstrap';
import NavSection from '../Shared/NavSection/NavSection';

const Contact = () => {
    return (
        <div>
            <section>
                <div className='contact'>
                    <NavSection />
                    <Container>
                        <section>
                            <div className='row d-flex justify-content-center'>
                                <div className='header-info col-md-9 col-12 pt-5'>
                                    <div className='d-flex justify-content-center'>

                                        <h1 style={{ color: 'white', fontSize: '3rem', marginTop: '3rem', fontFamily: '"Roboto",sans-serif', fontWeight: '700' }}>Contact with us</h1>

                                    </div>
                                </div>
                            </div>
                        </section>

                    </Container>
                </div>
                <section>
                    <div className='f-area'>
                        <Form>
                            <h2>Get In Touch With Us</h2>
                          <div className='flex'>
                                <Form.Control className='input' type="email" placeholder="Enter email" fullWidth />
                                <Form.Control  className='input2' type="password" placeholder="Password" />
                          </div>
                          <div className='flex'>
                                <Form.Control className='input' type="text" placeholder="Enter Phone number" fullWidth />
                                <Form.Control  className='input2' type="text" placeholder="Subject" />
                          </div>
                          <textarea className='textarea' placeholder="write your massage"/><br/>
                            <button className='logOb mt-3' variant="primary" type="submit">Submit</button>
                        </Form>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Contact;