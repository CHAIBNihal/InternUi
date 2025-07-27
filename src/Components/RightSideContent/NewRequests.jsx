import { CircleCheckBig, CircleX, Mailbox } from 'lucide-react'
import React from 'react'

const NewRequests = () => {
    const dateComplete = new Date();
    const date = dateComplete.toISOString().split("T")[0]
    const hours = dateComplete.toISOString().split("T")[1].split("Z")[0]
    console.log(date)
    console.log(hours)
    return (
        <div className='bg-black/70 shadow-lg text-white backdrop-blur-xl rounded-3xl p-4 '>
            {/* Header */}
            <div className='flex justify-between items-center'>

                <h3 className='font-medium text-green-500/70'> Demandes non Vu </h3>
                <h3 className='text-lg mr-2 bg-black/40 px-2  rounded-[100%]  '>2</h3>
            </div>
            
            {/* Content Loop */}
            <div className='flex  justify-between mt-3'>
                <div className='flex items-center gap-x-2'>
                    <div className='bg-neutral-600 px-2 py-2 rounded-full'>
                        <Mailbox className='opacity-60 h-6 w-6  ' />
                    </div>

                    <div className='flex-col space-y-1'>
                        <p className='text-[12px]'>example@gmail.com</p>
                        <div className='flex'>
                            <p className='text-[10px]  opacity-65'>
                                {date} :
                            </p>
                            <p className='text-[10px] opacity-65'>
                                {hours}
                            </p>
                        </div>
                    </div>

                </div>
                <div className='bg-green-200 text-green-600 rounded-full p-2'>
                    <CircleCheckBig className='h-6 w-6' />
                </div>
            </div>

             <div className='flex  justify-between mt-3'>
                <div className='flex items-center gap-x-2'>
                    <div className='bg-neutral-600 px-2 py-2 rounded-full'>
                        <Mailbox className='opacity-60 h-6 w-6  ' />
                    </div>

                    <div className='flex-col space-y-1'>
                        <p className='text-[12px]'>example@gmail.com</p>
                        <div className='flex'>
                            <p className='text-[10px]  opacity-65'>
                                {date} :
                            </p>
                            <p className='text-[10px] opacity-65'>
                                {hours}
                            </p>
                        </div>
                    </div>

                </div>
                <div className='bg-red-200 text-red-600 rounded-full p-2'>
                    <CircleX className='h-6 w-6' />
                  
                </div>
            </div>
        </div>
    )
}

export default NewRequests