import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Buiseness from './components/Buiseness'
import Control from './components/Control'
import CardPaypal from './components/CardPaypal'
import Testimonials from './components/Testimonials'
import Sponsors from './components/Sponsors'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden' >
      <Navbar />
      <Hero />
      <Buiseness />
      <Control />
      <CardPaypal />
      <Testimonials />
      <Sponsors />
      <Contacts />
      <Footer />
      
    </div>
  )
}

export default App
