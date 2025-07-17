import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Link } from 'react-router-dom';

import sercive1 from '../../assets/services-1.jpg';
import sercive2 from '../../assets/services-2.jpg';
import sercive3 from '../../assets/services-3.jpg';
import sercive4 from '../../assets/services-4.jpg';

import feature1 from '../../assets/feature-icon-1.svg';
import feature2 from '../../assets/feature-icon-2.svg';
import feature3 from '../../assets/feature-icon-3.svg';
import feature4 from '../../assets/feature-icon-4.svg';
import feature5 from '../../assets/feature-icon-5.svg';
import feature6 from '../../assets/feature-icon-6.svg';

import element1 from '../../assets/element-1.png';
import element2 from '../../assets/element-2.png';
import element3 from '../../assets/element-3.png';


function Index() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  

  return (
    <div className="hero w-full lg:px-[12%] px-[8%] py-16 flex items-center justify-center min-h-screen">
      <div className="hero-content w-full flex flex-col gap-4 z-10 relative">
        <span className="text-[#204f5e] bg-[#d5f1f1] w-fit py-1 px-3 rounded-full text-sm lg:text-base">
          Welcome Friend
        </span>

        <h1 className="text-3xl sm:text-5xl xl:text-7xl font-semibold mb-5">
          Wandering the World <br /> is living a story untold
        </h1>

        <form
          className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 bg-white contact-form p-4 rounded-lg"
        >
          <div className="relative w-full sm:w-auto">
            <label
            
              className="block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2"
            >
              Check-in
            </label>
            <div className="relative">
              <DatePicker
                id="checkIn"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Select Check-in date"
                className="w-full sm:w-[250px] xl:w-[1/2px] p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
                dateFormat="dd/MM/yyyy"
              />
              <i className="ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-[#204f5e]"></i>
            </div>
          </div>

          <div className="relative w-full sm:w-auto">
            <label
              htmlFor="checkOut"
              className="block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2"
            >
              Check-Out
            </label>
            <div className="relative">
              <DatePicker
                id="checkOut"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Select Check-out date"
                className="w-full sm:w-[250px] xl:w-[1/2px] p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
                dateFormat="dd/MM/yyyy"
              />
              <i className="ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-[#204f5e]"></i>
            </div>
          </div>

          <div className="relative w-full sm:w-auto">
            <label
              className="block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2"
            >
              Adults
            </label>
            <input
              type="number"
              placeholder="1"
              min="1"
              className="w-full sm:w-[250px] xl:w-[1/2px] p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
            />
          </div>
    
          <button
            type="submit"
            className="bg-sky-400 text-white  rounded-full text-2xl w-xl-[100px] h-xl-[100px] w-[60px] h-[60px]"
          >
            <i className='bi bi-search'></i>
          </button>
        </form>
        <p className='text-[#5e8695] text-base '>
          Accusantium doloremque laudantium, totam rem aperiam eaque ipsa
        </p>
      </div>
    </div>
  );
}

export default Index;