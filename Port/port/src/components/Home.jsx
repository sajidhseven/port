import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState('Developer'); // Default profile
  const [profileImage, setProfileImage] = useState('');
  const [backgroundGif, setBackgroundGif] = useState('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamUzdDg0aWVueG5icjc4N3k5YTY2cDh3dW8zdG4zdmg0cDRhMnJtaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2zbskZp2j8wniE/giphy.gif'); // Default GIF
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Profile images mapping
    const profileImages = {
      'Recruiter': 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/f8bfb35d-17a3-4460-8211-7febc70c92b3.png',
      'Developer': 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/625c2a91-257e-4092-a247-af04dbc0fdcf.png',
      'Stalker': 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/89e74f18-69c9-48e1-9c34-1dd2dfe6e495.png'
    };

    // Background GIFs mapping
    const backgroundGifs = {
      'Recruiter': 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa25scWtlenVlaGpyY2IzZnp4MWh6c25jbnh6bHlieGY3MnNudDBudCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dgg13lkNAUa5eibLiY/giphy.gif',
      'Developer': 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamUzdDg0aWVueG5icjc4N3k5YTY2cDh3dW8zdG4zdmg0cDRhMnJtaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2zbskZp2j8wniE/giphy.gif',
      'Stalker': 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjhlbTg0cHJraGZmMHhoajd6MHN4enJjZDU2ZzdvYXkwOHFrNzN5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8FVcs24aSuQBpHPg4n/giphy.gif'
    };

    // Get selected profile from sessionStorage
    const profile = sessionStorage.getItem('selectedProfile');
    
    console.log('Selected Profile from sessionStorage:', profile); // Debug log

    if (profile) {
      setSelectedProfile(profile);
      setProfileImage(profileImages[profile] || profileImages['Developer']);
      setBackgroundGif(backgroundGifs[profile] || backgroundGifs['Developer']);
      
      console.log('Background GIF URL:', backgroundGifs[profile]); // Debug log
    } else {
      // Set default values if no profile selected
      setSelectedProfile('Developer');
      setProfileImage(profileImages['Developer']);
      setBackgroundGif(backgroundGifs['Developer']);
    }

    // Handle scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const goToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo/Name */}
          <div className="navbar-logo" onClick={goToHome}>
            <h1>MyName</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-menu">
            <li onClick={() => scrollToSection('professional')}>Professional</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('hire-me')}>Hire Me</li>
          </ul>

          {/* Profile Avatar */}
          <div className="navbar-profile" onClick={() => navigate('/profiles')}>
            <img src={profileImage} alt="Profile" className="navbar-avatar" />
            <span className="profile-name-nav">{selectedProfile}</span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li onClick={() => scrollToSection('professional')}>Professional</li>
              <li onClick={() => scrollToSection('skills')}>Skills</li>
              <li onClick={() => scrollToSection('projects')}>Projects</li>
              <li onClick={() => scrollToSection('hire-me')}>Hire Me</li>
            </ul>
          </div>
        )}
      </nav>

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

        {/* Professional Section */}
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
    <div className='skill-card' style={{ backgroundImage: `url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHBtNDlueGlpb3BqZ2F2cmQzcWJiM3BtOXRkd2M0cHNjNGN1anI4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gQJyPqc6E4xoc/giphy.gif)` }}>
      <div className="card-overlay">
        <h3>Music</h3>
      </div>
    </div>
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

        {/* Skills Section */}
        {/* <section id="skills" className="content-section">
          <h2>Skills</h2>
          <p>Your skills content goes here...</p>
        </section> */}

        {/* Projects Section */}
        {/* <section id="projects" className="content-section">
          <h2>Projects</h2>
          <p>Your projects content goes here...</p>
        </section> */}

        {/* Hire Me Section */}
        {/* <section id="hire-me" className="content-section">
          <h2>Hire Me</h2>
          <p>Your hire me content goes here...</p>
        </section> */}
      </div>
    </div>
  );
};

export default Home;
