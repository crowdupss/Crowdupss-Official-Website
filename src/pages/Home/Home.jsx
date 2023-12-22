import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-[1rem]">
      <Navbar />
      <div className="flex-grow">
        <img
          src="https://c.ndtvimg.com/2018-10/0nbugga8_work_625x300_12_October_18.png"
          alt="Centered Image"
          className="w-full mx-auto slide-in"  // Removed max-w
        />
        <div className="text-center">
          <p className="text-lg font-bold mt-4">
            Let's Start Up For Startup's with 150+ Entrepreneurs
          </p>
          <p className="text-sm mt-2">
            Discover the Ultimate Hub for Your Startup Dreams - CrowdUpss, your One-Stop Shop for All Things Entrepreneurial!
          </p>
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Login</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
