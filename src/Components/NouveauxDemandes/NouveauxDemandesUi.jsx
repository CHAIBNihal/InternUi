import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { demandes } from "@/Constants/Stagiaire";
import { Eye } from "lucide-react";

const NouveauxDemandesUi = () => {
  const itemsPerPage = 5; // Nombre de lignes par page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(demandes.length / itemsPerPage);

  // Calcule les demandes à afficher
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDemandes = demandes.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-full overflow-x-auto shadow-md rounded-xl p-4">
      <h2 className="text-2xl font-semibold mb-4">Nouvelles demandes de stage</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Nom complet</th>
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Période</th>
            <th className="p-2 text-left">Université</th>
            <th className="p-2 text-left">Décision</th>
            <th className="p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentDemandes.map((d, i) => (
            <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
              <td className="p-2">{d.email}</td>
              <td className="p-2">{d.nom}</td>
              <td className="p-2">
                <Badge variant={d.type === "Libre" ? "default" : "secondary"}>
                  {d.type}
                </Badge>
              </td>
              <td className="p-2">{d.periode}</td>
              <td className="p-2">
                {d.type === "Pas libre" ? d.universite : "—"}
              </td>
              <td className="p-2 flex gap-x-1">
                <Button className="bg-green-300 text-green-600">Accepter</Button>
                <Button className="bg-orange-200 text-orange-500">Refuser</Button>
              </td>
              <td className="p-2 text-center">
                <Button size="sm" variant="ghost">
                  <Eye />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Button onClick={handlePrev} disabled={currentPage === 1}>
          Précédent
        </Button>
        <span className="opacity-30">
          Page {currentPage} sur {totalPages}
        </span>
        <Button onClick={handleNext} disabled={currentPage === totalPages}>
          Suivant
        </Button>
      </div>
    </div>
  );
};

export default NouveauxDemandesUi;
