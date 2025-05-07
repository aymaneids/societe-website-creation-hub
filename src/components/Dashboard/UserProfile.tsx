
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { UserRound, Mail, MapPin, Edit } from 'lucide-react';

interface UserData {
  fullName: string;
  companyName: string;
  email: string;
  professionalTitle: string;
  location: string;
  bio: string;
}

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    fullName: "Ahmed Benkhadra",
    companyName: "LKSB SARL",
    email: "contact@lksb.ma",
    professionalTitle: "Directeur Général",
    location: "Casablanca, Maroc",
    bio: "Spécialiste en travaux de construction et gestion des espaces verts avec plus de 15 ans d'expérience dans le secteur."
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserData>(userData);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation for bio length
    if (formData.bio.length > 150) {
      toast.error("La biographie ne doit pas dépasser 150 caractères.");
      return;
    }
    
    // Update user data
    setUserData(formData);
    setIsEditing(false);
    toast.success("Profil mis à jour avec succès!");
  };
  
  const handleCancel = () => {
    setFormData(userData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="relative">
          <CardTitle className="text-2xl font-bold">Informations Personnelles</CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            className="absolute right-6 top-6"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit className="h-4 w-4 mr-2" />
            {isEditing ? "Annuler" : "Modifier"}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="bg-gray-200 rounded-full w-32 h-32 flex items-center justify-center overflow-hidden">
                <UserRound className="h-16 w-16 text-gray-500" />
              </div>
              {isEditing && (
                <Button variant="outline" size="sm" className="mt-3 w-full">
                  Changer la photo
                </Button>
              )}
            </div>
            
            {isEditing ? (
              <form onSubmit={handleSubmit} className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nom complet</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Nom de l'entreprise</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Adresse email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre.email@exemple.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="professionalTitle">Titre professionnel</Label>
                    <Input
                      id="professionalTitle"
                      name="professionalTitle"
                      value={formData.professionalTitle}
                      onChange={handleInputChange}
                      placeholder="Votre poste ou titre"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Localisation</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Ville, Pays"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">
                    Biographie <span className="text-sm text-gray-500">(150 caractères max.)</span>
                  </Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Brève description professionnelle"
                    maxLength={150}
                    rows={3}
                  />
                  <p className="text-xs text-gray-500 text-right">{formData.bio.length}/150</p>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={handleCancel}>Annuler</Button>
                  <Button type="submit">Enregistrer</Button>
                </div>
              </form>
            ) : (
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-500">Nom complet</h3>
                    <p className="text-lg">{userData.fullName}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500">Entreprise</h3>
                    <p className="text-lg">{userData.companyName}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <div>
                      <h3 className="font-medium text-gray-500">Email</h3>
                      <p className="text-lg">{userData.email}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-500">Titre professionnel</h3>
                    <p className="text-lg">{userData.professionalTitle}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <div>
                      <h3 className="font-medium text-gray-500">Localisation</h3>
                      <p className="text-lg">{userData.location}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-500">Biographie</h3>
                  <p className="text-lg">{userData.bio}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
