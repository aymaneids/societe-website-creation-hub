
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
            <div className="w-24 h-1 bg-lksb-orange mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans la réalisation de vos projets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lksb-orange"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lksb-orange"
                      placeholder="Votre email"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Sujet</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lksb-orange"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lksb-orange"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-lksb-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors w-full"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <MapPin className="text-lksb-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">Adresse</h3>
                      <p className="text-gray-600">
                        MAG N27 CENTRE COMMERCIAL SOUK SEBT<br />
                        HAY ARGANA AIT MELLOUL
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Mail className="text-lksb-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <a href="mailto:lksb.sarl@gmail.com" className="text-lksb-orange hover:underline">
                        lksb.sarl@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Phone className="text-lksb-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">Téléphone</h3>
                      <p>
                        <a href="tel:+212631973422" className="text-gray-600 hover:text-lksb-orange">+212 631973422</a>
                      </p>
                      <p>
                        <a href="tel:+212776245611" className="text-gray-600 hover:text-lksb-orange">+212 776245611</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Heures d'Ouverture</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Lundi - Vendredi:</span>
                    <span>8:30 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Samedi:</span>
                    <span>9:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Dimanche:</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <iframe
              title="LKSB SARL Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27123.55242876184!2d-9.510934399999999!3d30.33644425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c6f272e5052f%3A0xd70b6dc478430dc2!2sAit%20Melloul!5e0!3m2!1sfr!2sma!4v1714966545257!5m2!1sfr!2sma"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
