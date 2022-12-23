import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import MyMissions from './pages/Missions';
import Rockets from './pages/Rockets';
import MyProfile from './pages/MyProfile';
import './styling/Nav.css';
import './styling/MyProfile.css';
import './styling/Rockets.css';

const App = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<MyMissions />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default App;
