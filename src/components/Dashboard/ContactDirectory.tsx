
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Contact } from 'lucide-react';

const ContactDirectory: React.FC = () => {
  return (
    <Card className="border-dashed border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Contact className="h-5 w-5" />
          Répertoire de Contacts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
          <h3 className="text-xl font-medium mb-2">Fonctionnalité à venir</h3>
          <p className="max-w-md">
            Le système de gestion intégré des numéros de téléphone sera bientôt disponible. 
            Vous pourrez organiser vos contacts professionnels à partir de cette interface.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactDirectory;
