import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-mono font-normal pt-20 border'>Contact US !!</h1>
            <div className='p-5 text-center'>
                <Link to="dhaka-address" className='bg-red-300 text-white px-6 py-2  rounded-lg text-xl'>
                    Dhaka Office

                </Link>
                <Link to="chittagong-address" className='bg-red-300 text-white px-3 py-2  rounded-lg text-xl mx-3'>
                    Chittagong Office
                </Link>

            </div>
            <div className='text-center  w-full mt-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Contact;