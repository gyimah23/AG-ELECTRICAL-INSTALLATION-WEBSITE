import React from 'react';
import { Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Zap className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">AG Electrical Group</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-yellow-500">Services</a>
            <a href="#about" className="text-gray-700 hover:text-yellow-500">About</a>
            <a href="#booking" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}