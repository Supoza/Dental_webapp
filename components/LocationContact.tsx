'use client';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export function LocationContact() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Contact Info */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-accent-teal font-semibold tracking-wider uppercase text-sm mb-3 block">Visit Us</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-12">Conveniently Located in Downtown</h2>

            <div className="space-y-8">
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-1">Clinic Address</h4>
                  <p className="text-gray-600 mb-3">123 Premium Medical Blvd, Suite 400<br/>San Francisco, CA 94103</p>
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-accent-teal hover:text-primary transition-colors">
                    Get Directions <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-1">Operating Hours</h4>
                  <p className="text-gray-600">
                    <span className="inline-block w-24">Mon - Fri:</span> 8:00 AM - 6:00 PM<br/>
                    <span className="inline-block w-24">Saturday:</span> 9:00 AM - 2:00 PM<br/>
                    <span className="inline-block w-24">Sunday:</span> Emergency Only
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-1">Contact</h4>
                  <p className="text-gray-600 mb-1"><strong>Phone:</strong> (555) 123-4567</p>
                  <p className="text-gray-600"><strong>Email:</strong> care@dental.com</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right: Map Placeholder/Image */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-100"
          >
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13731.406714063!2d76.7354675871582!3d30.63813740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb874031f01d%3A0xf6a6687a50c1bdca!2sDr.%20Sharma%20Dental%20hub!5e0!3m2!1sen!2sin!4v1777969708775!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            
            <div className="absolute bottom-6 left-6 right-6 glass px-6 py-4 rounded-2xl flex items-center justify-between pointer-events-none">
              <div>
                <p className="font-bold text-primary">Dental Clinic</p>
                <p className="text-sm text-gray-600">Downtown Medical District</p>
              </div>
              <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary-light transition-colors pointer-events-auto">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
