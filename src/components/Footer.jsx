import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Law Office of SS Advocates</h3>
            <p className="mb-2">Office Space No.309, Third floor, Plot No.9, Sector - 4, Vikash Surya Galaxy Dwarka New Delhi-110078</p>
            <p className="mb-2">+91 9266532527</p>
            <p>info@ssadvocates.co.in</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={() => handleNavigation('/')} className="hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link to="/about" onClick={() => handleNavigation('/about')} className="hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link to="/services#Patents" onClick={() => handleNavigation('/services')} className="hover:text-gray-300 transition-colors">Services</Link></li>
              <li><Link to="#contact"  className="hover:text-gray-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">Get in touch for legal insights.</p>
            <form className="flex flex-col sm:flex-row" action="https://formspree.io/f/mrbzworn" method='POST'>
              <input
                type="tel"
                name="PhoneNumber"
                placeholder="Enter Number or Email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors"
              >
                Get in Touch!
              </button>
            </form>
          </div>
        </div>
        
        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="#facebook" className="hover:text-blue-400 transition-colors">Facebook</a>
            <a href="#twitter" className="hover:text-blue-400 transition-colors">Twitter</a>
            <a href="#linkedin" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Law Offices of SS Advocates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;