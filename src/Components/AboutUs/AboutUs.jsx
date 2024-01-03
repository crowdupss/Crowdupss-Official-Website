// AboutUs.jsx

import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-[1rem]">
      <Navbar />
      <div className="flex-grow w-full max-w-screen-lg mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">About Crowdupss</h1>
        <p className="text-lg mb-4">
          Welcome to Crowdupss – Where Community Startups Thrive!
        </p>
        <p className="text-lg mb-4">
          At Crowdupss, we are fueled by a passion for supporting and nurturing community startups. We firmly believe that every community startup holds the potential for greatness, and we are dedicated to providing them with the high-quality resources they need to not only get started but to flourish and succeed in the competitive business landscape.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          **Empowering Community Startups**
        </p>
        <p className="text-lg mb-4">
          Our mission is clear: to empower community startups through a comprehensive MVP (Minimum Viable Product) development program. We understand the unique challenges that startups face, and our program is designed to guide them through the intricacies of launching their products effectively. We are not just a platform; we are your partners in success.
        </p>
        {/* Add more sections as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
