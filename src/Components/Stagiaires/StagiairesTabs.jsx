import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {stagiairesData} from "../../Constants/Stagiaire"


export default function StagiairesTabs() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 6

  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const stagiaires = stagiairesData.slice(startIndex, endIndex)

  const totalPages = Math.ceil(stagiairesData.length / itemsPerPage)

  return (
    <div className="w-full space-y-4">
      
      {/* Zone scrollable uniquement pour le tableau */}
      <div className="max-h-[400px] overflow-y-auto border rounded-lg">
        <Table className="min-w-[800px]">
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Filière</TableHead>
              <TableHead>Université</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date début</TableHead>
              <TableHead>Date fin</TableHead>
              <TableHead>Durée</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stagiaires.map((stagiaire) => (
              <TableRow key={stagiaire.id}>
                <TableCell>{stagiaire.nom}</TableCell>
                <TableCell>{stagiaire.filiere}</TableCell>
                <TableCell>{stagiaire.universite}</TableCell>
                <TableCell>
                  <Badge variant={stagiaire.type === "Libre" ? "default" : "secondary"}>
                    {stagiaire.type}
                  </Badge>
                </TableCell>
                <TableCell>{stagiaire.dateDebut}</TableCell>
                <TableCell>{stagiaire.dateFin}</TableCell>
                <TableCell>{stagiaire.duree}</TableCell>
                <TableCell className="flex justify-center gap-2">
                  <button className="p-2 rounded hover:bg-muted">
                    <Pencil className="w-4 h-4 text-blue-600" />
                  </button>
                  <button className="p-2 rounded hover:bg-muted">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Précédent
        </Button>
        <span className="text-sm text-muted-foreground">
          Page {page} sur {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Suivant
        </Button>
      </div>
    </div>
  )
}
