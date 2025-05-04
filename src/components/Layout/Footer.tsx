
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/lovable-uploads/d42890a4-e8f0-46af-a5a7-d16dcf7d6571.png" alt="LKSB Logo" className="h-16" />
            </Link>
            <p className="text-gray-400 mb-4">
              LKSB SARL - Société à responsabilité limitée
            </p>
            <p className="text-gray-400 mb-2">
              CAPITAL SOCIAL : 100.000,00 DH
            </p>
            <p className="text-gray-400">
              ICE : 003665401000072
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-lksb-orange pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-lksb-orange mr-2 flex-shrink-0 mt-1" size={18} />
                <span>MAG N27 CENTRE COMMERCIAL SOUK SEBT HAY ARGANA AIT MELLOUL</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-lksb-orange mr-2" size={18} />
                <a href="mailto:lksb.sarl@gmail.com" className="hover:text-lksb-orange transition-colors">
                  lksb.sarl@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="text-lksb-orange mr-2" size={18} />
                <a href="tel:+212631973422" className="hover:text-lksb-orange transition-colors">
                  +212 631973422
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="text-lksb-orange mr-2" size={18} />
                <a href="tel:+212776245611" className="hover:text-lksb-orange transition-colors">
                  +212 776245611
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="text-lksb-orange mr-2" size={18} />
                <span>Site web: coming soon</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-lksb-orange pb-2">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-lksb-orange transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-lksb-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-lksb-orange transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-lksb-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} LKSB SARL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
