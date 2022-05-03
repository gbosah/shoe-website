import React from 'react';

const Des = () => {
    return (
        <div className='w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='md:py-5'>
                <div className='text-xl text-center'>
                    <h2>
                        Costigos Collection offer you the best quality <span className='text-2xl animate-bounce text-gray-600'>sneaker</span>, <br /> 
                         keep your foot rich.
                    </h2>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-1'>
            <div>
                <img src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" 
                alt="sneaker" className='h-[200px] rounded-full transform transition-all md:hover:scale-125'/>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                alt="sneaker" className='h-[200px] rounded-full transform transition-all md:hover:scale-125' />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="sneaker" className='h-[200px] rounded-full w-[300px] object-cover transform transition-all md:hover:scale-125' />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" 
                alt="sneaker" className='h-[200px] rounded-full w-[300px] object-cover transform transition-all md:hover:scale-125' />
            </div>
            </div>
        </div>
    );
};

export default Des;