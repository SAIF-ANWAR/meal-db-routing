import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between px-20 py-6 bg-red-300 text-xl font-serif sticky top-0'>
            <div>
                <h1 className='text-orange-700'>Logo</h1>
            </div>
            <nav className='text-white'>
                <Link className='mx-3' to="/" >Home</Link>
                <Link className='mx-3' to="/foods" >Foods</Link>
                <Link className='mx-3' to="/contact" >Contact</Link>
                <Link className='mx-3' to="/about" >About</Link>
            </nav>
        </div>
    );
};

export default Header;