import React from 'react';
import { Skill } from '../types';
import './Skills.css';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 'Advanced', category: 'Frontend' },
    { name: 'TypeScript', level: 'Advanced', category: 'Frontend' },
    { name: 'JavaScript', level: 'Expert', category: 'Frontend' },
    { name: 'Node.js', level: 'Intermediate', category: 'Backend' },
    { name: 'HTML/CSS', level: 'Expert', category: 'Frontend' },
    { name: 'Git', level: 'Advanced', category: 'DevOps' },
  ];

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-list">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <span className={`skill-level level-${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;