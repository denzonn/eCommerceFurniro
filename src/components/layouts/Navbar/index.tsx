import React, { FC } from 'react';
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { FaRegHeart } from 'react-icons/fa';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className='h-20 w-full bg-white flex flex-row items-center justify-between px-12'>
        <div className='flex flex-row gap-x-4 items-center'>
            <img src="/images/logo.png" alt="" className='w-10'/>
            <img src="/images/logoName.png" alt="" className='h-5'/>
        </div>
        <div>
            <ul className='flex flex-row gap-x-12 text-sm'>
                <li><a href="" className='hover:text-primary hover:font-semibold font-medium'>Home</a></li>
                <li><a href="" className='hover:text-primary hover:font-semibold font-medium'>Shop</a></li>
                <li><a href="" className='hover:text-primary hover:font-semibold font-medium'>Comparison</a></li>
                <li><a href="" className='hover:text-primary hover:font-semibold font-medium'>Contact</a></li>
            </ul>
        </div>
        <div>
            <ul className='flex flex-row gap-x-8 items-center'>
                <li className='text-xl'><IoSearch /></li>
                <li className='text-xl'><FaRegHeart  /></li>
                <li className='text-2xl'><IoCartOutline /></li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;