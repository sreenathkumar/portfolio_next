'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// MenuItem component, assuming it exists and properly renders a menu item
import Link from "next/link";
import MenuItem from "./MenuItem";


function Menu({ items }: { items: string[] }) {
  const [screenWidth, setScreenWidth] = useState<null | number>(null);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {screenWidth ? screenWidth < 768 ? (
        <MobileMenu items={items} />
      ) : (
        <ul className="flex gap-6">
          {items.map((menu, index) => (
            <MenuItem key={index} text={menu} />
          ))}
        </ul>
      ) : null}
    </>
  );
}

function MobileMenu({ items }: { items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <svg onClick={toggleMenu} className="fill-accent cursor-pointer" aria-expanded={isOpen}
        aria-controls="mobile-menu" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m7-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" /></svg>
      <motion.div
        id="mobile-menu"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 right-0 w-64 p-4 h-full flex flex-col bg-secondary shadow-lg z-50"
      >
        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" className="stroke-accent ml-auto cursor-pointer"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5" /></svg>

        {/* menu items */}
        <ul className="p-4">
          {items.map((menu, index) => (
            <MenuItem key={index} text={menu} />
          ))}
        </ul>
        <div className="flex mt-auto gap-4 justify-center text-neutral-100">
          <Link href="https://www.facebook.com/dev.sreenathkumar/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="fill-neutral-100">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
          <Link href="https://twitter.com/sreenathkumar_" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="fill-neutral-100">
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/sreenathkumar" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="fill-neutral-100">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <path d="M2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
          <Link href="https://github.com/sreenathkumar" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="fill-neutral-100">
              <g strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </g>
            </svg>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Menu;
