import React from 'react';
import '../../Style/Main.css';
import Footer from "../Footer/Footer";

export default function Contact (){

    return (
        <>
            <div>
                <div className="container-login">
                    <div className="header-title">
                        <nav>
                            <h1 className="contactform">Contactform</h1>
                        </nav>
                    </div>
                </div>

                <div className="container-login">
                    {/*<div className="card card-container">*/}
                    <div className="header-title">
                        {/*<div className='container'>*/}
                        <div style={{ marginTop: '10%' }}>
                            <form>
                                <div className='form-group'>
                                    <label>Your Name</label>
                                    <input name='name' type='text' className='form-control'     placeholder='Enter Your Name' />
                                </div>
                                <div className='form-group'>
                                    <label>Email address</label>
                                    <input name='email' type='email' className='form-control' placeholder='Enter Your Email' />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>

                                    <textarea name="message" className="form-control"    placeholder="Enter Your Message"></textarea>
                                </div>
                                <button type='submit' className='btn btn-primary'>
                                    Send Email
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-topic">
            </div>
            <Footer/>
        </>
    )
}
