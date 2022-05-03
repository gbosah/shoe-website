import React from 'react';

const Navbar = () => {
    return (
            <nav className='w-screen border-y-2 bg-zinc-100 shadow-lg top-0 fixed z-50'>
                <div className='flex justify-around items-center mr-5'>
                <div className='px-10 py-5 '>
                    <h3 className='text-lg md:text-xl text-'>Costigos Collection</h3>
                </div>
                   <div className='mr-10'>
                       <ul className='flex space-x-5 md:space-x-10'>
                           <li>Home</li>
                           <li>About</li>
                           <li>Support</li>
                       </ul>
                   </div>
                   </div>
            </nav>
    );
};

export default Navbar;