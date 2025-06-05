import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/logo2.png';
import { Link, useLocation } from 'react-router-dom';
import { calendlyLink } from './../services/Helpers';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '/home', hashLink: true },
    { name: 'About Us', href: '/about', hashLink: false },
    { name: 'Portfolio', href: '/#portfolio', hashLink: true },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Web Development', href: '/services#web-dev' },
        { name: 'Graphic Design', href: '/services#graphic-design' },
        { name: 'Branding', href: '/services#branding' },
        { name: 'Marketing', href: '/services#marketing' },
      ]
    }
  ];

  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const mobileMenuOpenRef = useRef(menuOpen);
  const location = useLocation();

  useEffect(() => {
    mobileMenuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    let timeoutId;
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-parent')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        <Link to='/' className='text-white font-medium text-xl flex gap-1 items-center'>
          <img src={Logo} alt="Logo" className='w-10 md:w-12' />
          <p>
            Creative<span className='text-blue-400'>Studio</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden lg:flex items-center gap-10'>
          <nav className='flex gap-6 relative'>
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div key={index} className="relative dropdown-parent">
                  <button
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                  >
                    {item.name}
                  </button>
                  {activeDropdown === index && (
                    <div className="absolute bg-white text-sm text-black mt-2 rounded shadow-lg min-w-[180px] z-20">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.href}
                  className='hover:text-blue-400 transition-colors duration-300'
                >
                  {item.name}
                </Link>
              )
            )}
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
        className={`lg:hidden fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-sm text-white transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='flex justify-between items-center p-8 py-10 xl:p-20'>
          <Link to='/' className='text-white font-medium text-xl flex gap-1 items-center'>
            <img src={Logo} alt="Logo" className='w-10 md:w-12' />
            <p>
              Creative<span className='text-blue-400'>Studio</span>
            </p>
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className='flex flex-col items-center gap-6 py-6'>
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={index} className="w-full text-center">
                <div className="text-lg font-semibold mb-1">{item.name}</div>
                <div className="flex flex-col items-center gap-1 mb-4">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.href}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className='text-lg hover:text-blue-400 transition-colors duration-300'
              >
                {item.name}
              </Link>
            )
          )}

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
