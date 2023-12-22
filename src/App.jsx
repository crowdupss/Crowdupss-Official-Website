// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import EventsPage from './pages/Work/EventsPage'; // Import the new component
import Community from './pages/Work/Community';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/events' element={<Work />} />
                <Route path='/eventspage' element={<EventsPage />} /> {/* Use the new component */}
                <Route path='/community' element={<Community />} />
            </Routes>
        </Router>
    );
}
