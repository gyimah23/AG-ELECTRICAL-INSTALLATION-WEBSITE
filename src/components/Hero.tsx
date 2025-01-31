import React from 'react';
import { Bolt, Shield, Clock, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen gradient-bg text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
          alt="Electrical Services"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Powering Your <span className="gradient-text">Future</span>
          </h1>
          <p className="text-xl mb-12 text-gray-200">Your trusted partner for all electrical needs. Licensed, insured, and committed to excellence.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Bolt, text: 'Expert Service' },
              { icon: Shield, text: 'Licensed & Insured' },
              { icon: Clock, text: '24/7 Support' },
              { icon: Award, text: 'Certified Team' }
            ].map((item, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl hover-lift">
                <item.icon className="w-10 h-10 mb-4 mx-auto text-yellow-400" />
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}