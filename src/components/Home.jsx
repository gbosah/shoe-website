import React from 'react';
import shoe from '../images/shoe1.jpg'
import shoe1 from '../images/shoe2.jpg'
import shoe2 from '../images/shoe4.jpg'

const Home = () => {
    return (
        <div className='relative w-screen h-full bg-zinc-100 mt-19'>
            <div className='grid md:grid-cols-2 gap-2 mt-10 px-4 md:px-0'>
                <div className='col-span-2 relative'>
                <img src={shoe2} alt="shoe" className='h-[700px] w-screen object-cover ' />
                </div>
                    <div className='absolute text-gray-300 inset-20 mt-20 '>
                    <h3 className='text-2xl md:text-5xl font-extrabold animate-bounce'>Best quality shoes</h3>
                </div>
                <div className=''>
                <img src={shoe1} alt="man wearing shoe" className='h-[600px] w-[] object-cover rounded-2xl transform transition-all md:hover:scale-125' />
                </div>
                <div className=''>
                <img src={shoe} alt="A lady" className='h-[600px] object-cover w-[550px] rounded-2xl transform transition-all md:hover:scale-125' />
                </div>
            </div>
        </div>
    );
};

export default Home;