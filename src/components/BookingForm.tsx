import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { services } from '../data/services';
import { BookingFormData } from '../types';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function BookingForm() {
  const [phone, setPhone] = useState('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    const serviceID = 'service_f2k8ouv';
    const templateID = 'template_j324cge';
    const publicKey = 'aOEPjwxwIs6bRsOu9';

    const emailData = {
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
        to_name: "AG Electrical Team",  
        from_name: data.name,          
        from_email: data.email,        
        from_location: data.location,  
        from_phone: phone,             
        from_service: data.service,    
        message: data.message , 
        reply_to: data.email        
      }
    };

    try {
      await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData, {
        headers: { 'Content-Type': 'application/json' }
      });

      toast.success('Booking submitted successfully!');
      reset();
      setPhone('');
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to submit booking. Please try again.');
    }
  };

  return (
    <section className="py-24 gradient-bg" id="booking">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Book an <span className="gradient-text">Appointment</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="glass-effect p-8 rounded-2xl space-y-6">
            
            {[
              { label: 'Name', type: 'text', name: 'name' },
              { label: 'Email', type: 'email', name: 'email' },
              { label: 'Location', type: 'text', name: 'location' }
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-white mb-2">{field.label}</label>
                <input
                  type={field.type}
                  {...register(field.name as keyof BookingFormData, { 
                    required: `${field.label} is required`,
                    ...(field.type === 'email' && {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })
                  })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
                />
                {errors[field.name as keyof BookingFormData] && (
                  <p className="text-red-400 text-sm mt-1">{errors[field.name as keyof BookingFormData]?.message}</p>
                )}
              </div>
            ))}

            
            <div>
              <label className="block text-white mb-2">Phone Number</label>
              <PhoneInput
                country={'gh'}
                value={phone}
                onChange={setPhone}
                containerClass="!w-full"
                inputClass="!w-full !py-3 !px-4 !bg-white/10 !text-white"
                buttonClass="!bg-white/10 !border-white/20"
                dropdownClass="!bg-gray-800 !text-white"
              />
            </div>

            
            <div>
              <label className="block text-white mb-2">Service Required</label>
              <select
                {...register('service', { required: 'Please select a service' })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-400 text-white"
              >
                <option value="" className="bg-blue-400">Select a service</option>
                {services.map(service => (
                  <option key={service.id} value={service.title} className="bg-blue-500">
                    {service.title}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>}
            </div>

            
            <div>
              <label className="block text-white mb-2">Additional Details</label>
              <textarea
                {...register('message')}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-400 text-white"
                rows={4}
                placeholder="Please provide any additional details about your electrical needs"
              ></textarea>
            </div>

          
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-4 px-6 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
