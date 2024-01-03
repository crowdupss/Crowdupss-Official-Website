// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import EventsPage from './pages/Work/EventsPage';
import Community from './pages/Work/Community';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import About from './Components/AboutUs/AboutUs'; // Import the AboutUs component

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/events' element={<Work />} />
                <Route path='/eventspage' element={<EventsPage />} />
                <Route path='/community' element={<Community />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />} /> 
            </Routes>
        </Router>
    );
}


