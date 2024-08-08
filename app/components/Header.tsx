import Image from 'next/image'
import React from 'react'
import Logo from './ui/Logo'
import Menu from './ui/Menu'

function Header({ logo, menus }: { logo: { url: string, alt: string }, menus: string[] }) {
   return (
      <header className="fixed w-full top-0 p-3 md:items-center bg-secodary ">
         <nav className="container flex justify-between items-center mx-auto md:px-4 cursor-pointer">
            <div className="logo">
               <Logo url={logo?.url} width={80} height={56} alt={logo?.alt} />
            </div>
            <Menu items={menus || ['About', 'Contact', 'Projects', 'Featured']} />
         </nav>

      </header>
   )
}

export default Header