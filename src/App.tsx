import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      <Services />
      <BookingForm />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;