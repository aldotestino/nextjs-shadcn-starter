import { Waypoints } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './ModeToggle';

function Header() {
  return (
    <header className='border-b py-4'>
      <div className='px-4 sm:container w-full max-w-screen-xl flex justify-between'>
        <Link href='/' className='flex items-center gap-2'>
          <Waypoints className='w-6 h-6' />
          <span className='text-xl italic font-semibold'>NSS</span>
        </Link>
        <div className='flex items-center gap-2'>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;