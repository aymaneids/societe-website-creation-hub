
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Droplet, Home, Leaf, Sun, Truck, Briefcase, Package, Shield, FileText } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl h-full">
      <CardHeader className="pb-3 pt-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-orange-50 p-3 rounded-xl text-lksb-orange">
            {icon}
          </div>
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <CardDescription className="text-gray-700 text-sm">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Travaux de Construction",
      description: "Construction de bâtiments résidentiels et commerciaux avec des matériaux de qualité.",
      icon: <Home className="h-5 w-5" />
    },
    {
      title: "Création et Gestion des Espaces Verts",
      description: "Conception, aménagement et entretien d'espaces verts pour embellir votre environnement professionnel ou résidentiel.",
      icon: <Leaf className="h-5 w-5" />
    },
    {
      title: "Négociant",
      description: "Services de négociation et d'intermédiaire pour vos projets commerciaux et industriels.",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      title: "Achat et Vente des Matériaux",
      description: "Fourniture de matériaux de construction de haute qualité pour tous vos projets.",
      icon: <Package className="h-5 w-5" />
    },
    {
      title: "Énergie Renouvelable",
      description: "Solutions d'énergie renouvelable pour réduire votre empreinte écologique.",
      icon: <Sun className="h-5 w-5" />
    },
    {
      title: "Irrigation",
      description: "Étude et réalisation de projets d'irrigation efficaces et durables.",
      icon: <Droplet className="h-5 w-5" />
    },
    {
      title: "Génie Civil",
      description: "Services de génie civil et infrastructure pour vos projets de construction.",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Installation des Pompes Solaires",
      description: "Installation de systèmes de pompage solaire efficaces pour l'irrigation et l'approvisionnement en eau.",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Étude des Projets d'Irrigation",
      description: "Conception et mise en œuvre de systèmes d'irrigation optimisés pour une gestion efficace de l'eau.",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Location d'Engins",
      description: "Location de matériel et d'engins de chantier pour vos travaux.",
      icon: <Truck className="h-5 w-5" />
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

        <div className="mx-auto max-w-6xl px-8 animate-fadeIn fadeIn-delay-1">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
              <CarouselNext className="relative static right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Services;
