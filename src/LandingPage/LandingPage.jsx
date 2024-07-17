import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Trainers from './Trainers'
import Prices from './Prices'
import Blog from './Blog'
import Footer from './Footer'


function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Trainers/>
        <Prices/>
        <Blog/>
        <Footer/>
        
    </div>
  )
}

export default LandingPage