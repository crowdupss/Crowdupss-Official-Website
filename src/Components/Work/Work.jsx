import { useState, useEffect } from 'react'
import Card from './Card'
import './Work.css'
const Work = () => {
    const [option, setOption] = useState('EVENTS');
    return (
        <div>
            <h1>What do we do?</h1>
            <div className='bg-[#ff0000] m-[1rem] flex flex-col md:flex-row' style={{ zIndex: '4' }}>
                <div className='workBtnCont'>
                    <button className='workButton' onClick={() => setOption('EVENTS')} style={{ backgroundColor: `${option === 'EVENTS' ? '#000000' : 'transparent'}` }}>Events</button>
                    <button className='workButton' onClick={() => setOption('COMMUNITY')} style={{ backgroundColor: `${option === 'COMMUNITY' ? '#000000' : 'transparent'}` }}>Community</button>
                    <button className='workButton' onClick={() => setOption('MVP')} style={{ backgroundColor: `${option === 'MVP' ? '#000000' : 'transparent'}` }}>MVP Dev Program</button>
                    <button className='workButton' onClick={() => setOption('RESOURCE')} style={{ backgroundColor: `${option === 'RESOURCE' ? '#000000' : 'transparent'}` }}>Resource Directory</button>
                </div>
                <div className='flex flex-row justify-center align-center'>
                    <Card name={option} />
                </div>
            </div>
        </div>
    );
}
export default Work;