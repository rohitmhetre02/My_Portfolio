import { useState } from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setStatus(" Message sent successfully!");
          setFormData({ from_name: "", reply_to: "", message: "" });
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error("Email send error:", error);
          setStatus(" Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="contact-section">
        <h2 className="contact-title">Get in <span>touch</span></h2>
        <div className="contact-container">

          <div className="contact-info">
            <h3><span>Let's</span> talk</h3>
            <p>I'm available for new projects. Drop a message anytime!</p>
            <p><i className="fa-solid fa-envelope"></i> rohitmhetre2004@gmail.com</p>
            <p><i className="fa-solid fa-phone"></i> +91 9370949370</p>
            <p><i className="fa-solid fa-location-dot"></i> Pune, India</p>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/rohit-mhetre02/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/rohitmhetre02" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://wa.me/919370949370" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              name="reply_to"
              placeholder="Enter your email"
              value={formData.reply_to}
              onChange={handleChange}
              required
            />

            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit now</button>
            <p className="status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
