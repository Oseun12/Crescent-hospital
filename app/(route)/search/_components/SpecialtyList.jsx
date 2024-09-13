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

  

function SpecialtyList() {

    const [specialties, setSpecialties] = useState([]);

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
                    {specialties&&specialties.map((item, index) => (
                <CommandItem>
                    <Link href={''} className='p-3 text-[14px]   cursor-pointer w-full hover:bg-cyan-900 hover:text-white rounded-xl'>
                    
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