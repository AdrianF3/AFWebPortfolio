import React from 'react'
import ContactSection from '../components/ContactSection'
import { handleScrollToBottom } from '../components/renderless/handleScrollToBottom'
import NavigationBar from '../components/NavigationBar'
import AddRecipe from '../components/recipes/AddRecipe'

export default function Recipes() {
  const recipeCategpries = [ 'Appetizers', 'Breakfast', 'Main Course', 'Desserts', 'Drinks', 'Sides/Misc.', 'Soups', 'Salads', 'Snacks', 'Breads' ]


  return (
    <section>
        {/* Header / Welcome Area */}
          {/* anchor links to jump to certain parts of the page - also include button to toggle dark mode */}                    
          {/* <HeaderNavigation handleScrollToBottom={handleScrollToBottom} /> */}
          <NavigationBar handleScrollToBottom={handleScrollToBottom} />                       
        
          <section className='p-4 rounded-xl shadow-xl'>
            <AddRecipe categories={recipeCategpries} />

            {/* Recipe Categories */}


            {/* Split into 2 columns */}
              {/* Recipe List on left */}

              {/* Recipe PDF Display on right */}
                {/* click to go full screen with pdf */}
            
          </section>

          <ContactSection />                  


      </section>
  )
}
