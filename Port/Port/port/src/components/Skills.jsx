import React, { useState } from 'react';
import Navbar from './Navbar';
import './Skills.css';

const Skills = () => {
  const [activeCardIndex, setActiveCardIndex] = useState({
    frontend: 0,
    backend: 0,
    database: 0,
    devops: 0,
    programming: 0
  });

  const skillCategories = [
    {
      id: 'frontend',
      icon: '🖥️',
      title: 'Frontend Development',
      color: 'blue',
      imageUrl: '', // Add your image/gif URL here later
      skills: [
        { name: 'React.js', icon: '⚛️', level: 'Advanced', description: '' },
        { name: 'HTML', icon: '📄', level: 'Expert', description: '' },
        { name: 'CSS', icon: '🎨', level: 'Advanced', description: '' },
        { name: 'JavaScript', icon: '💛', level: 'Advanced', description: '' },
        { name: 'Bootstrap', icon: '🅱️', level: 'Intermediate', description: '' },
        { name: 'Tailwind CSS', icon: '💨', level: 'Advanced', description: '' }
      ]
    },
    {
      id: 'backend',
      icon: '⚙️',
      title: 'Backend Development',
      color: 'green',
      imageUrl: '', // Add your image/gif URL here later
      skills: [
        { name: 'Node.js', icon: '🟢', level: 'Advanced', description: '' },
        { name: 'Express.js', icon: '🚂', level: 'Advanced', description: '' },
        { name: 'C#', icon: '🔷', level: 'Intermediate', description: '' },
        { name: 'SQL', icon: '🗄️', level: 'Intermediate', description: '' }
      ]
    },
    {
      id: 'database',
      icon: '🗄️',
      title: 'Database & Cloud',
      color: 'purple',
      imageUrl: '', // Add your image/gif URL here later
      skills: [
        { name: 'MongoDB', icon: '🍃', level: 'Advanced', description: '' },
        { name: 'Firebase', icon: '🔥', level: 'Intermediate', description: '' }
      ]
    },
    {
      id: 'devops',
      icon: '☁️',
      title: 'DevOps & Deployment',
      color: 'orange',
      imageUrl: '', // Add your image/gif URL here later
      skills: [
        { name: 'Vercel', icon: '▲', level: 'Intermediate', description: '' },
        { name: 'Netlify', icon: '🌐', level: 'Intermediate', description: '' }
      ]
    },
    {
      id: 'programming',
      icon: '🤖',
      title: 'Programming & Data',
      color: 'red',
      imageUrl: '', // Add your image/gif URL here later
      skills: [
        { name: 'Python', icon: '🐍', level: 'Advanced', description: '' },
        { name: 'Java', icon: '☕', level: 'Intermediate', description: '' },
        { name: 'Machine Learning', icon: '🧠', level: 'Beginner', description: '' }
      ]
    }
  ];

  const handleCardClick = (categoryId, e) => {
    e.stopPropagation(); // Prevent event bubbling
    setActiveCardIndex((prev) => ({
      ...prev,
      [categoryId]: (prev[categoryId] + 1) % skillCategories.find(cat => cat.id === categoryId).skills.length
    }));
  };

 const getCardPosition = (index, activeIndex, totalCards) => {
  const w = typeof window !== "undefined" ? window.innerWidth : 1200;

  // smaller offsets on small screens
  const step = w <= 480 ? 6 : w <= 768 ? 8 : 12;
  const scaleStep = w <= 480 ? 0.03 : w <= 768 ? 0.035 : 0.04;
  const fadeStep = 0.14;

  const offset = (index - activeIndex + totalCards) % totalCards;
  return {
    zIndex: totalCards - offset,
    transform: `translateX(${offset * step}px) translateY(${offset * step}px) scale(${1 - offset * scaleStep})`,
    opacity: Math.max(0.2, 1 - offset * fadeStep)
  };
};


  return (
    <div className="skills-page">
      <Navbar />
      
      <div className="skills-content">
        <div className="skills-header">
          <h1 className="skills-title">Skills</h1>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div key={category.id} className={`category-section section-${category.color}`}>
              {/* Left Side - Image/GIF Placeholder + Title */}
              <div className="category-info">
                <div className="category-media">
                  {category.imageUrl ? (
                    <img src={category.imageUrl} alt={category.title} className="category-image" />
                  ) : (
                    <div className="category-placeholder">
                      <div className="category-icon">{category.icon}</div>
                    </div>
                  )}
                </div>
                <h2 className="category-title">{category.title}</h2>
              </div>

              {/* Right Side - Stacked Cards */}
              <div className="cards-stack-wrapper">
                <div className="cards-stack">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`skills-card card-${category.color}`}
                      style={getCardPosition(index, activeCardIndex[category.id], category.skills.length)}
                      onClick={(e) => handleCardClick(category.id, e)}
                    >
                      <div className="card-counter">
                        {activeCardIndex[category.id] + 1} / {category.skills.length}
                      </div>
                      <div className="skill-icon">{skill.icon}</div>
                      <h3 className="skill-name">{skill.name}</h3>
                      {skill.description && (
                        <p className="skill-description">{skill.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
