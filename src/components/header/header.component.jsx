import React from 'react';
import { Link } from 'react-router-dom';

import DropDown from '../dropdown/dropdown.component';

import { homeNav, mainNav } from './header.data';

const Header = ({ setScroll }) => {
    return ( 
        <nav className='bg-gray-900 py-3 px-5 lg:py-5 lg:px-6 w-full lg:flex lg:justify-between lg:items-center'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <span className='font-semibold text-xl tracking-tight'>Skillshot</span>
            </div>
            <div className='w-full text-sm flex justify-between items-center lg:justify-end my-2'>
                <DropDown 
                    snap='bottom-left'
                    toggleOnHover
                    closeOnClick
                >
                    <Link 
                        className='text-white hover:text-skillshot-pink lg:ml-4 cursor-pointer'
                        to='/'
                    >
                        Home
                    </Link>
                    <div className='bg-gray-200 shadow-lg'>
                        {
                            homeNav &&
                            homeNav.map(({ title, section }) => (
                                <span 
                                    key={title} 
                                    className='text-black block whitespace-no-wrap capitalize px-3 py-2 hover:bg-gray-300 cursor-pointer' 
                                    onClick={() => setScroll(section)}
                                >
                                    {title}
                                </span>
                            ))
                        }
                    </div>
                </DropDown>
                {
                    mainNav &&
                    mainNav.map(({ title, path }) => (
                        <Link key={title} className='text-white hover:text-skillshot-pink lg:ml-4' to={path}>{title}</Link>
                    ))
                }
            </div>
        </nav>
     );
}
 
export default Header;