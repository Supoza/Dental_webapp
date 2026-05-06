import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A292A] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent-teal text-white flex items-center justify-center font-heading font-bold">
                D+
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Dental
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Premium, pain-free dental care designed around your comfort and long-term oral health.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-accent-teal hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-accent-teal hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-accent-teal hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-accent-teal hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Treatments</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="#" className="hover:text-accent-teal transition-colors">Teeth Whitening</Link></li>
              <li><Link href="#" className="hover:text-accent-teal transition-colors">Dental Implants</Link></li>
              <li><Link href="#" className="hover:text-accent-teal transition-colors">Root Canal</Link></li>
              <li><Link href="#" className="hover:text-accent-teal transition-colors">Orthodontics & Braces</Link></li>
              <li><Link href="#" className="hover:text-accent-teal transition-colors">Smile Makeover</Link></li>
              <li><Link href="#" className="hover:text-accent-teal transition-colors">Wisdom Tooth Extraction</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Patient Links</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="#" className="hover:text-accent-teal transition-colors">Patient Portal Login</Link></li>
              <li><Link href="#" className="hover:text-accent-teal transition-colors">New Patient Documents</Link></li>
              <li><Link href="#" className="hover:text-accent-teal transition-colors">Insurance & Financing</Link></li>
              <li><Link href="#" className="hover:text-accent-teal transition-colors">Submit a Review</Link></li>
              <li><Link href="#" className="hover:text-accent-teal transition-colors">Refer a Friend</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="#about" className="hover:text-accent-teal transition-colors">Our Story & Doctors</Link></li>
              <li><Link href="#gallery" className="hover:text-accent-teal transition-colors">Smile Gallery</Link></li>
              <li><Link href="#blog" className="hover:text-accent-teal transition-colors">Health Blog</Link></li>
              <li><Link href="#" className="hover:text-accent-teal transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-accent-teal transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Dental Clinic. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">HIPAA Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
