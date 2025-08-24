import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const menuItems = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About', 
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
    ]
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
        <div>
        {
            menuItems.map((item, index) => <Link key={index} href={item.path} className="btn btn-ghost rounded-btn mx-1">{item.title}</Link>)
        }
    </div>
      </ul>
    </div>
   <Link href="/">
            <Image 
              src="/assets/logo.svg" 
              alt="Car Doctor Logo" 
              width={60} 
              height={60} 
              priority 
            />
          </Link>
        
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <div>
        {
            menuItems.map((item, index) => <Link key={index} href={item.path} className="btn btn-ghost rounded-btn mx-1">{item.title}</Link>)
        }
    </div>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;