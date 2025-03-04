import { useState } from "react";
import emailjs from "@emailjs/browser";
import  { useRef } from 'react';
import {motion} from 'framer-motion'


const ContactForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({ name: "", email: "",subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_o4awvd4", "template_10nuy59", formData, "UYFQewZIK5uFwapGq")
      .then(() => alert("Message sent!"))
      .catch((error) => console.error("Error sending message:", error));
      e.target.reset();
  };

  return (
    
    <div className="email">
      <h2 className="email-me">Send Email</h2>
      <form  ref={form} onSubmit={handleSubmit} className="form">

      <label >Name:<input type="text" name="name" placeholder="Your Name"  onChange={handleChange} className="form-input"/>
      </label><br />

      <label >Email:
      <input type="email" name="email" placeholder="Your Email"  onChange={handleChange} className="form-input" />
      </label><br />

      <label >Subject:
      <input type="text" name="subject" placeholder="Enter Subject"  onChange={handleChange} className="form-input"/>
      </label><br />

      <label >Message:
      <textarea  className="form-text" name="message" placeholder="Your Message"  onChange={handleChange} />
      </label>  <br />
        <motion.button 
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95,rotate:"2.5deg"}}
        className="btn" type="submit" >
        Submit
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
