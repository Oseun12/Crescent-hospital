'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

function Search() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [specialties, setSpecialties] = useState([]);
  const [filteredSpecialties, setFilteredSpecialties] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await fetch('/api/specialty');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Fetched specialties:', data);
        setSpecialties(data);
        setFilteredSpecialties(data);
      } catch (error) {
        console.error('Failed to fetch specialists:', error);
      }
    };

    fetchSpecialties();
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 200);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = specialties.filter((doctor) =>
      doctor.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSpecialties(filtered);
  };

  //Selection of the specialty from the dropdown list
  const handleSpecialtySelect = (specialty) => {
    //To set the selected specialty in the input field
    setSearchQuery(specialty);
    //To close the specialty list
    setIsFocused(false);
  };

  //To search and redirect
  const handleSearch = () => {
    if (searchQuery) {
      console.log(searchQuery);
      router.push(`/search/${searchQuery}`)
    }
  }

  return (
    <div className='mt-10 mb-5 items-center flex flex-col gap-2 px-5'>
      <div className="flex w-full max-w-6xl items-center space-x-2 relative">
        <Input
          type="text"
          placeholder="Search for Doctors. . . ."
          className='rounded-full'
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Button type="button" className='rounded-full' onClick={handleSearch}>
          <SearchIcon className='h-4 w-4 mr-4' />
          Search
        </Button>

        {isFocused && (
          <div className="absolute top-14 bg-slate-50 border border-gray-300 rounded-lg shadow-md w-full max-w-2xl z-50">
            <ul>
              {filteredSpecialties.length > 0 ? (
                filteredSpecialties.map((doctor) => (
                  <li
                    key={doctor._id}
                    className="p-3 hover:bg-gray-100 cursor-pointer flex justify-between"
                    onClick={() => handleSpecialtySelect(doctor.specialty) } 
                  >
                    {doctor.specialty}  
                  </li>
                ))
                
              ) : (
                <li className="p-3 text-gray-500">No specialists found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
