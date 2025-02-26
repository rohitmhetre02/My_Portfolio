import { useState } from "react";
import axios from "axios";
import './Contact.css';
import LinkedIn from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import WhatsApp from "../../assets/whatsapp.png";
import Gmail from "../../assets/gmail.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    place: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("https://rohitbackend-6yl9.onrender.com/send-email", formData);
      setStatus(response.data.message);
      setFormData({ name: "", email: "", number: "", place: "", message: "" }); 
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <div className="info">
        <div className="right">
          <h3>Contact Info</h3>
          <p className="connect">
            Looking for professional web development services? Contact me now for tailored solutions that fit your vision and budget.
          </p>
          <div className="details">
            <p><i className="fa-solid fa-location-dot"></i> Pune, India</p>
            <p><i className="fa-solid fa-phone"></i> +91 9370949370</p>
            <p><i className="fa-solid fa-envelope"></i> rohitmhetre2004@gmail.com</p>
          </div>
          <div className="social-links">
            <h4>Touch Me</h4>
            <a href="https://www.linkedin.com/in/rohit-mhetre02/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn" /></a>
            <a href="https://www.instagram.com/mr_roya_002/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" /></a>
            <a href="https://wa.me/9370949370?text=Hello%20Rohit" target="_blank" rel="noopener noreferrer"><img src={WhatsApp} alt="WhatsApp" /></a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMpdKgHcJQzmbzJHDJmCxKXzJLKVxpHbMmDRxWQrMkPLsJhbPGHDtwDPJRfMlKQbhXZHrFL"><img src={Gmail} alt="Gmail" /></a>
          </div>
        </div>
        <div className="left">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your name.." value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your email.." value={formData.email} onChange={handleChange} required />
            <input type="number" name="number" placeholder="Your mobile.." value={formData.number} onChange={handleChange} required />
            <input type="text" name="place" placeholder="Your place.." value={formData.place} onChange={handleChange} required />
            <textarea name="message" placeholder="Type your message here.." value={formData.message} onChange={handleChange} required />
            <button type="submit">Send Message</button>
          </form>
          <p className="status">{status}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
