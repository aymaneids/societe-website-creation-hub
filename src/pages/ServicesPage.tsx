
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';

const Service: React.FC<{ title: string; description: string; icon: string }> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          <span className="text-3xl text-lksb-orange">{icon}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Travaux Divers De Construction",
      description: "Réalisation de projets de construction résidentielle et commerciale avec une attention particulière aux détails et à la qualité des matériaux utilisés.",
      icon: "🏗️",
    },
    {
      title: "Création et Gestion des Espaces Verts",
      description: "Conception, aménagement et entretien d'espaces verts pour embellir votre environnement professionnel ou résidentiel.",
      icon: "🌱",
    },
    {
      title: "Négociant",
      description: "Services de négociation et d'intermédiaire pour vos projets commerciaux et industriels.",
      icon: "🤝",
    },
    {
      title: "Achat et Vente des Matériaux de Construction",
      description: "Fourniture de matériaux de construction de haute qualité pour tous vos projets, avec un service de conseil pour vous guider dans vos choix.",
      icon: "🧱",
    },
    {
      title: "Location d'Engins",
      description: "Location de matériel et d'engins de chantier adaptés à vos besoins spécifiques pour faciliter vos travaux.",
      icon: "🚜",
    },
    {
      title: "Génie Civil et Corps d'État",
      description: "Expertise en génie civil pour la réalisation de vos projets d'infrastructure et de construction.",
      icon: "🔧",
    },
    {
      title: "Étude, Aménagement et Entretien des Espaces Verts",
      description: "Services complets d'étude, d'aménagement et d'entretien pour créer des espaces verts durables et esthétiques.",
      icon: "🌿",
    },
    {
      title: "Énergie Renouvelable",
      description: "Solutions d'énergie renouvelable pour réduire votre empreinte écologique et vos coûts énergétiques sur le long terme.",
      icon: "♻️",
    },
    {
      title: "Installation des Pompes Solaires",
      description: "Installation de systèmes de pompage solaire efficaces pour l'irrigation et l'approvisionnement en eau.",
      icon: "☀️",
    },
    {
      title: "Étude et Réalisation des Projets d'Irrigation",
      description: "Conception et mise en œuvre de systèmes d'irrigation optimisés pour une gestion efficace de l'eau.",
      icon: "💧",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
            <div className="w-24 h-1 bg-lksb-orange mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              LKSB SARL vous propose une gamme complète de services pour répondre à tous vos besoins en matière de construction et d'aménagement d'espaces verts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Service
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Besoin d'un service sur mesure?</h2>
            <p className="text-gray-600 mb-6">
              Notre équipe est à votre disposition pour étudier vos besoins spécifiques et vous proposer une solution adaptée.
            </p>
            <a
              href="/contact"
              className="bg-lksb-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors inline-block"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesPage;
