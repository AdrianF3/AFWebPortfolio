import React from 'react'
import ContactSection from '../components/ContactSection'
import ETGExplainer from '../components/home/ETGExplainer'
import Header from '../components/home/Header'
import PreviousEmployers from '../components/home/PreviousEmployers'
import HeaderNavigation from '../components/HeaderNavigation'
import PortfolioDescriptions from '../components/home/PortfolioDescriptions'



export default function Home() {
  return (
    <section>
        {/* Header / Welcome Area */}
          {/* anchor links to jump to certain parts of the page - also include button to toggle dark mode */}                    
          <HeaderNavigation />
          <Header />             
        {/* Skills Brief Description of expereince */}        
        {/* Developer Experience & Projects */}
          <PortfolioDescriptions />                    
          <ETGExplainer />
          <PreviousEmployers />
        {/* Updated Resume & Cover & contact info */}
          {/* Simple section, easy to download from */}
          <ContactSection />                  



      </section>
  )
}
