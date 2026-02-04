import { useState } from "react";
import "./SkillsAccordion.css";
const skillData = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend & Database",
    skills: ["Python", "SQL"],
  },
  {
    title: "Professional Skills",
    skills: [
      "Communication",
      "Teamwork",
      "Creativity",
      "Problem Solving",
    ],
  },
];

export default function SkillsAccordion() {
  const [active, setActive] = useState(null);

  return (
    <section className="skills-accordion" id="skills">
      <h2>
        My <span>Skills</span>
      </h2>

      {skillData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button
            className="accordion-header"
            onClick={() => setActive(active === index ? null : index)}
          >
            {item.title}
            <span>{active === index ? "−" : "+"}</span>
          </button>

          <div className={`accordion-body ${active === index ? "open" : ""}`}>
            <div className="skills-tags">
              {item.skills.map((skill, i) => (
                <span className="skill-tag" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
