import React, { useState } from "react"
import BarSprints from "../../Components/Sprints/BarSprints"
import BodySprints from "../../Components/Sprints/BodySprints"
import { projects } from "../../Constants/Projects"

const SprintsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="flex">
      <BarSprints
        projects={projects} 
        onSelectProject={(project) => setSelectedProject(project)} 
      />
      <BodySprints project={selectedProject} />
    </div>
  )
}

export default SprintsPage
