import React from 'react';
import { Project } from '../types';
import './Projects.css';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'lol.gg',
      description: 'A League of Legends stat-tracking site in the style of OP.GG. Search any summoner across 11 regions to view ranked stats, match history with rich KDA cards, kill participation %, multi-kill badges, and per-game scoreboards. Browse all champions with a filterable grid and drill into champion detail pages showing item win rates aggregated from real matches — broken out by game mode (Ranked, ARAM, Arena, URF, and more). ARAM pages display live buff/nerf modifiers pulled from Community Dragon.',
      technologies: ['Next.js 15', 'TypeScript', 'tRPC', 'PostgreSQL', 'Prisma', 'Redis', 'Tailwind CSS', 'Riot Games API', 'Vitest', 'Docker'],
      githubUrl: 'https://github.com/anti-epic/lol.gg',
      liveUrl: 'https://lol-gg-steel.vercel.app/'
    },
    {
      id: '2',
      title: 'AllAboutMovies',
      description: 'A full-stack movie browsing app powered by the TMDB API. Browse trending and discover feeds (daily or weekly), view detailed movie pages with banners, cast, trailers, genres, budget, and revenue data. Authenticated users can manage a personal watchlist and leave reviews. Includes real-time search, signup/login with full validation, and a demo account for quick access.',
      technologies: ['React', 'Redux', 'Express.js', 'Sequelize', 'PostgreSQL', 'JavaScript', 'CSS'],
      githubUrl: 'https://github.com/anti-epic/AllAboutMovies'
    },
    {
      id: '3',
      title: 'DeFi Lending Platform',
      description: 'Architected a decentralized finance platform with secure smart contracts for lending and borrowing. Implemented gas optimization techniques reducing transaction costs by 40% while maintaining security standards.',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Hardhat', 'OpenZeppelin'],
      githubUrl: 'https://github.com/chasedonahoe/defi-platform',
      liveUrl: 'https://defi-demo.powermeta.io'
    },
    {
      id: '4',
      title: 'Social Media Dashboard',
      description: 'Created a comprehensive social media management platform with multi-platform posting, analytics tracking, and content scheduling. Features include team collaboration and detailed performance metrics.',
      technologies: ['Vue.js', 'Python', 'Flask', 'PostgreSQL', 'Redis', 'Twitter API', 'Chart.js'],
      githubUrl: 'https://github.com/chasedonahoe/social-dashboard'
    },
    {
      id: '5',
      title: 'Real-Time Chat Application',
      description: 'Built a scalable chat application supporting thousands of concurrent users with features like file sharing, emoji reactions, and channel management. Optimized for performance and user experience.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'AWS S3', 'JWT'],
      githubUrl: 'https://github.com/chasedonahoe/chat-app',
      liveUrl: 'https://chat-demo.chasedonahoe.dev'
    },
    {
      id: '6',
      title: 'Weather Analytics Platform',
      description: 'Developed a weather data visualization platform with predictive analytics, historical data comparison, and API integration. Features interactive maps and customizable dashboards.',
      technologies: ['React', 'Python', 'FastAPI', 'D3.js', 'PostgreSQL', 'OpenWeather API'],
      githubUrl: 'https://github.com/chasedonahoe/weather-platform',
      liveUrl: 'https://weather-demo.chasedonahoe.dev'
    }
  ];

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="projects section section-alt">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Full Stack Project Portfolio</h2>
          <p className="section-subtitle">
            Modern web applications showcasing expertise across frontend, backend, and emerging technologies
          </p>
        </div>

        <div className="featured-project">
          <div className="featured-content">
            <div className="featured-info">
              <div className="project-badge">Featured Project</div>
              <h3 className="featured-title">{featuredProject.title}</h3>
              <p className="featured-description">{featuredProject.description}</p>

              <div className="featured-technologies">
                {featuredProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag-featured">{tech}</span>
                ))}
              </div>

              <div className="featured-links">
                {featuredProject.githubUrl && (
                  <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" fill="currentColor"/>
                    </svg>
                    View Code
                  </a>
                )}
                {featuredProject.liveUrl && (
                  <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <span>Live Demo</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <div className="featured-visual">
              <div className="project-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="mockup-content">
                  <div className="code-snippet">
                    <div className="code-line">
                      <span className="code-comment">// tRPC summoner lookup</span>
                    </div>
                    <div className="code-line">
                      <span className="code-keyword">const</span>
                      <span className="code-param"> summoner</span>
                      <span className="code-bracket"> =</span>
                    </div>
                    <div className="code-line">
                      <span className="code-keyword">  await</span>
                      <span className="code-method"> trpc.summoner</span>
                      <span className="code-bracket">.</span>
                      <span className="code-method">get</span>
                      <span className="code-bracket">(&#123;</span>
                    </div>
                    <div className="code-line">
                      <span className="code-param">    name</span>
                      <span className="code-bracket">:</span>
                      <span className="code-string"> "Faker"</span>
                      <span className="code-bracket">,</span>
                    </div>
                    <div className="code-line">
                      <span className="code-param">    region</span>
                      <span className="code-bracket">:</span>
                      <span className="code-string"> "KR"</span>
                      <span className="code-bracket">,</span>
                    </div>
                    <div className="code-line">
                      <span className="code-bracket">  &#125;);</span>
                    </div>
                    <div className="code-line">
                      <span className="code-comment">// cache hit via Redis</span>
                    </div>
                    <div className="code-line">
                      <span className="code-return">return</span>
                      <span className="code-param"> summoner</span>
                      <span className="code-bracket">.</span>
                      <span className="code-method">rankedStats</span>
                      <span className="code-bracket">;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="other-projects">
          <h3 className="other-projects-title">More Projects</h3>
          <div className="projects-grid">
            {otherProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h4 className="project-title">{project.title}</h4>
                  <div className="project-actions">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" fill="currentColor"/>
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;