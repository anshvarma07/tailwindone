import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const Quicknav = ({ navItems }) => {
  const [isFloating, setIsFloating] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = isFloating ? 120 : 80; // Adjust offset based on nav state
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 100) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  const renderNavItems = () => (
    <div className={`grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 ${isFloating ? 'p-4' : ''}`}>
      {navItems.map((item, index) => (
        <motion.button
          key={index}
          onClick={() => handleScroll(item.href)}
          className={`text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
            isFloating ? 'bg-[#1d4b45] hover:bg-[#2a6b62] focus:ring-[#2a6b62]' : 'hover:bg-[#2a6b62] focus:ring-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.text}
        </motion.button>
      ))}
    </div>
  );

  return (
    <>
      {!isFloating && (
        <div className="bg-[#1d4b45] py-4">
          <div className="max-w-screen-xl mx-auto px-4">
            {renderNavItems()}
          </div>
        </div>
      )}
      <AnimatePresence>
        {isFloating && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[100px] left-0 right-0 z-50 px-4"
          >
            <div className="max-w-screen-xl mx-auto">
              <motion.div
                className={`bg-gradient-to-r from-[#1d4b45] to-[#2a6b62] rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-96' : 'max-h-12'
                }`}
              >
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 text-white hover:bg-[#1d4b45] transition-colors duration-300"
                >
                  <span className="font-bold">Quick Navigation</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronUp size={24} />
                  </motion.div>
                </button>
                {isOpen && renderNavItems()}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Quicknav;
