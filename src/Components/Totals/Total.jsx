import { FolderGit2, Send, UserRound } from 'lucide-react'
import React from 'react'

const Total = () => {
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 backdrop-blur-xl shadow-lg rounded-xl py-2 px-5 place-items-center text-center'>

            <div>
                <div className='flex flex-col items-center gap-y-2'>
                    <div className='bg-neutral-400 opacity-60 rounded-lg p-2'>
                        <UserRound className='w-5 h-5' />
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <p className='text-3xl font-medium'>24</p>
                        <p className='text-sm font-medium'>Stagiaires</p>
                    </div>

                </div>
            </div>

            <div>
                <div className='flex flex-col items-center gap-y-2'>
                    <div className='bg-neutral-400 opacity-60 rounded-lg p-2'>
                        <Send className='w-5 h-5' />
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <p className='text-3xl font-medium'>50</p>
                        <p className='text-sm font-medium'>Demandes</p>
                    </div>

                </div>
            </div>

            <div>
                <div className='flex flex-col items-center gap-y-2'>
                    <div className='bg-neutral-400 opacity-60 rounded-lg p-2'>
                        <FolderGit2 className='w-5 h-5' />
                    </div>
                    <div className='flex items-center gap-x-3'>
                         <p className='text-3xl font-medium'>30</p>
                    <p className='text-sm font-medium'>Projects</p>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}

export default Total
