'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/container'
import Logo from '@/components/logo'
import { NavLink } from '@/components/nav/nav-link'
import { MapPin } from 'lucide-react'
import MobileNavigation from './mobile-nav'
import clsx from 'clsx'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // Change at 50px scroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 shadow-xl ${
        isScrolled
          ? ' bg-background-dark/50 backdrop-blur-sm'
          : 'bg-background-dark/70'
      }`}
    >
      <Container>
        <nav className="relative z-50 flex justify-between py-4">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-6">
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#how-it-works">How it works</NavLink>
              <NavLink href="#next-steps">Next steps</NavLink>
              <NavLink href="#get-involved">Get involved</NavLink>
            </div>
            <Link href="/map">
              <Button variant="solid" color="primary">
                  <MapPin height={20} width={20} /> <span className="ml-2">Map</span>
              </Button> 
            </Link>               
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header;
