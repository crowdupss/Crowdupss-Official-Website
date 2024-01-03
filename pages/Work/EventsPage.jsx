import React, { useState } from 'react';

const EventsPage = () => {
  const [activeSection, setActiveSection] = useState('events');
  const [activeCategory, setActiveCategory] = useState('upcoming');

  const handleEditProfile = () => {
    console.log('Editing profile...');
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
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
              className="border border-gray-300 p-2 rounded-md w-64"
            />
            <button className="ml-2">Search</button>
          </div>
          <div className="flex space-x-4">
            {/* Existing sections */}
            <div
              className={`text-white cursor-pointer flex items-center ${
                activeSection === 'messaging' && 'font-bold'
              }`}
              onClick={() => setActiveSection('messaging')}
            >
              <i className="fas fa-envelope-open-text text-xl mr-2"></i>
              Messaging
            </div>
            <div
              className={`text-white cursor-pointer flex items-center ${
                activeSection === 'community' && 'font-bold'
              }`}
              onClick={() => setActiveSection('community')}
            >
              <i className="fas fa-users text-xl mr-2"></i>
              Community
            </div>
            <div
              className={`text-white cursor-pointer flex items-center ${
                activeSection === 'resources' && 'font-bold'
              }`}
              onClick={() => setActiveSection('resources')}
            >
              <i className="fas fa-book text-xl mr-2"></i>
              Resources
            </div>
            <div
              className={`text-white cursor-pointer flex items-center ${
                activeSection === 'notification' && 'font-bold'
              }`}
              onClick={() => setActiveSection('notification')}
            >
              <i className="fas fa-bell text-xl mr-2"></i>
              Notification
            </div>
            <div
              className={`text-white cursor-pointer flex items-center ${
                activeSection === 'mvp' && 'font-bold'
              }`}
              onClick={() => setActiveSection('mvp')}
            >
              <i className="fas fa-trophy text-xl mr-2"></i>
              MVP
            </div>

            {/* New "Events" section */}
            <div
              className={`text-white cursor-pointer flex items-center ${
                activeSection === 'events' && 'font-bold'
              }`}
              onClick={() => setActiveSection('events')}
            >
              <i className="fas fa-calendar-alt text-xl mr-2"></i>
              Events
            </div>

            {/* Profile section */}
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

      {/* Buttons for Event Categories */}
      <div className="bg-gray-200 p-2 flex justify-center">
        <button
          className={`mx-2 p-2 cursor-pointer ${
            activeCategory === 'upcoming' && 'bg-gray-400'
          }`}
          onClick={() => handleCategoryClick('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`mx-2 p-2 cursor-pointer ${
            activeCategory === 'ongoing' && 'bg-gray-400'
          }`}
          onClick={() => handleCategoryClick('ongoing')}
        >
          Ongoing
        </button>
        <button
          className={`mx-2 p-2 cursor-pointer ${
            activeCategory === 'passed' && 'bg-gray-400'
          }`}
          onClick={() => handleCategoryClick('passed')}
        >
          Passed
        </button>
        <button
          className={`mx-2 p-2 cursor-pointer ${
            activeCategory === 'myevents' && 'bg-gray-400'
          }`}
          onClick={() => handleCategoryClick('myevents')}
        >
          My Events
        </button>
      </div>

      {/* Event Details Section */}
      <div className="p-4">
        <div>
          <p className="text-xl font-bold">Name of the Event:</p>
          <p>Events:</p>
          <p>Type:</p>
          <p>Team Size:</p>
        </div>
      </div>
{/* Register Button */}
<div className="p-4 text-right">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
        </div>
      {/* Read More Button */}
      <div className="p-4 text-right">
        <button className="bg-gray-500 text-white px-1 py-2 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default EventsPage;

