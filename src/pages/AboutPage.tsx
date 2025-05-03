
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">À Propos de Nous</h1>
            <div className="w-24 h-1 bg-lksb-orange mx-auto mb-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/placeholder.svg"
                alt="LKSB Team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
              <p className="text-gray-600 mb-4">
                LKSB SARL est une société à responsabilité limitée fondée par M. ID SIDI BAHA AYMANE et M. LOUAKRI FOUAD,
                qui ont décidé d'unir leurs compétences et leur expertise pour créer une entreprise spécialisée dans le domaine
                de la construction et de la gestion des espaces verts.
              </p>
              <p className="text-gray-600">
                Avec un capital social de 100.000,00 DH, notre entreprise s'est rapidement imposée comme un acteur fiable et
                professionnel dans le secteur, offrant à nos clients des solutions complètes et de qualité pour tous leurs projets.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Notre Mission</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 text-center">
                Notre mission est de fournir des services de construction, d'aménagement et d'entretien d'espaces verts
                de haute qualité, tout en favorisant des solutions durables et respectueuses de l'environnement.
                Nous nous engageons à satisfaire nos clients en offrant un travail soigné, professionnel et dans le respect des délais.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl text-lksb-orange mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-gray-600">
                Une équipe de professionnels qualifiés dans tous nos domaines d'activité.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl text-lksb-orange mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-2">Qualité</h3>
              <p className="text-gray-600">
                Un engagement sans compromis pour la qualité dans tous nos projets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl text-lksb-orange mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">Fiabilité</h3>
              <p className="text-gray-600">
                Respect des délais et des engagements pour une satisfaction client maximale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl text-lksb-orange mb-4">♻️</div>
              <h3 className="text-xl font-bold mb-2">Durabilité</h3>
              <p className="text-gray-600">
                Adoption de solutions écologiques et durables pour l'environnement.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Informations Légales</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-lksb-orange">Détails de la Société</h3>
                <ul className="space-y-2">
                  <li><span className="font-medium">Nom:</span> SOCIETE LKSB SARL</li>
                  <li><span className="font-medium">Forme juridique:</span> Société à responsabilité limitée</li>
                  <li><span className="font-medium">Capital social:</span> 100.000,00 DHS</li>
                  <li><span className="font-medium">ICE:</span> 003665401000072</li>
                  <li>
                    <span className="font-medium">Siège social:</span> MAGASIN N° 27 CENTRE COMMERCIAL SOUK SEBT HAY ARGANA AIT MELLOUL
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-lksb-orange">Fondateurs</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Monsieur ID SIDI BAHA AYMANE</p>
                    <p className="text-gray-600">Nationalité: marocaine</p>
                  </li>
                  <li>
                    <p className="font-medium">Monsieur LOUAKRI FOUAD</p>
                    <p className="text-gray-600">Nationalité: marocaine</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
