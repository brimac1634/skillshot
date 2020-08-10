import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return ( 
        <nav className='flex items-center justify-between flex-wrap bg-indigo-600 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <span className='font-semibold text-xl tracking-tight'>Skillshot</span>
            </div>
            <div className='block lg:hidden'>
                <button className='flex flex-col items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
                    <div className='w-5 h-px bg-white my-1'/>
                    <div className='w-5 h-px bg-white my-px'/>
                    <div className='w-5 h-px bg-white my-1'/>
                </button>
            </div>
            <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
                <div className='text-sm lg:flex-grow'>
                    <Link className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' to='/'>Home</Link>
                    <Link className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' to='/kickstarter'>Kickstarter</Link>
                    <Link className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' to='/media'>Media</Link>
                    <Link className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' to='/who-we-are'>Who we are</Link>
                    <Link className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4' to='/contact-us'>Contact us</Link>
                </div>
                <div>
                    <Link to='/buy' className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-600 hover:bg-white mt-4 lg:mt-0'>
                        Buy
                    </Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Header;