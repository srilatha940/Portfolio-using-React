import React from "react";
import "./Projects.css";
import gymImage from "../assets/gym.jfif"
import cart from "../assets/cart.jfif"
import profile from "../assets/portfolio.png"
const projectsData = [
  {
    title: "Portfolio Using React",
    image: profile,
    github: "https://portfolio-using-react-virid.vercel.app/",
  },
  
  {
    title: "Gym Tracker Membership Project",
    image: gymImage,
    github: "https://srilatha940.github.io/Gymtracker/frontend'/index.html",
  },
  {
    title: "Shopping Cart Using OOPS",
    image: cart,
    github: "https://github.com/srilatha940/Shopping_Cart",
  },
  
];
const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">
        Latest <span>Projects</span>
      </h2>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />

            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>Click button to view project</p>

              {/* 🔥 ONLY this button opens new tab */}
              <button
                type="button"
                className="project-btn"
                onClick={() =>
                  window.open(project.github, "_blank", "noopener,noreferrer")
                }
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
