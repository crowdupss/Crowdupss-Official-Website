import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

const EventsPage = () => {
  const [activeSection, setActiveSection] = useState('events');
  const [activeCategory, setActiveCategory] = useState('upcoming');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleEditProfile = () => {
    console.log('Editing profile...');
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleRegisterClick = () => {
    setShowRegistrationForm(true);
  };

  const handleCloseRegistrationForm = () => {
    setShowRegistrationForm(false);
  };

  const navSections = [
    { id: 'messaging', label: 'Messaging', icon: '✉️' },
    { id: 'community', label: 'Community', icon: '👥' },
    { id: 'resources', label: 'Resources', icon: '📚' },
    { id: 'notification', label: 'Notification', icon: '🔔' },
    { id: 'mvp', label: 'MVP', icon: '🏆' },
    { id: 'events', label: 'Events', icon: '📅' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ];

  const eventDetails = {
    name: 'Tech Conference 2024',
    description: 'An exciting conference showcasing the latest in technology.',
    type: 'Conference',
    teamSize: 'Varies',
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/">
            <img
              src="https://media.licdn.com/dms/image/C560BAQFEmJRV-RMTEw/company-logo_200_200/0/1675482910935?e=1708560000&v=beta&t=O2JhBVXCeKoXb3C5dMEI9sYNjZNveZ8W5z3K12mCofo"
              alt="Logo"
              className="h-10 w-10"
            />
          </a>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for people"
              className="border border-gray-300 p-2 rounded-md w-48 md:w-64"
            />
            <button className="ml-2">Search</button>
          </div>
          <div className="flex items-center space-x-4 md:hidden">
            <div
              className="text-white cursor-pointer flex items-center"
              onClick={() => {}}
            >
              <i className="fas fa-bars text-xl"></i>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            {navSections.map((section) => (
              <div
                key={section.id}
                className={`text-white cursor-pointer flex items-center ${
                  activeSection === section.id && 'font-bold'
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.icon}
                <span className="ml-2">{section.label}</span>
              </div>
            ))}
            <div className="flex items-center" onClick={handleEditProfile}>
              <img
                src="https://placekitten.com/40/40"
                alt="Profile"
                className="rounded-full h-8 w-8 mr-2 cursor-pointer"
              />
              <span className="text-blue-500 cursor-pointer">Profile</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gray-200 p-2 flex flex-wrap justify-center">
        {/* ... (existing code) */}
      </div>

      <div className="p-4">
        <div>
          <p className="text-xl font-bold">Name of the Event: {eventDetails.name}</p>
          <p>Events: {eventDetails.description}</p>
          <p>Type: {eventDetails.type}</p>
          <p>Team Size: {eventDetails.teamSize}</p>
        </div>
      </div>

      <div className="p-4 flex flex-col md:flex-row justify-center md:justify-end items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2 md:mb-0 md:mr-2" onClick={handleRegisterClick}>
          Register
        </button>
        <button className="bg-gray-500 text-white px-1 py-2 rounded">
          Read More
        </button>
      </div>

      {showRegistrationForm && <RegistrationForm onClose={handleCloseRegistrationForm} />}

      <Footer />
    </>
  );
};

export default EventsPage;
