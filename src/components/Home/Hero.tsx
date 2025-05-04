
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 pt-16 pb-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              <span className="text-lksb-orange">LKSB</span> SARL
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
              Société à responsabilité limitée
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Spécialisée dans les travaux de construction, la gestion des espaces verts, 
              et l'énergie renouvelable pour vos projets professionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-lksb-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Nos Services
              </Link>
              <Link 
                to="/contact" 
                className="border border-lksb-orange text-lksb-orange hover:bg-orange-100 font-bold py-3 px-6 rounded-md transition-colors"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
          <div className="animate-fadeIn fadeIn-delay-1">
            <img 
              src="/lovable-uploads/8c12a560-dc84-4266-9af6-74e216117497.png" 
              alt="LKSB Logo" 
              className="max-h-80 mx-auto object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 font-medium">ICE: 003665401000072</p>
            </div>
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 font-medium">CAPITAL SOCIAL: 100.000,00 DH</p>
            </div>
            <a 
              href="tel:+212631973422" 
              className="bg-lksb-orange text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
