import React from 'react';
import { Facebook, Instagram, Linkedin, Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-yellow-400" />
            <span className="text-2xl font-bold gradient-text">AG Electrical group</span>
          </div>
          <div className="flex space-x-6">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/adam-gyimah-72954b289', hoverColor: 'hover:text-blue-400' },
              { icon: Instagram, href: 'https://www.instagram.com/ameen.khalid.9469', hoverColor: 'hover:text-pink-400' },
              { icon: Facebook, href: 'https://www.facebook.com/ameen.khalid.9469', hoverColor: 'hover:text-blue-400' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white/70 ${social.hoverColor} transition-colors duration-300`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}