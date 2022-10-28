import React from 'react'
import ContactSection from '../Components/ContactSection'
import ETGExplainer from '../Components/ETGExplainer'
import Header from '../Components/Header'
import NavigationBar from '../Components/NavigationBar'
import PortfolioDescriptions from '../Components/PortfolioDescriptions'

export default function Home() {
  return (
    <container>
        {/* Header / Welcome Area */}
          {/* anchor links to jump to certain parts of the page - also include button to toggle dark mode */}          
          <NavigationBar />
          <Header />             
        {/* Skills Brief Description of expereince */}        
        {/* Developer Experience & Projects */}
          <PortfolioDescriptions />          
          {/* <EctorGrowExplainer /> */}
          <ETGExplainer />
        {/* Updated Resume & Cover & contact info */}
          {/* Simple section, easy to download from */}
          <ContactSection />                  



      </container>
  )
}
