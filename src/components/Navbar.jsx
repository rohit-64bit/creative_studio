import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import { calendlyLink } from './../services/Helpers';
import { Menu, X } from 'lucide-react'; // Icon from lucide-react (optional, use any icon lib)

const Navbar = () => {

  const navItems = [
    { name: 'Home', href: '/#home', hashLink: true },
    { name: 'About Us', href: '/about', hashLink: true },
    { name: 'Portfolio', href: '/#portfolio', hashLink: true },
    { name: 'Services', href: '/#services', hashLink: true }
    // { name: 'Testimonials', href: '#', hashLink: true }
  ]

  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileMenuOpenRef = useRef(menuOpen);

  useEffect(() => {
    mobileMenuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    let timeoutId;

    // Handle scroll event to toggle header visibility
    // and manage the scrolling state

    if (scrolling && menuOpen) {
      setMenuOpen(false); // Close menu when scrolling
    }

    const handleScroll = () => {
      setScrolling(true);

      if (mobileMenuOpenRef.current) {
        setMenuOpen(false);
      }

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolling(false);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const isTransparent = typeof window !== 'undefined' && window.scrollY === 0;

  return (
    <div className='fixed top-0 left-0 w-full z-50'>
      <header
        className={`
          bg-black text-white px-6 md:px-20 py-4 flex justify-between items-center transition-all duration-300 ease-in-out
          ${scrolling ? '-translate-y-40' : 'translate-y-0'}
          ${isTransparent ? 'bg-black' : 'bg-black bg-opacity-60 backdrop-blur-md'}
        `}
      >
        {/* Logo */}
        <Link
          to='/'
          className='text-white font-medium text-xl flex gap-1 items-center'
        >
          <img src={Logo} alt="Logo" className='w-10 md:w-12' />
          <p>
            Creative<span className='text-blue-400'>Studio</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden lg:flex items-center gap-10'>
          <nav className='flex gap-6'>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.hashLink ? item.href : '#'}
                className='hover:text-blue-400 transition-colors duration-300'
              >
                {item.name}
              </a>
            ))}
          </nav>

          <Link
            to={calendlyLink}
            className='bg-white hidden lg:block text-black px-4 py-2 rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-300'
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className='lg:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-sm text-white transition-transform duration-300 z-40 ${menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >

        <div className='flex justify-between items-center p-8 py-10 xl:p-20'>

          <Link
            to='/'
            className='text-white font-medium text-xl flex gap-1 items-center'
          >
            <img src={Logo} alt="Logo" className='w-10 md:w-12' />
            <p>
              Creative<span className='text-blue-400'>Studio</span>
            </p>
          </Link>

          <div className='lg:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>

        <nav className='flex flex-col items-center gap-6 py-6'>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.hashLink ? item.href : '#'}
              onClick={() => setMenuOpen(false)}
              className='text-lg hover:text-blue-400 transition-colors duration-300'
            >
              {item.name}
            </Link>
          ))}
          <Link
            to={calendlyLink}
            onClick={() => setMenuOpen(false)}
            className='bg-white text-black px-6 py-2 rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-300'
          >
            Book a Call
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;