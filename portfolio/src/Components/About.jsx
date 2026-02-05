import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>
          About <span>Me</span>
        </h2>

        <p>
          I am a passionate and highly focused Full Stack Developer with a strong
          foundation in modern web technologies. I am a fast learner and a quick
          grasping individual who can easily adapt to new tools, frameworks, and
          technologies.
        </p>

        <p>
          I have good knowledge of Python, HTML, CSS, JavaScript, React and SQL, I enjoy
          building responsive, user-friendly, and visually appealing web
          applications. I am confident in understanding requirements clearly
          and transforming ideas into efficient and scalable solutions.
        </p>

        <p>
          I am skilled at understanding complex concepts, learning new
          technologies quickly, and applying them effectively in real-world
          projects. With a strong problem-solving mindset and attention to
          detail, I always strive to deliver high-quality work.
        </p>

        <p className="about-highlight">
          I believe continuous learning, consistency, and dedication are the
          keys to becoming a successful developer, and I am always eager to
          enhance my skills and grow professionally.
        </p>
      </div>
    </section>
  );
};

export default About;
