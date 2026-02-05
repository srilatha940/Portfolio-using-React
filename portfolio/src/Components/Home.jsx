import React from "react";
import "./Home.css";
import profile from "../assets/profile.avif";
import cv from "../assets/Neelam_Srilatha_CV.pdf";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="logo">Portfolio</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HOME */}
      <section className="home" id="home">
        <div className="home-text">
          <h4>Hello, It’s Me</h4>
          <h1>Neelam <span>Srilatha</span></h1>
          <h3>Full Stack Developer</h3>

          <p>
            I am a passionate Full Stack Developer with a strong foundation in Python, SQL, HTML, CSS, JavaScript, and React.
            I enjoy building responsive, visually appealing, and user-friendly web applications that deliver
            great user experiences. With a keen eye for detail and a love for clean design, I focus on writing
            structured, maintainable, and efficient code.
          </p>

          <div className="social-icons">
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
              href="https://www.instagram.com/YOUR-INSTAGRAM-USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a href="mailto:m.ramesh04172@gmail.com">
              <FaEnvelope />
            </a>
          </div>


          <a href={cv} download className="btn">
            Download CV
          </a>
        </div>

        <div className="home-img">
          <img src={profile} alt="Neelam Srilatha" />
        </div>
      </section>

    </>
  );
};

export default Home;
