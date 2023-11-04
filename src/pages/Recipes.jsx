import React from 'react'
import ContactSection from '../components/ContactSection'
import { handleScrollToBottom } from '../components/renderless/handleScrollToBottom'
import NavigationBar from '../components/NavigationBar'
import AddRecipe from '../components/recipes/AddRecipe'

export default function Recipes() {
  const recipeCategpries = [ 'Untested', 'Breakfast', 'Main Course', 'Desserts', 'Drinks', 'Sides/Misc.', 'Soups', 'Salads', 'Snacks', 'Breads' ]
  // state for selected category
  const [category, setCategory] = React.useState('Untested');
  const currentCategoryRecipes = [
    {
      name: "Stuffed Mushrooms",
      category: "Untried",
      description: "Delicious and savory stuffed mushrooms with a cheesy filling.",      
      originalRecipeUrl: "https://example.com/stuffed-mushrooms.pdf",
    },
    {
      name: "Caprese Skewers",
      category: "Untried",
      description: "Fresh Caprese salad on skewers with mozzarella, tomatoes, and basil.",      
      originalRecipeUrl: "https://example.com/stuffed-mushrooms.pdf",
    },
    {
      name: "Guacamole Dip",
      category: "Untried",
      description: "Classic guacamole dip with ripe avocados and fresh ingredients.",      
      originalRecipeUrl: "https://example.com/stuffed-mushrooms.pdf",
    },
    {
      name: "Spinach and Artichoke Dip",
      category: "Untried",
      description: "Creamy and cheesy spinach and artichoke dip served with tortilla chips.",      
      originalRecipeUrl: "https://example.com/stuffed-mushrooms.pdf",
    },
    {
      name: "Bruschetta",
      category: "Untried",
      description: "Italian bruschetta with diced tomatoes, garlic, basil, and balsamic glaze.",      
      originalRecipeUrl: "https://example.com/stuffed-mushrooms.pdf",
    },
  ];

  // Define a function to determine the background color of category buttons
  const getCategoryButtonColor = (categoryId) => {
    if (categoryId === category) {
      return 'bg-green-400/50';
    }
    return 'bg-green-200/50';
  };



  return (
    <section>
        {/* Header / Welcome Area */}
          {/* anchor links to jump to certain parts of the page - also include button to toggle dark mode */}                    
          {/* <HeaderNavigation handleScrollToBottom={handleScrollToBottom} /> */}
          <NavigationBar handleScrollToBottom={handleScrollToBottom} />                       
        
          <section className='p-4 rounded-xl shadow-xl'>
            <AddRecipe categories={currentCategoryRecipes} category={category} />

            {/* Recipe Categories */}
            {/* Recipe Categories */}
        <div>
          <p className="text-center text-slate-700 text-lg">
            Select a category to upload a recipe
          </p>
          <div className="flex flex-wrap justify-center p-4">
            {recipeCategpries.map((categoryId, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-1/2 p-4">
                <button
                  className={`w-full p-4 text-2xl font-bold text-center text-slate-700 ${getCategoryButtonColor(categoryId)} rounded-xl shadow-xl hover:bg-green-400/50 focus:outline-none`}
                  onClick={() => setCategory(categoryId)}
                >
                  {categoryId}
                </button>
              </div>
            ))}
          </div>
        </div>        


            {/* Split into 2 columns */}
              {/* Recipe List on left */}
              {/* Recipe PDF Display - list of recipes on left, pdf display on right */}
        <section>
            {/* Recipe List */}
            <div className="flex flex-col items-center justify-center w-full p-4 gap-4 bg-gray-100 rounded-xl">
                <h2 className="text-2xl font-bold text-center text-slate-700">{category} Recipes</h2>
                <div className="flex flex-col items-center justify-center w-full p-4 gap-4 bg-gray-100 rounded-xl">
                    {currentCategoryRecipes.map((recipe, index) => (
                        <div key={index} className="flex flex-col items-center justify-center w-full p-4 gap-4 bg-gray-100 rounded-xl">
                            <h3 className="text-2xl font-bold text-center text-slate-700">{recipe.name}</h3>
                            <p className="text-lg font-bold text-center text-slate-700">{recipe.description}</p>
                            <p className="text-sm italic font-bold text-center text-slate-700">{recipe.originalRecipeUrl}</p>                            
                        </div>
                    ))}
                </div>
            </div>
                
                {/* Recipe PDF Display */}
                


        </section>

              {/* Recipe PDF Display on right */}
                {/* click to go full screen with pdf */}
            
          </section>

          <ContactSection />                  


      </section>
  )
}
