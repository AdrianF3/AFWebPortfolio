import React from 'react'
import ContactSection from '../Components/ContactSection'
import EctorGrowExplainer from '../Components/EctorGrowExplainer'
import Header from '../Components/Header'
import PortfolioDescriptions from '../Components/PortfolioDescriptions'

export default function Home() {
  return (
    <container>
        {/* Header / Welcome Area */}
          {/* anchor links to jump to certain parts of the page - also include button to toggle dark mode */}
          {/* <HeaderWelcome /> */}
          {/* <HeaderWelcome /> */}
          <Header />          
          {/* <Skills /> */}
        {/* Skills Brief Description of expereince */}
        
        {/* Developer Experience & Projects */}
          <PortfolioDescriptions />          
          <EctorGrowExplainer />
        {/* Updated Resume & Cover & contact info */}
          {/* Simple section, easy to download from */}
          <ContactSection />                  



      </container>
  )
}
