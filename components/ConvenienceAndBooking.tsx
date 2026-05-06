'use client';
import { motion } from 'motion/react';
import { FileText, MessageSquareMore, Smartphone, ArrowRight, Calendar as CalendarIcon, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export function ConvenienceAndBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <section id="contact" className="py-24 bg-surface-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <h2 className="font-heading text-3xl font-bold text-primary mb-2">Book an Appointment</h2>
            <p className="text-gray-500 mb-8 font-medium">Get a callback within 10 minutes from our reception team.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">First Name</label>
                  <input suppressHydrationWarning type="text" placeholder="John" className="w-full bg-surface-muted border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all font-medium text-gray-800" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input suppressHydrationWarning type="text" placeholder="Doe" className="w-full bg-surface-muted border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all font-medium text-gray-800" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <input suppressHydrationWarning type="tel" placeholder="(555) 000-0000" className="w-full bg-surface-muted border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all font-medium text-gray-800" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Detailed Treatment (Optional)</label>
                <select suppressHydrationWarning className="w-full bg-surface-muted border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all font-medium text-gray-800 appearance-none">
                  <option value="">General Checkup & Cleaning</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="implants">Dental Implants</option>
                  <option value="braces">Orthodontics / Braces</option>
                  <option value="emergency">Emergency Care</option>
                </select>
              </div>

              <div className="space-y-2 relative">
                <label className="text-sm font-semibold text-gray-700">Preferred Date</label>
                <div className="relative">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    placeholderText="Select a date"
                    className="w-full bg-surface-muted border border-gray-200 rounded-xl px-4 py-3 pl-11 focus:outline-none focus:ring-2 focus:ring-accent-teal/50 transition-all font-medium text-gray-800"
                    minDate={new Date()}
                  />
                  <CalendarIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <button suppressHydrationWarning type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-light hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-[0.98] mt-4 flex justify-center items-center gap-2">
                Confirm Request <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1 mt-4">
                <CheckCircle className="w-4 h-4" /> Your information is securely encrypted (HIPAA Compliant)
              </p>
            </form>
          </motion.div>

          {/* Right: Tools & Convenience */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full flex flex-col justify-center"
          >
            <span className="text-accent-teal font-semibold tracking-wider uppercase text-sm mb-3 block">Modern Convenience</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">Designed For Your Busy Life</h2>
            <p className="text-gray-600 text-lg mb-12">
              We leverage modern technology to make your visit as smooth as possible—from the moment you book to aftercare support.
            </p>

            <div className="space-y-8">
              
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-2">Online Scheduling</h4>
                  <p className="text-gray-600">Choose your exact time slot and doctor directly through our portal, 24/7 without making a call.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-2">Digital Patient Forms</h4>
                  <p className="text-gray-600">Fill out your medical history securely from your phone before arriving. No clipboards in the waiting room.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                  <MessageSquareMore className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-2">AI Assistant & Tele-dentistry</h4>
                  <p className="text-gray-600">Not sure if it&apos;s an emergency? Use our 24/7 AI chat system or book a quick virtual consultation.</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
