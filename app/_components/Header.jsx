import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/explore'
        },
        {
            id: 3,
            name: 'About',
            path: '/'
        },
        {
            id: 4,
            name: 'Services',
            path: '/'
        },
        {
            id: 5,
            name: 'History',
            path: '/'
        },
        {
            id: 6,
            name: 'Blog',
            path: '/'
        },
        {
            id: 7,
            name: 'Contact Us',
            path: '/'
        },
    ]


  return (
    <div className='flex items-center justify-between p-4 shadow-md'>
        <div className='flex items-center gap-10' >
        <Image
        src='/images/IMG_0888.jpg'
        width={120}
        height={80}
          alt="Logo"
        />

        <ul className='md:flex gap-8 hidden' >
            {Menu.map((item, index) => (
                <Link href={item.path}>
                <li key={item.id} className='hover:text-red-500 cursor-pointer hover:scale-125 transition-all ease-in-out'>{item.name}</li>
                </Link>
            ))}
        </ul>
        </div>
        <Button className='bg-cyan-900'>Get Started</Button>
    </div>
  )
}

export default Header