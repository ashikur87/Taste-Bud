import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const [emailStatus, setEmailStatus] = useState(false)
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_wp7wi5i', 'template_5218y3e', e.target, 'user_XNluT6BeDPzFvzW8zXkKh')
            .then((result) => {
                console.log(result);
                setEmailStatus(true);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className='pb-5'>
            {/* <h1 className='text-center pt-5'>Contact Us</h1> */}
            <div className='row pt-5'>
                <div className='col-md-4'>
                    <h1 className='text-center'>BOOK A TABLE</h1>
                <form id="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <label>Name</label><br></br>
                        <input type="text" class="form-control" name="name" required /><br></br>
                        <label>Email</label><br></br>
                        <input type="email" class="form-control" name="email" required /><br></br>
                        <label>Message</label><br></br>
                        <textarea name="message" class="form-control" required></textarea><br></br>
                        <input type="submit" value="Send" class="btn send-button" /><br></br>
                        {emailStatus && <p style={{color:'green'}}>Your mail has sent successfully</p>} 
                    </form>
                </div>
                <div className='col-md-4 food-image'>
                    <img style={{height:'400px'}} src="https://i.ibb.co/TgNgxMJ/pexels-cottonbro-4253320.jpg" alt="" />
                </div>
                <div className='col-md-4 text-center'>
                <h1 className='pt-5'>Contacts</h1>
                    <div>        
                    <FontAwesomeIcon style={{fontSize:'30px'}} icon={faPhoneAlt} />
                    <p>+8801575027971</p>
                    </div>
                    <div>
                    <FontAwesomeIcon style={{fontSize:'30px'}} icon={faEnvelope} />
                    <p>mahmudulrana9@gmail.com</p>
                    </div>
                    <h1>Working Hours</h1>
                    <FontAwesomeIcon style={{fontSize:'30px'}} icon={faClock} />
                    <p>Saturday-Sunday : 10:00-22:00</p>
                </div>          
        </div>
        </div>
    );
};

export default Contact;