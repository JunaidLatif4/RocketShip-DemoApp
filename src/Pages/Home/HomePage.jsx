import React from 'react'

// Components :
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import WorkSection from './Components/WorkSection/WorkSection'

// CSS :
import "./HomePage.scss"





const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage_container">
        <HeroSection />
        <WorkSection />
      </div>
      <Footer />
    </>
  )
}

export default HomePage