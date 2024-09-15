import React from 'react'
import SpecialtyList from './_components/SpecialtyList'

function layout({ children }) {
  return (
    <div className='grid grid-cols-4'>
        <div className='hidden md:block'>
            <SpecialtyList />
        </div>
        <div className='col-span-3'>
            { children }
        </div>
        
    </div>
  )
}

export default layout