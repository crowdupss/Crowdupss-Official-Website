import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col bg-[#0094A8] p-8' style={{ width: '100%' }}>
      <div className="flex items-center justify-center">
        <img src='https://res.cloudinary.com/dhry5xscm/image/upload/v1694892391/crowdupss/Crowdupss_Logo_bqrrgs.png' className='h-[3rem] md:h-[4rem] w-[3rem] md:w-[4rem] rounded-full' alt="Crowdupss Logo" />
        <h1 className="text-white ml-2 text-xl">Text About Crowdupss</h1>
      </div>
      <div className="flex flex-col md:flex-row mt-4">
        <div className="flex flex-col mr-8">
          <h1 className="text-white">Company</h1>
          <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
          <Link to="/privacy" className="text-white hover:text-gray-300">Privacy Policy</Link>
          <Link to="/terms" className="text-white hover:text-gray-300">T & C</Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white">Quick Links</h1>
          <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
          <Link to="/events" className="text-white hover:text-gray-300">Events</Link>
          <Link to="/blogs" className="text-white hover:text-gray-300">Blogs</Link>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
      </div>
      <p className="text-white mt-4">Wanna build with us? Start Now</p>
      <p className="text-white">Copyright@ PKD technologies</p>
    </div>
  );
};

export default Footer;
