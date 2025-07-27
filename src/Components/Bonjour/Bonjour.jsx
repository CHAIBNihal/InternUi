import React from 'react'


const Bonjour = () => {
  //👋
  let clock = new Date()
  console.log("Date", clock)
  return (
    <div className=' my-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  items-center'>
        <h2 className='text-3xl font-bold '>Bienvenue, Emma </h2>
        <div className='flex justify-end'>
          
        </div>

    </div>
  )
}

export default Bonjour