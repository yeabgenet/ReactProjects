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
        className={`navbar bg-white px-[8%] h-[100px] w-full fixed top-5 left-0 lg:left-10 rounded-2xl lg:w-[95%] flex justify-between items-center 
        z-[9999] transition-all duration-300 
        ${isScrolled ? 'bg-[#111111] shadow-md' : 'bg-transparent'}`}
      >
        <Link to='/' className='text-4xl font-bold logo font-bricolage'>
          Hotel<span>Lux</span>
        </Link>

        <ul
          className={`menu flex-col lg:flex-row lg:flex absolute lg:static top-full left-0 w-full lg:w-auto bg-white md:pl-5 md:py-4 lg:bg-transparent z-50 transition-all duration-300 ease-in-out overflow-hidden 
            ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} 
            lg:max-h-full lg:opacity-100 gap-6 lg:gap-4 text-sm font-medium`}
        >
          <li>
            <Link to='/' className='uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2'>
              About
            </Link>
          </li>
          <li>
            <Link to='/service' className='uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2'>
              Service
            </Link>
          </li>
          <li>
            <Link to='/rooms' className='uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2'>
              Rooms
            </Link>
          </li>
          <li>
            <Link to='/blogs' className='uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2'>
              Blog
            </Link>
          </li>
          <li>
            <Link to='/contact' className='uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2'>
              Contact
            </Link>
          </li>
        </ul>

        <div id='button' className='flex items-center gap-3'>
          <button
            onClick={() => setIsModalOpen(true)}
            className='btn custom-btn bg-[#ecb934] flex items-center lg:py-5 lg:px-17 py-4 px-4 rounded-full gap-3 text-white uppercase tracking-widest'
          >
            <img src={bookmark} alt='bookmark' className='invert brightness-0' />
            <span className='hidden lg:block'>Book Now</span>
          </button>

          <div className='lg:hidden block'>
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className={`ri-menu-line text-4xl transition ${isOpen ? 'hidden' : 'block'}`}></i>
              <i className={`ri-close-line text-4xl transition ${isOpen ? 'block' : 'hidden'}`}></i>
            </button>
          </div>
        </div>
        {isModalOpen && (
  <div className='fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(32,79,94,0.9)]'>
    <div className='bg-white w-full max-w-[500px] p-[40px] rounded-[15px] shadow-lg relative'>
      <button
        onClick={() => setIsModalOpen(false)}
        className='absolute top-4 right-4 rounded-full w-[50px] h-[50px] text-black text-xl font-bold bg-[#eafbfb] hover:bg-[#ecb934] hover:text-white transition duration-300 flex items-center justify-center'
        aria-label='Close modal'
      >
        <i className='ri-close-line'></i>
      </button>

      <h2 className='text-3xl font-semibold mb-12'>Search</h2>
      <form className='space-y-10' >
        <div className='mb-10 relative'>
          <label className='block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2'>
            Check-in
          </label>
          <div className='relative'>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText='Select Check-in date'
              className='w-full p-3 h-[60px] bg-[#eafbfb] rounded border-[#d5f1f1] outline-none'
              dateFormat='dd/MM/yyyy'
            />
            <i className='ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-[#204f5e]'></i>
          </div>
        </div>

        <div className='mb-10 relative'>
          <label className='block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2'>
            Check-Out
          </label>
          <div className='relative'>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText='Select Check-out date'
              className='w-full p-3 h-[60px] bg-[#eafbfb] rounded border-[#d5f1f1] outline-none'
              dateFormat='dd/MM/yyyy'
            />
            <i className='ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-[#204f5e]'></i>
          </div>
        </div>

        <div className='mb-10 relative'>
          <label className='block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2'>
            Adults
          </label>
          <input
            type='number'
            placeholder='1'
            min='1'
            className='w-full p-3 h-[60px] bg-[#eafbfb] rounded border-[#d5f1f1] outline-none'
          />
        </div>

        <button
          type='submit'
          className='bg-sky-400 text-white py-3 px-5 rounded-full w-full uppercase tracking-widest hover:bg-sky-500 transition duration-300'
        >
          Search
        </button>
      </form>
    </div>
  </div>
)}
      </nav>
    </>
  );
}
export default Nav;