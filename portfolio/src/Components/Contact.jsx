import React, { useState } from "react";
import "./Contact.css";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h3>Let's Work Together</h3>

          <p>
            I’m passionate about web development and constantly expanding my
            skills to deliver creative, functional, and efficient digital
            experiences. With strong knowledge of HTML, CSS, JavaScript, React,
            and hands-on project experience, I love turning ideas into reality.
            Let’s collaborate and build something impactful together.
          </p>

          <div className="contact-info">
            <p>📧 neelam.srilatha341@gmail.com</p>
            <p>📞 +91 93466XXXXX</p>
          </div>

          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/srilatha-neelam-5749332b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/srilatha940"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/your-instagram-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Your Email" required />
            <input type="tel" placeholder="Enter Your Contact" required />
            <textarea placeholder="Enter Your Message" rows="5"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <FaCheckCircle className="popup-icon" />
            <h3>Form submitted successfully!</h3>
            <p>
              Thank you for reaching out. <br />
              We’ll get back to you soon.
            </p>
            <button onClick={() => setShowPopup(false)}>
              <FaArrowLeft /> Go Back
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Contact;
