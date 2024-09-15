'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function Search({ params }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state

  // Fetch doctors based on the specialty name (specname)
  useEffect(() => {
    const fetchDoctorsBySpecialty = async () => {
      try {
        setLoading(true);  // Set loading to true before fetch
        const response = await fetch(`/api/doctors?specialty=${params.specname}`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const doctorsData = await response.json();
        setDoctors(doctorsData);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);  // Set loading to false after fetch
      }
    };

    fetchDoctorsBySpecialty();
  }, [params.specname]);

  return (
    <div className="mt-10 px-4">
      <h1 className="mb-10 text-4xl  font-bold text-center bg-cyan-900 text-white p-4 rounded-lg ">{params.specname}</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   px-4 transition-all ease-in-out">
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

export default Search;
