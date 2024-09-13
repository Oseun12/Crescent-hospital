import Image from 'next/image'
import React from 'react'

function Doctors() {
  return (
    <div className='mt-10 rounded-3xl bg-slate-300'>
      <div className='flex justify-center'>
        <h2 className='font-bold text-4xl mb-32 mt-10'>Our Heroes</h2>
      </div>

      <div className='relative  text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-6'>  
        <div className='relative'>
          <Image
            src='/images/doclist6.jpg'
            alt='doctor'
            width={400}
            height={100}
            objectFit='cover'
            className='rounded-2xl h-[500px] mb-24 transform transition-transform duration-300 ease-in-out hover:rotate-6 hover:scale-105 shadow-lg hover:shadow-2xl -mt-20' // Move up the image
          />
        </div>
        <div className='relative'>
          <Image
            src='/images/doclist5.jpg'
            alt='doctor'
            width={400}
            height={100}
            objectFit='cover'
            className='rounded-2xl h-[500px] mb-24 transform transition-transform duration-300 ease-in-out hover:rotate-6 hover:scale-105 shadow-lg hover:shadow-2xl -mt-20'
          />
        </div>
        <div className='relative'>
          <Image
            src='/images/doclist3.webp'
            alt='doctor'
            width={400}
            height={100}
            objectFit='cover'
            className='rounded-2xl h-[500px] mb-24 transform transition-transform duration-300 ease-in-out hover:rotate-6 hover:scale-105 shadow-lg hover:shadow-2xl -mt-20'
          />
        </div>
        <div className='relative'>
          <Image
            src='/images/doclist7.jpg'
            alt='doctor'
            width={400}
            height={100}
            objectFit='cover'
            className='rounded-2xl h-[500px] mb-24 transform transition-transform duration-300 ease-in-out hover:rotate-6 hover:scale-105 shadow-lg hover:shadow-2xl -mt-20'
          />
        </div>
      </div>
    </div>
  )
}

export default Doctors;
