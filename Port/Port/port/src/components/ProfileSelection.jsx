import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileSelection.css';
import Home from './Home';

const ProfileSelection = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      id: 1,
      name: 'Recruiter',
      image: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/f8bfb35d-17a3-4460-8211-7febc70c92b3.png',
      route: '/home'
    },
    {
      id: 2,
      name: 'Developer',
      image: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/625c2a91-257e-4092-a247-af04dbc0fdcf.png',
      route: '/home'
    },
    {
      id: 3,
      name: 'Stalker',
      image: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/89e74f18-69c9-48e1-9c34-1dd2dfe6e495.png',
      route: '/home'
    }
  ];

 const selectProfile = (profile) => {
  console.log(`Storing profile: ${profile.name}`); // Add this
  sessionStorage.setItem('selectedProfile', profile.name);
  navigate(profile.route);
};


  return (
    <div className="browse-container">
      <div className="browse-header">
        <h1 className="browse-title">Who's Watching?</h1>
        {/* <p className="browse-subtitle">Select your profile to continue</p> */}
      </div>

      <div className="profiles-container">
        {profiles.map((profile) => (
          <div 
            key={profile.id}
            className="profile-card" 
            onClick={() => selectProfile(profile)}
            
          >
            <img 
              src={profile.image} 
              alt={`${profile.name} Profile`} 
              className="profile-avatar"
            />
            <p className="profile-name">{profile.name}</p>
          </div>
        ))}
      </div>

      {/* <button className="manage-profiles-btn">MANAGE PROFILES</button> */}
    </div>
  );
};

export default ProfileSelection;
