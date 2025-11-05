import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';

const Home = () => {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState('Developer');
  const [backgroundGif, setBackgroundGif] = useState('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamUzdDg0aWVueG5icjc4N3k5YTY2cDh3dW8zdG4zdmg0cDRhMnJtaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2zbskZp2j8wniE/giphy.gif');

  useEffect(() => {
    // Background GIFs mapping
    const backgroundGifs = {
      'Recruiter': 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa25scWtlenVlaGpyY2IzZnp4MWh6c25jbnh6bHlieGY3MnNudDBudCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dgg13lkNAUa5eibLiY/giphy.gif',
      'Developer': 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamUzdDg0aWVueG5icjc4N3k5YTY2cDh3dW8zdG4zdmg0cDRhMnJtaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2zbskZp2j8wniE/giphy.gif',
      'Stalker': 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjhlbTg0cHJraGZmMHhoajd6MHN4enJjZDU2ZzdvYXkwOHFrNzN5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8FVcs24aSuQBpHPg4n/giphy.gif'
    };

    const profile = sessionStorage.getItem('selectedProfile');
    
    if (profile) {
      setSelectedProfile(profile);
      setBackgroundGif(backgroundGifs[profile] || backgroundGifs['Developer']);
    } else {
      setSelectedProfile('Developer');
      setBackgroundGif(backgroundGifs['Developer']);
    }
  }, []);

  return (
    <div className="home-page">
      {/* Navbar Component */}
      

      {/* Content Sections */}
      <div className="home-content">
        {/* Hero Section with Dynamic GIF */}
        <div 
          className="profile-page" 
          style={{ 
            backgroundImage: `url(${backgroundGif})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="profile-banner">
            <div className="banner-content">
              <h1 className="banner-headline" id="headline">Software Engineer</h1>
              <p className='banner-description'>
                I'm a dedicated Full Stack Developer skilled in building dynamic, scalable, and responsive web applications using ReactJS, Node.js, Express.js, MongoDB, SQL, and Python. With strong experience in frontend design, backend APIs, and cloud deployment, I love transforming ideas into clean, functional, and user-friendly products. Passionate about crafting seamless user experiences and writing maintainable code, I'm always eager to collaborate, learn, and bring innovative ideas to life.
              </p>
              <div className="banner-buttons">
                <button className="play-button" type="button">
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} style={{color: 'black'}}/>
                  </div>
                  <div className="spacer"></div>
                  <span className="label">Resume</span>
                </button>

                <button className="more-info-button" type="button">
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faLinkedin} style={{color: 'black'}} />
                  </div>
                  <div className="spacer"></div>
                  <span className="label">LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className='top-row'>
          <h2 className="row-title">Top pick's for you</h2>
          <div className='card-row'>
            <div className='skill-card' style={{ backgroundImage: `url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHBjMTlrdTZuZG84aWJ6ODhrb3FtbGJzczkyaDNjNDExZDNmMXhieSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i7EXEMgsP7oSk/giphy.gif)` }}>
              <div className="card-overlay">
                <h3>Skills</h3>
              </div>
            </div>
            <div className='skill-card' style={{ backgroundImage: `url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXliOXducTZpamFzeThzZHdqaWJwcWh5b3d4Y2dtNmU0anU1Y3AwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nG5HobNVGU126feQX3/giphy.gif)` }}>
              <div className="card-overlay">
                <h3>Projects</h3>
              </div>
            </div>
            <div className='skill-card' style={{ backgroundImage: `url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmM0bWk3cWIxZGwyOTZ3NjBsaWxuYWY2NzlwZ3dmOHQwNW84em5tcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8lNHBlBvNvlMZs6ZF3/giphy.gif)` }}>
              <div className="card-overlay">
                <h3>Certifications</h3>
              </div>
            </div>
            <div className='skill-card' style={{ backgroundImage: `url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmFmMXo5bTl3cGttcjJpN2dmMHozMWl5N3diY241N2RjbzZvcGozbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/guNXesWtLfqOfnWwmx/giphy.gif)` }}>
              <div className="card-overlay">
                <h3>Experience</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className='top-row'>
          <h2 className="row-title">Continue Watching</h2>
          <div className='card-row'>
            <div className='skill-card' style={{ backgroundImage: `url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmM0bWk3cWIxZGwyOTZ3NjBsaWxuYWY2NzlwZ3dmOHQwNW84em5tcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8lNHBlBvNvlMZs6ZF3/giphy.gif)` }}>
              <div className="card-overlay">
                <h3>Certifications</h3>
              </div>
            </div>
            <div className='skill-card' style={{ backgroundImage: `url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjVjN3E0M2V4YWVrdnlhMnZuZmZoNW9objl3OGlxN3o1NjV2cXVmMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o2V3s21kb9jPO/giphy.gif)` }}>
              <div className="card-overlay">
                <h3>Contact Me</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
