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
      period: "June 2023 - Oct 2026",
      description: "Founding engineer at an early-stage startup for 3+ years, shipping or contributing to five products and building production web apps end to end — React frontends, Node.js/Express APIs, PostgreSQL, payments, job queues, monitoring, and Solidity smart contracts.",
      achievements: [
        "Shipped or contributed to five products, owning architecture decisions, code reviews, and deployments",
        "Built a full-stack e-commerce platform for GPU sales and hosting with Stripe card payments and crypto checkout backed by Solidity escrow with timeout refunds",
        "Built the customer-facing React/Node.js app for renting storage, plus a monitoring service that flagged stalled jobs and auto-retried failures with alternate providers",
        "Built the web app for a sister company's generative AI video product, including file uploads, scene controls, and a GPU job queue around a Stable Diffusion pipeline",
        "Built a self-serve creator dashboard and fan marketplace that turned each new celebrity launch from a manual engineering deployment into a few clicks",
        "Wrote ERC-20 fan token and ERC-1155 event pass factory contracts, with minting, redemption, and wallets",
        "Engineered Filecoin storage deal workflows end to end (CAR packaging, Piece CIDs, on-chain tracking through sealing) as a KYC-verified Filecoin Plus client",
        "Wrote GPU-compute blockchain contracts for provider registration, jobs, and payments, plus cross-chain settlement design"
      ],
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Stripe", "Job Queues", "Solidity", "Stable Diffusion", "Filecoin", "Docker"]
    },
    {
      company: "Best Buy",
      role: "Store Manager (promoted from Assistant Manager)",
      period: "Jan 2014 - Aug 2022",
      description: "Led large retail teams before transitioning into software engineering.",
      achievements: [
        "Led 80+ employees and a multi-million dollar P&L; #1 in market for NPS (FY21), top 100 of 1,000+ stores",
        "Designed and launched e-learning onboarding and training programs that shortened new-hire ramp time"
      ],
      technologies: ["Leadership", "P&L Management", "Training Development"]
    }
  ];

  const technicalSkills = {
    "Languages": ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML/CSS", "Solidity", "C++"],
    "Frontend": ["React", "Redux", "Next.js", "Vue", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "Flask", "REST APIs", "Microservices", "JWT Auth", "Job Queues", "Stripe Payments"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Sequelize", "SQLAlchemy", "Prisma"],
    "Cloud & DevOps": ["AWS", "Heroku", "Docker", "Git/GitHub", "CI/CD", "Agile/Scrum", "TDD", "Code Review"],
    "AI": ["Claude", "Cursor", "Stable Diffusion", "ControlNet", "FFmpeg video pipelines"],
    "Web3": ["Ethereum", "Web3.js", "ERC-20", "ERC-1155", "Smart Contract Escrow", "Filecoin", "IPFS"]
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Founding engineer shipping production web apps end to end
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
              <p className="education-institution">App Academy • Oct 2022 - Mar 2023</p>
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