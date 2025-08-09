import React, { useState } from "react"
import { CalendarSync, BetweenHorizontalEnd, X } from "lucide-react"
import { Badge } from "../ui/badge"

const BarSprints = ({ projects, onSelectProject }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative flex">
      {/* Bouton mobile */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-72 left-2  lg:z-30 bg-cyan-600 p-2 rounded-full shadow-md text-white"
      >
        <BetweenHorizontalEnd className="h-5 w-5 " />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 backdrop-blur-lg bg-opacity-50 z-20 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed left-0 top-44 bottom-0 bg-white/20 shadow-xl rounded-r-2xl z-30
          w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          flex flex-col
        `}
      >
        {/* Bouton fermeture mobile */}
        <div className="flex justify-end lg:hidden p-3">
          <button
            onClick={() => setOpen(false)}
            className=" p-2 rounded-full text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Header */}
        <div
          className="bg-cyan-600 mx-4 mb-4 p-2 rounded-2xl mt-3 flex gap-x-2 items-center text-white shrink-0"
        >
          <CalendarSync className="h-4 w-4" />
          <span className="text-sm">Tous les Projects</span>
        </div>

        {/* Liste projets */}
        <div className="flex-1 overflow-y-auto px-3 pb-3">
          {projects.map((project, key) => (
            <div 
              className="p-2 rounded-xl hover:bg-neutral-400/30 mb-2 cursor-pointer" 
              key={key}
              onClick={() => {
                onSelectProject(project)
                setOpen(false) 
              }}
            >
              <div className="flex justify-between">
                <p className="font-semibold">{project.titre}</p>
                <Badge className={
                  `p-2 ${project.status ? "bg-green-300 text-green-600" : "bg-orange-100 text-orange-500"}`
                }> 
                  {project.status ? "Terminé" : 'En Cours'}
                </Badge>
              </div>
              <p className="text-black text-sm opacity-50"> 
                {project.created_At}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarSprints
