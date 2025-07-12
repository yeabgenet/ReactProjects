import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bookmark from '../../assets/bookmark.svg';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`bg-white px-[8%] h-[100px] w-full fixed top-5 left-0 lg:left-10 rounded-2xl lg:w-[95%] flex justify-between items-center 
        z-[9999] transition-all duration-300 ${
          isScrolled ? 'bg-[#111111] shadow-md' : 'bg-transparent'
        }`}
      >
        <Link to='/' className='text-4xl font-bold logo font-bricolage'>
          Hotel<span>Lux</span>
        </Link>

        <ul
          className={`menu flex-col lg:flex-row lg:flex absolute lg:static top-full left-0 w-full lg:w-auto bg-white md:pl-5 md:py-4 lg:bg-transparent z-50 transition-all duration-300 ease-in-out overflow-hidden 
            ${ isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
             lg:max-h-full lg:opacity-100 gap-10 text-sm font-medium`}
        >
            <li>
              <Link to='/' className='uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/' className='uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>
                About
              </Link>
            </li>
            <li>
              <Link to='/' className='uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>
                Service
              </Link>
            </li>
            <li>
              <Link to='/' className='uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>
                Rooms
              </Link>
            </li>
            <li>
              <Link to='/' className='uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/' className='uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>
                Contact
              </Link>
            </li>
          
        </ul>

        <div className='flex items-center gap-3'>
          <button
            onClick={() => setIsModalOpen(true)}
            className='btn custom-btn bg-[#ecb934] flex items-center lg:py-6 lg:px-16 py-4 px-4 rounded-full gap-3 text-white uppercase tracking-widest'
          >
            <img src={bookmark} alt='bookmark' className='invert brightness-0' />
            <span className='hidden lg:block'>Book Now</span>
          </button>

          {/* Mobile toggle button */}
          <div className='lg:hidden block'>
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className={`ri-menu-line text-4xl transition ${isOpen ? 'hidden' : 'block'}`}></i>
              <i className={`ri-close-line text-4xl transition ${isOpen ? 'block' : 'hidden'}`}></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
