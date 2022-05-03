import React from 'react';

const Contact = () => {
    return (
        <div className='w-screen text-center mt-10'>
           <div className='text-2xl font-medium'>
              <h2>Find Your Next Pair of Shoes at Costigos Collection</h2>
            </div> 
            <div className='mt-5 inline-flex border-2 border-gray-900'>
                <input type="email" placeholder='Type your email' className='px-3' />
                <button className='px-3 bg-gray-900 text-white'>Sign Up</button>
            </div>
        </div>
    );
};

export default Contact;