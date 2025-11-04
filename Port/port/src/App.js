import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NetflixIntro from './components/NetflixIntro';
import ProfileSelection from './components/ProfileSelection';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NetflixIntro />} />
          <Route path="/profiles" element={<ProfileSelection />} />
          {/* Add more routes here as you build more pages */}
          {/* <Route path="/recruiter" element={<RecruiterPage />} /> */}
          {/* <Route path="/developer" element={<DeveloperPage />} /> */}
          {/* <Route path="/stalker" element={<StalkerPage />} /> */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
