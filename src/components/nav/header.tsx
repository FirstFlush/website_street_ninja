'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/container'
import Logo from '../special/logo'
import { NavLink } from '@/components/nav/nav-link'
import { MapPin, MessageCircle } from 'lucide-react'
import { useMobileNav } from '@/providers/mobile-nav'
import { Squash as Hamburger } from 'hamburger-react'
import MobileNavigation from './mobile-nav'

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const { expanded, toggleNavMenu, closeNavMenu } = useMobileNav()

  const handleClick = () => {
    expanded && closeNavMenu()
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // Change at 50px scroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header
      className={`fixed top-0 left-0 w-full z-700 transition-[background-color,backdrop-filter] duration-300 shadow-xl ${
        isScrolled
          ? ' bg-background-dark/50 backdrop-blur-sm'
          : 'bg-background-dark/70'
      }`}
    >
      <Container>
        <nav onClick={handleClick} className="relative z-600 flex justify-between py-3">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-6">
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#how-it-works">How it works</NavLink>
              <NavLink href="/try-it-out">Try it out</NavLink>
              <NavLink href="/map">
                <MapPin className="inline-block align-text-bottom" height={20} width={20} /><span className="ml-1">Map</span>
              </NavLink>
            </div>
            <Link href="/contact">
              <Button variant="solid" color="primary">
                  <MessageCircle height={20} width={20}/><span className="ml-1">Contact</span>
              </Button> 
            </Link>               
            <div className="mr-1 md:hidden">
              <Hamburger color="white" size={24} toggled={expanded} toggle={toggleNavMenu} />
            </div>
            {/* <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div> */}
          </div>
        </nav>
      </Container>
      <MobileNavigation />
    </header>
  )
}

export default Header;
