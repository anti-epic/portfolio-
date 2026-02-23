import React from 'react';
import './Experience.css';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Power Meta",
      role: "Full Stack Founding Software Engineer",
      period: "May 2023 - Oct 2025",
      description: "Architected and developed blockchain-based solutions with a focus on security, gas efficiency, and user experience integration.",
      achievements: [
        "Architected and deployed secure smart contracts for blockchain-based solutions, ensuring reliability and optimal gas efficiency",
        "Developed full-stack web applications using React, Node.js, and Express, implementing responsive front-end interfaces and robust APIs",
        "Integrated blockchain technology with traditional web applications, creating seamless decentralized user experiences",
        "Collaborated with cross-functional teams to deliver innovative Web3 solutions"
      ],
      technologies: ["Solidity", "Ethereum", "Web3", "React", "Node.js", "Express", "JavaScript", "Smart Contracts"]
    },
    {
      company: "Best Buy",
      role: "Store Manager (Promoted)",
      period: "Jan 2021 - Aug 2022",
      description: "Led high-performance retail operations while managing large teams and driving exceptional customer satisfaction metrics.",
      achievements: [
        "Achieved #1 Net Promoter Score (NPS) in the market for FY21, ranking top 100 company-wide among 1,000+ stores",
        "Led and managed team of 80 employees, focusing on performance development and coaching",
        "Implemented training programs leveraging e-learning platforms, improving retention and customer satisfaction",
        "Drove operational excellence through data-driven decision making and process optimization",
        "Managed multi-million dollar inventory and P&L responsibilities"
      ],
      technologies: ["Team Leadership", "Data Analysis", "Process Optimization", "P&L Management", "Training Development"]
    }
  ];

  const technicalSkills = {
    "Languages": ["JavaScript", "Python", "C++", "SQL", "Solidity", "HTML", "CSS"],
    "Frontend": ["React", "Vue", "Redux", "Bootstrap", "Responsive Design"],
    "Backend": ["Node.js", "Express", "Flask", "REST APIs", "Microservices Architecture"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL", "NoSQL", "Sequelize", "SQLAlchemy"],
    "Blockchain": ["Ethereum", "Web3", "Smart Contract Development", "Gas Optimization"],
    "DevOps & Tools": ["Docker", "Git", "GitHub", "CI/CD", "Kanban", "Agile", "Scrum", "TDD"]
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            From blockchain innovation to team leadership excellence
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="role-title">{exp.role}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>

                <div className="achievements">
                  <h5>Key Achievements:</h5>
                  <ul className="achievement-list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-section">
          <h3 className="skills-title">Technical Expertise</h3>
          <div className="skills-grid">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h4 className="category-title">{category}</h4>
                <div className="skill-tags">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h3 className="skills-title">Education & Training</h3>
          <div className="education-grid">
            <div className="education-card">
              <h4>Full Stack Software Development Bootcamp</h4>
              <p className="education-institution">App Academy • March 2023</p>
              <p className="education-description">
                Completed 1,000+ hour intensive program with &lt;3% acceptance rate.
                Built full-stack applications including RESTful APIs, authentication systems, and real-time features.
              </p>
              <div className="education-tech">
                <span>Python</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Redux</span>
                <span>Flask</span>
                <span>Express</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            <div className="education-card">
              <h4>Advanced Programming Certificate</h4>
              <p className="education-institution">Lone Star College</p>
              <p className="education-description">
                Coursework in data structures, algorithms, and object-oriented programming
                with focus on Python and C++ development.
              </p>
              <div className="education-tech">
                <span>Python</span>
                <span>C++</span>
                <span>Data Structures</span>
                <span>Algorithms</span>
                <span>OOP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;