import React, { useState } from 'react';
import ShowCity from './ShowCity';
import Cities from './Cities';

const ServiceAvailable = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full py-10 px-4 md:px-8'>
      {/* Section Title */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-8'>
        Service Available
      </h1>

      {/* Selected City Image */}
      <div className='w-full flex justify-center mb-8'>
        <div className='w-full sm:w-4/5 md:w-3/4 lg:w-2/3 aspect-[16/9]  flex justify-center items-center rounded-lg overflow-hidden shadow-lg'>
          <img
            src={Cities[activeIndex].image}
            alt={Cities[activeIndex].cityName}
            className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>
      </div>

      {/* Scrollable City Cards */}
      <div className='w-full'>
        <ShowCity activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
    </div>
  );
};

export default ServiceAvailable;
