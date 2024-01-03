// Work.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card'; // Update the import

const Work = () => {
    const [option, setOption] = useState('EVENTS');

    return (
        <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold mb-4">What do we do?</h1>
            <div className='bg-[#ff0000] m-[1rem] flex flex-col md:flex-row' style={{ zIndex: '4' }}>
                <div className='workBtnCont'>
                    <Link to="/eventspage">
                        <button className='workButton' onClick={() => setOption('EVENTS')} style={{ backgroundColor: `${option === 'EVENTS' ? '#0000FF' : 'transparent'}`, fontSize: '2rem', padding: '1rem', marginBottom: '1rem' }}>Events</button>
                    </Link>
                    <Link to="/community">
                        <button className='workButton md:mt-4' onClick={() => setOption('COMMUNITY')} style={{ backgroundColor: `${option === 'COMMUNITY' ? '#0000FF' : 'transparent'}`, fontSize: '2rem', padding: '1rem', marginBottom: '1rem' }}>Community</button>
                    </Link>
                    <button className='workButton md:ml-4 md:mt-4' onClick={() => setOption('MVP')} style={{ backgroundColor: `${option === 'MVP' ? '#0000FF' : 'transparent'}`, fontSize: '2rem', padding: '1rem', marginBottom: '1rem' }}>MVP Dev Program</button>
                    <button className='workButton md:ml-4 md:mt-4' onClick={() => setOption('RESOURCE')} style={{ backgroundColor: `${option === 'RESOURCE' ? '#0000FF' : 'transparent'}`, fontSize: '2rem', padding: '1rem', marginBottom: '1rem' }}>Resource Directory</button>
                </div>
                <div className='flex flex-col justify-center align-center md:flex-row'>
                    <Card name={option} />
                </div>
            </div>
        </div>
    );
}

export default Work;
