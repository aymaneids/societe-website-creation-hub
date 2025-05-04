
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Award, Bookmark, Briefcase, Droplet, FileText, Home, Leaf, Package, Shield, Sun, Truck } from 'lucide-react';

const Service: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="pb-3 pt-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-orange-50 p-3 rounded-xl text-lksb-orange">
            {icon}
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <p className="text-gray-700 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Travaux Divers De Construction",
      description: "Réalisation de projets de construction résidentielle et commerciale avec une attention particulière aux détails et à la qualité des matériaux utilisés.",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Création et Gestion des Espaces Verts",
      description: "Conception, aménagement et entretien d'espaces verts pour embellir votre environnement professionnel ou résidentiel.",
      icon: <Leaf className="h-5 w-5" />,
    },
    {
      title: "Négociant",
      description: "Services de négociation et d'intermédiaire pour vos projets commerciaux et industriels.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Achat et Vente des Matériaux de Construction",
      description: "Fourniture de matériaux de construction de haute qualité pour tous vos projets, avec un service de conseil pour vous guider dans vos choix.",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Location d'Engins",
      description: "Location de matériel et d'engins de chantier adaptés à vos besoins spécifiques pour faciliter vos travaux.",
      icon: <Truck className="h-5 w-5" />,
    },
    {
      title: "Génie Civil et Corps d'État",
      description: "Expertise en génie civil pour la réalisation de vos projets d'infrastructure et de construction.",
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "Étude, Aménagement et Entretien des Espaces Verts",
      description: "Services complets d'étude, d'aménagement et d'entretien pour créer des espaces verts durables et esthétiques.",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Énergie Renouvelable",
      description: "Solutions d'énergie renouvelable pour réduire votre empreinte écologique et vos coûts énergétiques sur le long terme.",
      icon: <Sun className="h-5 w-5" />,
    },
    {
      title: "Installation des Pompes Solaires",
      description: "Installation de systèmes de pompage solaire efficaces pour l'irrigation et l'approvisionnement en eau.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Étude et Réalisation des Projets d'Irrigation",
      description: "Conception et mise en œuvre de systèmes d'irrigation optimisés pour une gestion efficace de l'eau.",
      icon: <Droplet className="h-5 w-5" />,
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
