import React from 'react';
import './Login.css'
import { Nav } from 'react-bootstrap';
import log1 from '../../Image/log1.png'
import log2 from '../../Image/llll.jpg'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const Login = () => {
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
                        <h4 className='log-h4'>Nice to see you again</h4>
                        <div className='l-form'>
                            <from>
                                <h6 className='f-t mt-4'>Login</h6>
                                <input className='login-input' type='email' placeholder='Enter Email' />
                                <h6 className='f-t mt-4'>Password</h6>
                                <input className='login-input' type='password' placeholder='Enter password' />

                                <br />
                                <Nav.Link as={Link} to='/home' > <button className='log-btn mt-4'>Sign in</button></Nav.Link>
                                <div className='devider'></div>
                                <button className='log-btn-google'><FcGoogle className='g-icon' />Or sign in with Google</button>
                            </from>
                            <div className='d-flex justify-content-center'>
                                <p className='mt-3'>Dont have an account?</p><Nav.Link as={Link} to='/register' className='mt-2'>Sign up now</Nav.Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;