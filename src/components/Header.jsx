import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import img2 from '../Assets/logo.jpeg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '#footer', isScroll: true }
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-[#235951] p-4 sticky top-0 z-50">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center">
        <Link to="/" className="w-[40%] md:w-[18%]">
          <img src={img2} alt="Logo" className="max-h-16" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.isScroll ? (
                  <a
                    href={item.path}
                    onClick={handleContactClick}
                    className="text-white hover:text-emerald-300 transition-colors duration-300 relative group cursor-pointer"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="text-white hover:text-emerald-300 transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl md:hidden"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`md:hidden fixed top-[76px] right-0 bottom-0 left-0 z-40 bg-[#235951] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.isScroll ? (
                <a
                  href={item.path}
                  onClick={handleContactClick}
                  className="text-white text-xl hover:text-emerald-300 transition-colors duration-300 relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  to={item.path}
                  className="text-white text-xl hover:text-emerald-300 transition-colors duration-300 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;