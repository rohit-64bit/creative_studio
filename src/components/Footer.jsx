import React from 'react';

const Footer = () => {
  const navItems = [
    { name: 'Home', href: '/#home', hashLink: true },
    { name: 'About Us', href: '/#about', hashLink: true },
    { name: 'Portfolio', href: '/#portfolio', hashLink: true },
    { name: 'Services', href: '/#services', hashLink: true }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 p-8 py-10 xl:p-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Office Address & CTA Buttons */}
        <div className="flex flex-col gap-4 max-w-md">

          <h4 className="text-white text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-400">
            <strong>Office Address:</strong><br />
            Block C12, 13th Floor, Keventers Building<br />
            Rishra, Kolkata – 712248<br />
            West Bengal, India
          </p>
          <p className="text-sm text-gray-400">
            <strong>Phone:</strong> <a href="tel:+917595856157" className="hover:text-blue-400">+91 75958 56157</a>
          </p>

          <p className="text-sm text-gray-400">
            <strong>Email:</strong> <a href="mailto:raj@icreativestudio.shop" className="hover:text-blue-400">raj@icreativestudio.shop</a>
          </p>

        </div>

        {/* Attributions */}
        <div className="flex flex-col gap-4 max-w-md">
          <h4 className="text-white text-xl font-semibold mb-4">Attributions</h4>
          <p className="text-sm text-gray-400">
            Images and icons used on this website are sourced from free and licensed providers.
          </p>
          <p className="text-sm text-gray-400">
            Developed by Creative Studio. &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              Built with React
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;