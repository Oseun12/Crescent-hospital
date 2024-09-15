'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

function DoctorList({ heading='Our Heroes' }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('/api/doctors');
        console.log('API Response:', response.data);
        response.data.forEach(doctor => console.log(doctor.name, doctor.specialty));
        setDoctors(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill()
          .map((_, index) => (
            <div key={index} className="border-[2px] p-4 rounded-lg animate-pulse">
              <div className="bg-gray-400 h-[300px] w-full mb-4"></div>
              <div className="bg-gray-300 h-6 mb-2 rounded-full"></div>
              <div className="bg-gray-300 h-4 mb-2 rounded-full"></div>
              <div className="bg-gray-300 h-4 mb-2 rounded-full"></div>
              <div className="bg-gray-300 h-4 mb-2 rounded-full"></div>
              <div className="bg-gray-300 h-10 rounded-lg"></div>
            </div>
          ))}
      </div>
    );
  }

  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-10">
      <h1 className="mb-10 text-4xl font-bold text-center">{heading}</h1>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6   px-4 transition-all ease-in-out">
        {doctors.length > 0 ? (
          doctors.map(doctor => (
            <li key={doctor._id}>
              <div className="border-[2px] border-gray-300 p-4 rounded-lg shadow-none hover:shadow-lg hover:scale-105 cursor-pointer hover:border-cyan-400 transition-all duration-300 ease-in-out">
                <Image 
                  src={doctor.imageUrl} 
                  alt={doctor.name} 
                  width={500} 
                  height={100}
                  className="h-[300px] w-full object-cover " 
                />
                <h2 className="text-[20px] p-1 rounded-full px-2 font-bold text-cyan-600">{doctor.name}</h2>
                <p className="text-[20px] p-1 rounded-full px-2 font-bold">{doctor.specialty ? doctor.specialty.specialty : 'Specialty not available'}</p>
                <p className="font-semibold p-1 text-cyan-700 text-sm px-2">{doctor.years_of_experience} years of Service</p>
                <p className="font-medium p-1 text-cyan-700 text-sm px-2">{doctor.email}</p>
                <h2 className="p-2 px-3 border-[1px] border-cyan-600 text-cyan-700 rounded-xl w-full text-center font-bold mt-2 cursor-pointer hover:bg-slate-600 hover:text-white">Book Now</h2>
              </div>
            </li>
          ))
        ) : (
          [1, 2, 3, 4].map(doctor => (
            <div key={doctor} className="bg-slate-200 w-full rounded-2xl animate-pulse">
              <div className="bg-gray-400 h-[200px] w-full mb-4"></div>
              <div className="bg-gray-300 h-6 mb-2 rounded-full"></div>
              <div className="bg-gray-300 h-4 mb-2 rounded-full"></div>
              <div className="bg-gray-300 h-4 mb-2 rounded-full"></div>
              <div className="bg-gray-300 h-4 mb-2 rounded-full"></div>
              <div className="bg-gray-300 h-10 rounded-lg"></div>
            </div>
          ))
        )}
      </ul>
    </div>
  );
}

export default DoctorList;
