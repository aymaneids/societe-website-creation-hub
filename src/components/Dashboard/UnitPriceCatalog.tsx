
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Receipt } from 'lucide-react';

const UnitPriceCatalog: React.FC = () => {
  return (
    <Card className="border-dashed border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Receipt className="h-5 w-5" />
          Catalogue des Prix Unitaires
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
          <h3 className="text-xl font-medium mb-2">Fonctionnalité à venir</h3>
          <p className="max-w-md">
            Le système complet de gestion des prix unitaires sera bientôt disponible. 
            Vous pourrez créer, organiser et mettre à jour votre catalogue de prix pour vos devis.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UnitPriceCatalog;
