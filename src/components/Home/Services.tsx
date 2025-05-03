
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-lksb-orange">
      <div className="bg-orange-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <span className="text-3xl text-lksb-orange">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Travaux de Construction",
      description: "Construction de bâtiments résidentiels et commerciaux avec des matériaux de qualité.",
      icon: "🏗️"
    },
    {
      title: "Gestion d'Espaces Verts",
      description: "Création et entretien d'espaces verts professionnels adaptés à vos besoins.",
      icon: "🌱"
    },
    {
      title: "Énergie Renouvelable",
      description: "Solutions d'énergie renouvelable pour réduire votre empreinte écologique.",
      icon: "☀️"
    },
    {
      title: "Irrigation",
      description: "Étude et réalisation de projets d'irrigation efficaces et durables.",
      icon: "💧"
    },
    {
      title: "Génie Civil",
      description: "Services de génie civil et infrastructure pour vos projets de construction.",
      icon: "🔧"
    },
    {
      title: "Location d'Engins",
      description: "Location de matériel et d'engins de chantier pour vos travaux.",
      icon: "🚜"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <div className="w-24 h-1 bg-lksb-orange mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services dans le domaine de la construction et des espaces verts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn fadeIn-delay-1">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
