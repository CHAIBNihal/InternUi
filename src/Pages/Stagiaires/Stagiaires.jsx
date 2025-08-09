
import StagiairesTabs from '@/Components/Stagiaires/StagiairesTabs'
import { GraduationCap } from 'lucide-react'
import React from 'react'

const Stagiaires = () => {
  return (
    <div className='mt-14 p-3'>
        <h4 className='mb-6 text-2xl font-medium flex    items-center gap-x-2'>
            <GraduationCap />
            Tous les Stagiaires </h4>
        <StagiairesTabs/>
    </div>
  )
}

export default Stagiaires