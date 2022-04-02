import React from 'react';
import { CustomLink } from '../Custom-Link/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-between px-20 py-6 bg-red-300 text-xl font-serif sticky top-0'>
            <div>
                <h1 className='text-orange-700'>Logo</h1>
            </div>
            <nav className='text-white'>
                <CustomLink className='mx-3' to="/" >Home</CustomLink>
                <CustomLink className='mx-3' to="/foods" >Foods</CustomLink>
                <CustomLink className='mx-3' to="/contact" >Contact</CustomLink>
                <CustomLink className='mx-3' to="/about" >About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;