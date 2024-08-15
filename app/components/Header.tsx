import Logo from './ui/Logo'
import Menu from './ui/Menu'

function Header({ logo, menus }: { logo: { url: string, alt: string }, menus: string[] }) {
   return (
      <header className="sticky w-full top-0 p-3 bg-secondary z-20 md:items-center md:px-6">
         <nav className="container flex justify-between items-center mx-auto">
            <div className="logo">
               <Logo url={logo?.url} width={80} height={56} alt={logo?.alt} />
            </div>
            <Menu items={menus || ['About', 'Contact', 'Projects', 'Featured']} />
         </nav>

      </header>
   )
}

export default Header