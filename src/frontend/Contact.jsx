import React, { useRef } from "react";
import Footer from "./Footer";
import { SiGmail } from "react-icons/si";
import { FaDiscord, FaFacebook, FaGoogle, FaLinkedin, FaTelegram, FaTwitter, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_y24blyj", "template_v59lbzf", form.current, {
        publicKey: "KePPrQMuY5jskmxsE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent to Elicom successifuly!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("An error occured!, Please try again");
        }
      );
  };
  return (
    <div className="px-3 lg:px-10">
      <div className="grid place-items-center">
        <h2 className=" font-semi-bold lg:text-3xl text-lg  capitalize">My Contact Information</h2>

        <div className="w-full max-w-lg my-5">
          <form className="grid gap-3" ref={form} onSubmit={sendEmail}>
            <div className="form flex flex-col ">
              <label>Name</label>
              <input className="border-1 p-1.5 rounded-md" type="text" name="to_name" placeholder="Enter name" />
            </div>
            <div className="form flex flex-col ">
              <label>Email</label>
              <input className="border-1 p-1.5 rounded-md" type="email" name="from_name" placeholder="Enter email" />
            </div>
            <div className="form flex flex-col ">
              <label>Message</label>
              <textarea className="border-1 p-1.5 rounded-md" name="message" placeholder="Type your message here" />
            </div>
            <div className="flex items-center justify-center">
              <input
                className="bg-green-400 mt-2 py-1.5 rounded w-30 mx-25 cursor-pointer"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center gap-2">
          Reach me via my socials below, I'm available and open to any type of conversation aligned with my carrier
          
        </div>
        <div className="flex items-center gap-5 pt-5">
          <a href="elicomelijah330@gmail.com" target="_blank" className="">
            <Mail />
          </a>
          <a href="linkedin.com/in/mugisha-elijah-88a291239/" target="_blank" className="">
            <FaLinkedin />
          </a>
          <a href="https://x.com/ElicomElijah" target="_blank" className="flex items-center gap-2">
            <FaXTwitter />
          </a>
          <a href="#" target="_blank" className="flex items-center gap-2">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" className="flex items-center gap-2">
            <FaTelegram />
          </a>
          <a href="#" target="_blank" className="flex items-center gap-2">
            <FaDiscord />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
