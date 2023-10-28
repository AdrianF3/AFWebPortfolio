import React from 'react'
import ContactSection from '../components/ContactSection'
import { handleScrollToBottom } from '../components/renderless/handleScrollToBottom'
import NavigationBar from '../components/NavigationBar'

export default function Recipes() {

  return (
    <section>
        {/* Header / Welcome Area */}
          {/* anchor links to jump to certain parts of the page - also include button to toggle dark mode */}                    
          {/* <HeaderNavigation handleScrollToBottom={handleScrollToBottom} /> */}
          <NavigationBar handleScrollToBottom={handleScrollToBottom} />
           
        
          <section className=''>
            
            <ContactSection />                  
          </section>



      </section>
  )
}
