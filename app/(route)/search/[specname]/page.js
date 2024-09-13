'use client'
import React, { useEffect } from 'react'

function Search({ params }) {

  useEffect(() => {
    console.log(params.specname)
  },[])
  return (
    <div>Search</div>
  )
}

export default Search