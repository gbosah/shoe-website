import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='h-[50px] flex flex-col bg-gray-400 text-center md:flex-row justify-between border-2 mt-5'>
            <div>
               <h3 className='text-xl font-medium px-4 py-2'>Connect with us</h3>
            </div>
            <div className='flex justify-center text-3xl space-x-4 py-2'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
            </div>
        </footer>
    );
};

export default Footer;