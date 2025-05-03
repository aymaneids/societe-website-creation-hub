
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-lksb-orange bg-opacity-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
          <div className="w-24 h-1 bg-lksb-orange mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Besoin d'informations ou d'un devis pour votre projet? Notre équipe est à votre disposition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fadeIn fadeIn-delay-1">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-lksb-orange" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Adresse</h3>
            <p className="text-gray-600">
              MAG N27 CENTRE COMMERCIAL SOUK SEBT<br />
              HAY ARGANA AIT MELLOUL
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="text-lksb-orange" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Email</h3>
            <a href="mailto:lksb.sarl@gmail.com" className="text-lksb-orange hover:underline">
              lksb.sarl@gmail.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="text-lksb-orange" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Téléphone</h3>
            <p className="text-gray-600">
              <a href="tel:+212631973422" className="hover:text-lksb-orange">+212 631973422</a>
              <br />
              <a href="tel:+212776245611" className="hover:text-lksb-orange">+212 776245611</a>
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/contact" 
            className="bg-lksb-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors inline-block"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
