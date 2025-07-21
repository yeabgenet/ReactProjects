import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Link } from 'react-router-dom';

import service1 from '../../assets/services-1.jpg';
import service2 from '../../assets/services-2.jpg';
import service3 from '../../assets/services-3.jpg';
import service4 from '../../assets/services-4.jpg';

import feature1 from '../../assets/feature-icon-1.svg';
import feature2 from '../../assets/feature-icon-2.svg';
import feature3 from '../../assets/feature-icon-3.svg';
import feature4 from '../../assets/feature-icon-4.svg';
import feature5 from '../../assets/feature-icon-5.svg';
import feature6 from '../../assets/feature-icon-6.svg';

import element1 from '../../assets/element-1.png';
import element2 from '../../assets/element-2.png';
import element3 from '../../assets/element-3.png';

import RoomsData from '../../Rooms.json';
import heroImg from '../../assets/about.png';

import avatar1 from '../../assets/review-1.jpg';
import avatar2 from '../../assets/review-2.jpg';
import avatar3 from '../../assets/review-3.jpg';
import avatar4 from '../../assets/review-4.jpg';
import avatar5 from '../../assets/review-5.jpg';
import avatar6 from '../../assets/review-6.jpg';

import blog1 from '../../assets/blog-2.jpg';
import blog2 from '../../assets/blog-3.jpg';
import blog3 from '../../assets/blog-4.jpg';
import blog4 from '../../assets/blog-5.jpg';
import {div, image} from 'framer-motion/client'
import {Pagination, Navigation } from 'swiper/modules';
import {Swiper , SwiperSlide}  from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'


function Index() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [activeIndex , SetActiveIndex] = useState(0);
  const [activeTab , setActiveTab] = useState('All');

  const tabs = ['All' , 'Economy' , 'Standard' , 'Luxury' ];
  const filteredRooms = activeTab === 'All'? RoomsData : RoomsData.filter(room => room.type === activeTab);
  

  return (
    <>
    <div className="hero w-full lg:px-[12%] px-[8%] py-36 flex items-center justify-center min-h-screen">
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
            className="bg-sky-400 text-white  rounded-full text-2xl w-xl-[100px] h-xl-[100px] w-[60px] h-[60px] "
          >
            <i className='bi bi-search '></i>
          </button>
        </form>
        <p className='text-[#5e8695] text-base mt-2 '>
          Accusantium doloremque laudantium, totam rem aperiam eaque ipsa
        </p>
      </div>
    </div>

    <div className="service w-full lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20">

    <div className="section-title text-center w-full space-y-4 ">
      <span className='bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase'>Service</span>
      <h1 className='text-5xl font-semibold'>
        Discover the touch of nature
      </h1>
    </div>

    <div className='service-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-10 w-full'>
      <div className="service-item relative rounded-lg overflow-hidden">
        <img src={service1} alt="service-image" className='w-full h-[250px] object-cover rounded-lg' />
        <span className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e]  tracking-widest uppercase w-[90%] max-w-[250px]'>
       Surfing
        </span>
      </div>

      <div className="service-item relative rounded-lg overflow-hidden">
        <img src={service2} alt="service-image" className='w-full h-[250px] object-cover rounded-lg' />
        <span className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e]  tracking-widest uppercase w-[90%] max-w-[250px]'>
          Beach Vacation
        </span>
      </div>

      <div className="service-item relative rounded-lg overflow-hidden">
        <img src={service3} alt="service-image" className='w-full h-[250px] object-cover rounded-lg' />
        <span className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e]  tracking-widest uppercase w-[90%] max-w-[250px]'>
        Beach restaurant
        </span>
      </div>

      <div className="service-item relative rounded-lg overflow-hidden">
        <img src={service4} alt="service-image" className='w-full h-[250px] object-cover rounded-lg' />
        <span className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e]  tracking-widest uppercase w-[90%] max-w-[250px]'>
          Swimming pools
        </span>
      </div>
    </div>

    <div className="service-bottom mt-20 w-full flex lg:flex-row flex-col justify-between items-center lg:text-start text-center gap-5 text-[#5e8695] ">

      <p className='lg:w-1/2'>
      Accusantium doloremque laudantium totam rem aperiam 
      eaque ipsa, quae ab illo inventore veritatis et quasi 
      architecto beatae vitae dicta sunt, explicabo.
      </p>
      <button className='w-[200px] tracking-[2px] h-[60px] bg-[#ecb934] transtion hover:bg-[#ffca44] rounded-full text-white uppercase '>
      Read More
      </button>
    </div>
    </div>


    <div className="features bg-[#f3fdfd] w-full lg:px-[12%] px-[8%] py-[150px]  flex flex-col justify-center items-center gap-20 text-[#5e8695] z-[999] relative overflow-hidden">

    <div className="section-title text-center w-full space-y-4 ">
      <span className='bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase'>
        Features
        </span>
      <h1 className='text-5xl font-semibold'>
      Features that will make your vacation unforgettable
      </h1>
    </div>

    <div className="features-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-[9]">

      <div className="features-item bg-white rounded-xl py-14 px-5" style={{boxShadow:'0 4px 20px rgba(32,79,94,0.5)'}}>
        <img src={feature1} alt="feature-mage" className='bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] py-5 px-5 rounded-lg '  />
        <h3 className='mt-12 xxl:text-3xl text:2xl mb-4 font-semibold '> Beach Front Location </h3>
        <p className='font-light'>
          Our hotel is situated right on the beach, offering 
          stunning ocean views and immediate access to the 
          sandy shores.
        </p>
      </div>

      <div className="features-item bg-white rounded-xl py-14 px-5" style={{boxShadow:'0 4px 20px rgba(32,79,94,0.5)'}}>
        <img src={feature2} alt="feature-mage" className='bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] py-5 px-5 rounded-lg '  />
        <h3 className='mt-12 xxl:text-3xl text:2xl mb-4 font-semibold '> Luxury Accommodations</h3>
        <p className='font-light'>
        Experience Comfort and style in our well-appointed 
        rooms and suites, designed for a relaxing stay.
        </p>
      </div>

      <div className="features-item bg-white rounded-xl py-14 px-5" style={{boxShadow:'0 4px 20px rgba(32,79,94,0.5)'}}>
        <img src={feature3} alt="feature-image" className='bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] py-5 px-5 rounded-lg '  />
        <h3 className='mt-12 xxl:text-3xl text:2xl mb-4 font-semibold '> On-Site Dining </h3>
        <p className='font-light'>
      Enjoy a variety of culinary delights at our on-site 
      restaurants, catering to different tastes and references.
        </p>
      </div>

      <div className="features-item bg-white rounded-xl py-14 px-5" style={{boxShadow:'0 4px 20px rgba(32,79,94,0.5)'}}>
        <img src={feature4} alt="feature-image" className='bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] py-5 px-5 rounded-lg '  />
        <h3 className='mt-12 xxl:text-3xl text:2xl mb-4 font-semibold '> Recreational Facilities </h3>
        <p className='font-light'>
        Our hotel offers a range of recreational 
        activities, including water sports, swimming pools,
        and fitness centers.
        </p>
      </div>

      <div className="features-item bg-white rounded-xl py-14 px-5" style={{boxShadow:'0 4px 20px rgba(32,79,94,0.5)'}}>
        <img src={feature5} alt="feature-image" className='bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] py-5 px-5 rounded-lg '  />
        <h3 className='mt-12 xxl:text-3xl text:2xl mb-4 font-semibold '> Spa and Wellness Services </h3>
        <p className='font-light'>
          Unwind and rejuvenate at our spa, where you can 
          indulge in messages and treatments for ultimate 
          relaxation.
        </p>
      </div>

      <div className="features-item bg-white rounded-xl py-14 px-5" style={{boxShadow:'0 4px 20px rgba(32,79,94,0.5)'}}>
        <img src={feature6} alt="feature-mage" className='bg-[#eafbfb] text-[#23bcec] h-[80px] w-[80px] py-5 px-5 rounded-lg '  />
        <h3 className='mt-12 xxl:text-3xl text:2xl mb-4 font-semibold '> Surfing Lessons </h3>
        <p className='font-light'>
          Our hotel offers surfing lessons and equipment
          rentals, allowing guests of all levels to enjoy the 
          thrill of riding  waves  .
        </p>
      </div>

      </div>
    </div>

    <div className='py-[80px]'>

    <div className="section-title text-center w-full space-y-4 ">
      <span className='bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase'>
        Rooms
        </span>
      <h1 className='text-2xl sm:text-5xl font-semibold w-full xl:w-[50%] mx-auto leading-tight'>
      Our Best Rooms
      </h1>
    </div>
</div>
    <div className="w-100 lg:px-[12%] px-[8%] pb-[100px] ">




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

        {filteredRooms.map((rooms) => (
           <div key={rooms.id} className='bg-white rounded-2xl shadow-md overflow-hidden show-rooms '>
            <div className='relative'>

              <Swiper
               modules={[Pagination]}
               Pagination={{Clickable:true}}
               className='w-full h-[280px] custom-swiper '
              >

                  {rooms.photos.map((photo,index) => (
                    <SwiperSlide key={index}>

                      <img src={photo} alt={`${rooms.tittle} ${index+1}`}
                      className="w-full h-[280px] object-cover"
                      />

                    </SwiperSlide>
                  ))}

              </Swiper>
            </div>

                  <div className='bg-[#e8faff] flex gap-4 px-4 py-3 text-sm'>
                    <span className='flex items-center gap-1 '>
                      <i className="bg-white shadow rounded py-1 px-3">
                        Size: {rooms.size}
                      </i>
                    </span>

                  </div>
                  <Link to={`/rooms/${rooms.id}`}>
                    <div className='px-6 pt-4 pb-4'>
                      <div className='py-4'>
                        <h3 className='text-2xl font-semibold mb-1 '>
                          {rooms.tittle}
                        </h3>
                        <p className='text-md text-gray-500'>
                          {rooms.description}
                        </p>
                      </div>
                      <div className='border-t mt-4 pt-4 flex justify-between items-center'>
                        <p className='text-lg font-bold text-[#000]'>
                            ${rooms.price}
                        </p>

                          <button className='w-12 h-12 bg-[#23bcec] rounded-full flex items-center justify-center text-white text-xl '>
                                <i className='ri-bookmark-line '></i>
                          </button>

                      </div>

                    </div>
                  </Link>

            </div>
        ))}

      </div>
    </div>
    </>

  );
}

export default Index;