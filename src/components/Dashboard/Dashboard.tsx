
import React, { useState } from 'react';
import { 
  SidebarProvider,
  Sidebar, 
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar";
import { User, FileText, Contact, Receipt } from 'lucide-react';
import UserProfile from './UserProfile';
import DevisManagement from './DevisManagement';
import ContactDirectory from './ContactDirectory';
import UnitPriceCatalog from './UnitPriceCatalog';

type MenuSection = 'profile' | 'devis' | 'contacts' | 'prices';

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<MenuSection>('profile');

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="flex w-full min-h-screen">
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton 
                        onClick={() => setActiveSection('profile')} 
                        isActive={activeSection === 'profile'}
                        tooltip="Profil Utilisateur"
                      >
                        <User />
                        <span>Profil Utilisateur</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    
                    <SidebarMenuItem>
                      <SidebarMenuButton 
                        onClick={() => setActiveSection('devis')} 
                        isActive={activeSection === 'devis'}
                        tooltip="Gestion des Devis"
                      >
                        <FileText />
                        <span>Gestion des Devis</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    
                    <SidebarMenuItem>
                      <SidebarMenuButton 
                        onClick={() => setActiveSection('contacts')} 
                        isActive={activeSection === 'contacts'}
                        tooltip="Répertoire de Contacts"
                      >
                        <Contact />
                        <span>Répertoire de Contacts</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    
                    <SidebarMenuItem>
                      <SidebarMenuButton 
                        onClick={() => setActiveSection('prices')} 
                        isActive={activeSection === 'prices'}
                        tooltip="Catalogue Prix Unitaires"
                      >
                        <Receipt />
                        <span>Catalogue Prix Unitaires</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          
          <SidebarInset className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {activeSection === 'profile' && 'Profil Utilisateur'}
                {activeSection === 'devis' && 'Gestion des Devis'}
                {activeSection === 'contacts' && 'Répertoire de Contacts'}
                {activeSection === 'prices' && 'Catalogue Prix Unitaires'}
              </h1>
              <SidebarTrigger />
            </div>
            
            {activeSection === 'profile' && <UserProfile />}
            {activeSection === 'devis' && <DevisManagement />}
            {activeSection === 'contacts' && <ContactDirectory />}
            {activeSection === 'prices' && <UnitPriceCatalog />}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
