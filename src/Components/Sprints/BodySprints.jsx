import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const BodySprints = ({ project }) => {
  return (
    <div className="h-screen overflow-y-auto w-full p-4">
      {/* Badge aligné à droite */}
      <div className="flex justify-end mt-8">
        <div className="flex gap-x-4">
          <Button className={"flex gap-x-2 bg-orange-500"}>
            <Plus />
            Ajouter une Nouvelle Sprint
          </Button>
          <Badge variant="default" className="items-center p-2">
            <p className="font-medium">CHAIB NIHAL</p>
          </Badge>

        </div>
      </div>

      {/* Si aucun projet sélectionné */}
      {!project ? (
        <div className="mt-7 lg:ml-72 text-gray-500">
          Sélectionnez un projet pour voir ses Sprints
        </div>
      ) : (
        <div className="mt-7 lg:ml-72 space-y-3">
          {project.SprintStatus.map((sp, i) => (
            <Accordion
              key={i}
              type="single"
              collapsible
              className="bg-neutral-200 rounded-lg shadow border border-gray-200"
            >
              <AccordionItem value={`item-${i}`}>
                <AccordionTrigger className="px-4 py-3 flex justify-between items-center">
                  <div className="flex justify-between items-center w-full">
                    <h5 className="font-bold text-gray-800">{sp.title}</h5>
                    <div className="flex gap-x-2 ">

                      {/**Nombre des etiquette */}
                      <Badge variant="secondary" className={"rounded-full bg-cyan-100"}>
                        {sp.etiquettes?.length || 0}
                      </Badge>


                      {/**Terminer le sprint  */}
                      <Button variant={"ghost"} className={"text-sm "}> Términer Sprint </Button>


                      {/** UD Sprinte */}
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  {sp.etiquettes && sp.etiquettes.length > 0 ? (
                    sp.etiquettes.map((etq) => (
                      <div
                        key={etq.id}
                        className="shadow p-2 rounded flex justify-between text-sm mb-2"
                      >
                        <span className="font-medium">{etq.titre}</span>
                        <span className="text-gray-500">{etq.date_Debut}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm italic">
                      Aucune étiquette
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
};

export default BodySprints;
