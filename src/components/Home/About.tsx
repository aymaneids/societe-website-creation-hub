
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Construction work"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="animate-fadeIn fadeIn-delay-1">
            <h2 className="text-3xl font-bold mb-4">À Propos de LKSB SARL</h2>
            <div className="w-16 h-1 bg-lksb-orange mb-6"></div>
            <p className="text-gray-600 mb-4">
              Fondée avec l'ambition de devenir un leader dans le secteur de la construction et de la gestion d'espaces verts,
              LKSB SARL est une entreprise spécialisée offrant des services de haute qualité.
            </p>
            <p className="text-gray-600 mb-6">
              Avec un capital social de 100.000,00 DH et une équipe de professionnels qualifiés,
              nous sommes engagés à fournir des solutions complètes et durables pour tous vos projets.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <span className="text-lksb-orange text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-medium">Professionnalisme</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <span className="text-lksb-orange text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-medium">Qualité</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <span className="text-lksb-orange text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-medium">Innovation</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <span className="text-lksb-orange text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-medium">Durabilité</h3>
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              className="bg-lksb-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors inline-block"
            >
              En Savoir Plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
