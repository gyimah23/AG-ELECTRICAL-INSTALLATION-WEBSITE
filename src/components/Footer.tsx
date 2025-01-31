import React from 'react';
import { Mail, Phone, MapPin, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="gradient-bg text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold gradient-text">AG Electrical Group</span>
            </div>
            <p className="text-gray-300">Your trusted partner for professional electrical services.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 gradient-text">Contact Info</h3>
            <div className="space-y-4">
              {[
                { icon: Phone, text: '24/7 Emergency: (+233) 0549247690' },
                { icon: Mail, text: 'adamgyimah2@gmail.com' },
                { icon: MapPin, text: 'Eastern Region Ghana, Asamankese' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <item.icon className="w-5 h-5 text-yellow-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 gradient-text">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>New Building Wiring</li>
              <li>Electrical Troubleshooting</li>
              <li>Electrical Upgrades</li>
              <li>Energy Commission Certification</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 gradient-text">Working Hours</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
              <li className="text-yellow-400 font-semibold">24/7 Emergency Service Available</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} AG Electrical Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}