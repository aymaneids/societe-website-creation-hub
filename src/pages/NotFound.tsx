
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-lksb-orange mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-6">Page non trouvée</h2>
          <p className="text-gray-600 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="bg-lksb-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors inline-block"
          >
            Retour à l'Accueil
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
