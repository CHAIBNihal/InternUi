import { Footer } from '@/Components/InterfaceWeb/Footer'
import Hero from '@/Components/InterfaceWeb/Hero'
import { Steps } from '@/Components/InterfaceWeb/Steps'
import WebNav from '@/Components/InterfaceWeb/WebNav'
import React from 'react'

const WebPage = () => {
  return (
    <div className=' '>
      {/**First Bar Admin-space / student-space / login */}
      <WebNav/>
      {/** Hero Section */}
      <Hero/>
      {/**Les Etapes de demandes de stage  */}
      <Steps/>
      {/**Footer */}
      <Footer/>
    </div>
  )
}

export default WebPage