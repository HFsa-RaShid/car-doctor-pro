
// "use client";
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { CiSearch } from "react-icons/ci";
// import { IoBagHandleOutline } from "react-icons/io5";

// const Navbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const menuItems = [
//         { title: 'Home', path: '/' },
//         { title: 'About', path: '/about' },
//         { title: 'Services', path: '/services' },
//         { title: 'Blog', path: '/blog' },
//         { title: 'Contact', path: '/contact' },
//     ];

//     return (
//         <div
//             className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//                 isScrolled ? "bg-white/80 shadow-md backdrop-blur" : "bg-transparent"
//             }`}
//         >
//             <div className="navbar container mx-auto pt-3">
//                 {/* Navbar Start */}
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16"
//                                 />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow"
//                         >
//                             {menuItems.map((item) => (
//                                 <Link
//                                     key={item.path}
//                                     href={item.path}
//                                     className="btn btn-ghost rounded-btn mx-1"
//                                 >
//                                     {item.title}
//                                 </Link>
//                             ))}
//                         </ul>
//                     </div>
//                     <Link href="/">
//                         <Image
//                             src="/assets/logo.svg"
//                             alt="Car Doctor Logo"
//                             width={60}
//                             height={60}
//                             priority
//                         />
//                     </Link>
//                 </div>

//                 {/* Navbar Center */}
//                 <div className="navbar-center hidden lg:flex">
//                     <div className="flex items-center space-x-10">
//                         {menuItems.map((item) => (
//                             <Link
//                                 key={item.path}
//                                 href={item.path}
//                                 className="hover:text-[#FF3811] transition-colors duration-300"
//                             >
//                                 {item.title}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Navbar End */}
//                 <div className="navbar-end flex gap-4">
//                     <IoBagHandleOutline className="w-5 h-5" />
//                     <CiSearch className="w-6 h-6" />
//                     <Link href="/appointment">
//                         <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
//                             Appointment
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;



"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Run only on client
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll(); // ✅ run once on mount (fixes SSR mismatch)

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="navbar container mx-auto pt-3">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="btn btn-ghost rounded-btn mx-1"
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Car Doctor Logo"
              width={60}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="hover:text-[#FF3811] transition-colors duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex gap-4">
          <IoBagHandleOutline className="w-5 h-5" />
          <CiSearch className="w-6 h-6" />
          <Link href="/appointment">
            <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:text-[#92230d]">
              Appointment
            </button>
          </Link>
          <Link href="/login">
            <button className="btn btn-outline text-white bg-[#FF3811] hover:text-[#92230d]">
              LogIn
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
