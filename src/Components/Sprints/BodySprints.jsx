import React from "react"
import { Badge } from "@/components/ui/badge"

const BodySprints = ({ project }) => {
  return (
    <div className="h-screen overflow-y-auto w-full p-4">
      {/* Badge aligné à droite */}
      <div className="flex justify-end mt-8">

        <Badge variant="default" className="  items-center p-2">
          <p className="font-medium">CHAIB NIHAL</p>
        </Badge>

      </div>

      {/* Si aucun projet sélectionné */}
      {!project ? (
        <div className="mt-7 lg:ml-72 text-gray-500">Sélectionnez un projet pour voir ses Sprints</div>
      ) : (
        <div className="mt-7 lg:ml-72  lg:grid lg:grid-cols-4 lg:gap-x-2 ">

          {
          project.SprintStatus.map((sp, i) => (
            <div key={i} className="bg-gray-200 p-4 h-fit  rounded-lg shadow text-white">
              <div className="lg:flex text-black lg:text-sm lg:justify-between">
                <h5>{sp.title}</h5>
                <p>{sp.status}</p>
              </div>
            </div>
          ))
          }

        </div>
      )}
    </div>
  )
}

export default BodySprints
