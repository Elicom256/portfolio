import React, { useRef } from 'react'
import Footer from './Footer';
import { SiGmail } from 'react-icons/si';
import { FaDiscord, FaFacebook, FaGoogle, FaLinkedin, FaTelegram, FaTwitter, FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

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
                <input
                  className="bg-green-400 mt-2 py-1.5 rounded w-30 mx-25 cursor-pointer"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-2">
            Reach me via my socials below or give me a direct call via
            <span>+256 7814 90899</span>
          </div>
          <div className="flex items-center gap-5 pt-5">
            <a href="#" target="_blank" className="flex items-center gap-2">
                          <Mail /> <span>email</span>
            </a>
            <a href="#" target="_blank" className="flex items-center gap-2">
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
            <a href="#" target="_blank" className="flex items-center gap-2">
              <FaXTwitter/> <span>X Formely Twitter</span>
            </a>
            <a href="#" target="_blank" className="flex items-center gap-2">
              <FaFacebook/> <span>Facebook</span>
            </a>
            <a href="#" target="_blank" className="flex items-center gap-2">
              <FaTelegram/> <span>Telegram</span>
            </a>
            <a href="#" target="_blank" className="flex items-center gap-2">
              <FaDiscord/> <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
