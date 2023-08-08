import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from '../components/HeroImage2';
import PricingCards from '../components/PricingCards';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="PROJECTS." text="Here Some Recent Projects Work"/>
      <Work/>
      <PricingCards/>
      <Footer/>
    </div>
  )
}

export default Project
