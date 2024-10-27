import React, { useState } from 'react';
import { 
  Phone,
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ChevronRight,
  X
} from 'lucide-react';

const FloatingSocialButtons = () => {
  const [isOpen, setIsOpen] = useState(true);

  const socialLinks = [
    {
      name: 'Phone',
      icon: <Phone size={20} />,
      link: 'tel:+1234567890',
      color: 'bg-green-500'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={20} />,
      link: 'https://wa.me/1234567890',
      color: 'bg-green-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      link: 'https://linkedin.com/company/yourcompany',
      color: 'bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      link: 'https://twitter.com/yourcompany',
      color: 'bg-blue-400'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      link: 'https://instagram.com/yourcompany',
      color: 'bg-pink-500'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      link: 'https://facebook.com/yourcompany',
      color: 'bg-blue-500'
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 mb-2 rounded-l-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
        aria-label={isOpen ? 'Close social menu' : 'Open social menu'}
      >
        {isOpen ? <X size={20} /> : <ChevronRight size={20} />}
      </button>

      {/* Social Links Container */}
      <div className={`flex flex-col transition-all duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center mb-2 px-4 py-2 text-white ${social.color} hover:opacity-90 transition-opacity rounded-l-lg group min-w-[40px] md:min-w-[140px]`}
          >
            <span className="flex items-center justify-center">{social.icon}</span>
            <span className="hidden md:block ml-2">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingSocialButtons;