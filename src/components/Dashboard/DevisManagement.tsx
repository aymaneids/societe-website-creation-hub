
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Download, Edit, Trash, Search, FileText, Upload } from 'lucide-react';

interface Devis {
  id: string;
  reference: string;
  title: string;
  amount: number;
  buyer: string;
  location: string;
  deadline: string;
  status: 'Pending' | 'Accepted' | 'Rejected';
  workStatus: 'Not Started' | 'In Progress' | 'Completed' | 'N/A';
}

const DevisManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'submitted' | 'accepted'>('submitted');
  const [isAddingDevis, setIsAddingDevis] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Devis | null;
    direction: 'ascending' | 'descending' | null;
  }>({
    key: null,
    direction: null
  });
  
  // Mock data for examples
  const [devisList, setDevisList] = useState<Devis[]>([
    {
      id: "1",
      reference: "DEV-2023-001",
      title: "Construction Résidentielle",
      amount: 250000,
      buyer: "Société Immobilière ABC",
      location: "Casablanca",
      deadline: "2023-12-15",
      status: "Accepted",
      workStatus: "In Progress"
    },
    {
      id: "2",
      reference: "DEV-2023-002",
      title: "Aménagement Espace Vert",
      amount: 75000,
      buyer: "Municipalité de Rabat",
      location: "Rabat",
      deadline: "2023-11-30",
      status: "Pending",
      workStatus: "N/A"
    },
    {
      id: "3",
      reference: "DEV-2023-003",
      title: "Rénovation Bureau",
      amount: 120000,
      buyer: "Entreprise XYZ",
      location: "Marrakech",
      deadline: "2024-01-10",
      status: "Rejected",
      workStatus: "N/A"
    }
  ]);
  
  const [newDevis, setNewDevis] = useState<Omit<Devis, 'id'>>({
    reference: "",
    title: "",
    amount: 0,
    buyer: "",
    location: "",
    deadline: "",
    status: "Pending",
    workStatus: "N/A"
  });
  
  const handleSort = (key: keyof Devis) => {
    let direction: 'ascending' | 'descending' | null = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
      direction = null;
    }
    
    setSortConfig({ key, direction });
  };
  
  const sortedDevis = React.useMemo(() => {
    const devisToDisplay = devisList.filter(devis => 
      devis.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      devis.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      devis.buyer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (!sortConfig.key || !sortConfig.direction) return devisToDisplay;
    
    return [...devisToDisplay].sort((a, b) => {
      if (a[sortConfig.key!] < b[sortConfig.key!]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key!] > b[sortConfig.key!]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [devisList, searchQuery, sortConfig]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle numeric input for amount
    if (name === 'amount') {
      setNewDevis({
        ...newDevis,
        [name]: parseFloat(value) || 0
      });
    } else {
      setNewDevis({
        ...newDevis,
        [name]: value
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newDevis.reference || !newDevis.title) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    
    const newId = (devisList.length + 1).toString();
    setDevisList([...devisList, { ...newDevis, id: newId }]);
    setIsAddingDevis(false);
    toast.success("Devis ajouté avec succès!");
    
    // Reset form
    setNewDevis({
      reference: "",
      title: "",
      amount: 0,
      buyer: "",
      location: "",
      deadline: "",
      status: "Pending",
      workStatus: "N/A"
    });
  };
  
  const handleDelete = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce devis?")) {
      setDevisList(devisList.filter(devis => devis.id !== id));
      toast.success("Devis supprimé avec succès!");
    }
  };
  
  const handleStatusChange = (id: string, status: Devis['status']) => {
    setDevisList(devisList.map(devis => {
      if (devis.id === id) {
        const workStatus = status === 'Accepted' ? 'Not Started' : 'N/A';
        return { ...devis, status, workStatus };
      }
      return devis;
    }));
    toast.success("Statut mis à jour avec succès!");
  };
  
  const handleWorkStatusChange = (id: string, workStatus: Devis['workStatus']) => {
    setDevisList(devisList.map(devis => {
      if (devis.id === id) {
        return { ...devis, workStatus };
      }
      return devis;
    }));
    toast.success("Statut du travail mis à jour avec succès!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex gap-2">
          <Button 
            variant={activeTab === 'submitted' ? 'default' : 'outline'} 
            onClick={() => setActiveTab('submitted')}
          >
            Devis Soumis
          </Button>
          <Button 
            variant={activeTab === 'accepted' ? 'default' : 'outline'} 
            onClick={() => setActiveTab('accepted')}
          >
            Devis Acceptés
          </Button>
        </div>
        
        {activeTab === 'submitted' && (
          <Button onClick={() => setIsAddingDevis(true)}>
            <FileText className="mr-2 h-4 w-4" />
            Nouveau Devis
          </Button>
        )}
      </div>
      
      {isAddingDevis ? (
        <Card>
          <CardHeader>
            <CardTitle>Ajouter un Nouveau Devis</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reference">
                    Numéro de Référence <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="reference"
                    name="reference"
                    value={newDevis.reference}
                    onChange={handleInputChange}
                    placeholder="ex: DEV-2023-004"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Titre/Objet du Projet <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={newDevis.title}
                    onChange={handleInputChange}
                    placeholder="Titre du projet"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amount">Montant Total (DHS)</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    value={newDevis.amount}
                    onChange={handleInputChange}
                    placeholder="0.00"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="buyer">Information Acheteur</Label>
                  <Input
                    id="buyer"
                    name="buyer"
                    value={newDevis.buyer}
                    onChange={handleInputChange}
                    placeholder="Nom de l'acheteur"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Lieu d'Exécution</Label>
                  <Input
                    id="location"
                    name="location"
                    value={newDevis.location}
                    onChange={handleInputChange}
                    placeholder="Ville, Région"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="deadline">Date Limite de Soumission</Label>
                  <Input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={newDevis.deadline}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="status">Statut</Label>
                  <select
                    id="status"
                    name="status"
                    value={newDevis.status}
                    onChange={handleInputChange}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    <option value="Pending">En attente</option>
                    <option value="Accepted">Accepté</option>
                    <option value="Rejected">Rejeté</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="file">Télécharger Devis (PDF max 10MB)</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf"
                    className="flex-1"
                  />
                  <Button type="button" variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Parcourir
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsAddingDevis(false)}>Annuler</Button>
                <Button type="submit">Ajouter Devis</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>
              {activeTab === 'submitted' ? 'Liste des Devis Soumis' : 'Liste des Devis Acceptés'}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-gray-500" />
              <Input
                placeholder="Rechercher par référence, titre ou acheteur..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-sm"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead 
                      className="cursor-pointer hover:text-primary"
                      onClick={() => handleSort('reference')}
                    >
                      Référence
                      {sortConfig.key === 'reference' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className="cursor-pointer hover:text-primary"
                      onClick={() => handleSort('title')}
                    >
                      Titre/Objet
                      {sortConfig.key === 'title' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className="cursor-pointer hover:text-primary"
                      onClick={() => handleSort('amount')}
                    >
                      Montant (DHS)
                      {sortConfig.key === 'amount' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                        </span>
                      )}
                    </TableHead>
                    <TableHead>Acheteur</TableHead>
                    <TableHead>Statut</TableHead>
                    {activeTab === 'accepted' && (
                      <TableHead>Statut du Travail</TableHead>
                    )}
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedDevis
                    .filter(devis => activeTab === 'submitted' || (activeTab === 'accepted' && devis.status === 'Accepted'))
                    .map((devis) => (
                      <TableRow key={devis.id}>
                        <TableCell>{devis.reference}</TableCell>
                        <TableCell>{devis.title}</TableCell>
                        <TableCell>{devis.amount.toLocaleString()} DHS</TableCell>
                        <TableCell>{devis.buyer}</TableCell>
                        <TableCell>
                          <select
                            value={devis.status}
                            onChange={(e) => handleStatusChange(devis.id, e.target.value as Devis['status'])}
                            className="w-full rounded-md border border-input bg-background px-2 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          >
                            <option value="Pending">En attente</option>
                            <option value="Accepted">Accepté</option>
                            <option value="Rejected">Rejeté</option>
                          </select>
                        </TableCell>
                        {activeTab === 'accepted' && (
                          <TableCell>
                            <select
                              value={devis.workStatus}
                              onChange={(e) => handleWorkStatusChange(devis.id, e.target.value as Devis['workStatus'])}
                              className="w-full rounded-md border border-input bg-background px-2 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                              disabled={devis.status !== 'Accepted'}
                            >
                              <option value="Not Started">Non démarré</option>
                              <option value="In Progress">En cours</option>
                              <option value="Completed">Terminé</option>
                            </select>
                          </TableCell>
                        )}
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Modifier</span>
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Télécharger</span>
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDelete(devis.id)}>
                              <Trash className="h-4 w-4 text-red-500" />
                              <span className="sr-only">Supprimer</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    
                  {sortedDevis.filter(devis => activeTab === 'submitted' || (activeTab === 'accepted' && devis.status === 'Accepted')).length === 0 && (
                    <TableRow>
                      <TableCell colSpan={activeTab === 'accepted' ? 7 : 6} className="text-center py-8 text-gray-500">
                        Aucun devis trouvé
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DevisManagement;
