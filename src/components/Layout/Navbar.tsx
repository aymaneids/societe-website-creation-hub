import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img alt="LKSB Logo" className="h-12" src="/lovable-uploads/c680d51d-065a-484d-9340-ef73315cbe36.png" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-lksb-orange transition-colors font-medium">
            Accueil
          </Link>
          <Link to="/services" className="text-gray-800 hover:text-lksb-orange transition-colors font-medium">
            Services
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-lksb-orange transition-colors font-medium">
            À Propos
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-lksb-orange transition-colors font-medium">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-lksb-orange transition-colors px-2 py-1" onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-lksb-orange transition-colors px-2 py-1" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-lksb-orange transition-colors px-2 py-1" onClick={() => setIsOpen(false)}>
              À Propos
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-lksb-orange transition-colors px-2 py-1" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>}
    </header>;
};
export default Navbar;