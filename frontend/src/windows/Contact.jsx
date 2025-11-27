import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      const serviceID = 'service_pglcapl';
      const templateID = 'template_g6rvmi1'; 
      const publicKey = 'vJyATfpi2tEI1o8oU'; 

      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: publicKey,
        })
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            alert("Message was sent!");

            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("Message was not sent, try again!");
          }
        );
    };
    
  return (
    <div className = "goal-container">
      <div className = "goal-card-style">
        <h2>Contact Us!</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlfor = "firstName"> First Name </label>
            <input 
              type = "text" 
              name = "First Name" 
              id = "firstName" 
              required>
            </input>
            <label htmlfor = "lastName"> Last Name </label>
            <input 
              type = "text" 
              name = "Last Name" 
              id = "lastName" 
              required>
            </input>
          </div>
          <div>
            <label htmlfor = "email"> Email </label>
            <input 
              type = "text" 
              name = "E-Mail" 
              id = "email" 
              required>
            </input>
            <label htmlfor = "phoneNumber"> Phone Number </label>
            <input 
              type = "text" 
              name = "Phone Number" 
              id = "phoneNumber">
            </input>
          <div>
            <label htmlfor = "message"> Message </label>
          </div>
          <div>
            <textarea name = "Message" id = "message" rows = "4" required></textarea>
          </div>
          </div>
          <div classname = "nav-button-alignment">
            <button type = "submit" className = "nav-buttons"> Send Message </button>
          </div>
        </form>
      </div>
    </div>
  );
}
