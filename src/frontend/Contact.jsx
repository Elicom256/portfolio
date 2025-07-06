import React, { useRef } from 'react'
import Footer from './Footer';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_y24blyj', 'template_v59lbzf', form.current, {
        publicKey: 'KePPrQMuY5jskmxsE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent to Elicom successifuly!")
        },
        (error) => {
            console.log('FAILED...', error.text);
            alert("An error occured!, Please try again")
        },
      );
  };
  return (
    <div className="flex justify-center my-10">
      <div>
          <h2 className="font-semi-bold text-3xl mb-4 capitalize">My Contact Information</h2>
          <div className="contact">
              <p>For easy connectivity, here is my contact information</p>
              <div className="direct my-5">
                  <form className="" ref={form} onSubmit={sendEmail}>
                      <div className="form flex flex-col w-80">
                      <label>Name</label>
                      <input className="border-1 p-1.5" type="text" name="to_name" placeholder="Enter name" />
                      <label>Email</label>
                      <input className="border-1 p-1.5" type="email" name="from_name" placeholder="Enter email" />
                      <label>Message</label>
                      <textarea className="border-1 p-1.5" name="message" placeholder="Type your message here" />
                      <input className="bg-green-400 mt-2 py-1.5 rounded w-30 mx-25 cursor-pointer" type="submit" value="Send" />
              </div>
      </form>
              </div>
              <div>Reach me via my socials below or give me a direct call via
                  <span>+256781490899</span></div>
              <div className="contacts">
                  <a href="#">email</a>
                  <a href="#">LinkedIn</a>
                  <a href="#">X</a>
                  <a href="#">FB</a>
                  <a href="#">Telegram</a>
                  <a href="#">Discord</a>
              </div>
        </div>
        </div>
    </div>
  )
}

export default Contact
