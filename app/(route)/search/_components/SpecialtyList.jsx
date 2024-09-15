'use client'

import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

  

function SpecialtyList() {

    const [specialties, setSpecialties] = useState([]);
    const params = usePathname();
    const specialty = params.split('/')[2]

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await fetch('/api/specialty');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Fetched specialties:', data);
        setSpecialties(data);
        // setFilteredSpecialties(data);
      } catch (error) {
        console.error('Failed to fetch specialties:', error);
      }
    };

    fetchSpecialties();
  }, []);

  return (
    <div className='h-screen  mt-5 flex flex-col '>
        <Command className=' '>
            <CommandInput placeholder="Search Professional..." className='' />
            <CommandList className='overflow-visible'>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Specialty" className=''  >
                    {specialties && specialties.map((item, index) => (
                <CommandItem key={index}>
                    <Link href={`/search/${item?.specialty}`} className={`p-3 text-[14px] items-center  cursor-pointer w-full hover:bg-cyan-900 hover:text-white rounded-xl ${specialty==item.specialty&&'bg-cyan-200'}`}>
                    
                    <label>
                        {item.specialty}
                    </label>
                    </Link>
                </CommandItem>

                    ))}
                
                </CommandGroup>
                
            </CommandList>
        </Command>

    </div>
  )
}

export default SpecialtyList