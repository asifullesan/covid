import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import log1 from '../../Image/log1.png'
import { FcGoogle } from "react-icons/fc";
import log2 from '../../Image/llll.jpg'

const Register = () => {
    return (
        <div>
            <section>
                <div className='log-flex'>
                    <div className='log-w-img'>
                        <img className='l-w-i' src={log2} alt='' />
                    </div>
                    <div className='log-info'>
                        <div className='l-logo'>
                            <img className='lll-img' src={log1} alt='' />
                        </div>
                        <h4 className='log-h4'>Register Your Account</h4>
                        <div className='l-form'>
                            <from>
                                <h6 className='f-t mt-4'>Login</h6>
                                <input className='login-input' type='email' placeholder='Enter Email' />
                                <h6 className='f-t mt-4'>Password</h6>
                                <input className='login-input' type='password' placeholder='Enter password' />
                                <h6 className='f-t mt-4'>Re-type Password</h6>
                                <input className='login-input' type='password' placeholder='Enter password' />
                                <div className='d-flex mt-3 justify-content-between'>
                                   
                                </div>
                                <br />
                                <Nav.Link  as={Link} to='/home'><button className='log-btn'>Sign in</button></Nav.Link>
                                <div className='devider'></div>
                                <button className='log-btn-google'><FcGoogle className='g-icon' />Or sign in with Google</button>
                            </from>
                            <div className='d-flex justify-content-center'>
                                <p className='mt-3'>Already Registered?</p><Nav.Link as={Link} to='/' className='mt-2'>Sign in now</Nav.Link>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Register;