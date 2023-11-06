import React, { useEffect, useState } from 'react';
import ContactSection from '../components/ContactSection';
import { handleScrollToBottom } from '../components/renderless/handleScrollToBottom';
import NavigationBar from '../components/NavigationBar';
import AddRecipe from '../components/recipes/AddRecipe';
import { projectFirestore } from '../firebase/config';

export default function Recipes() {
  const recipeCategories = ['Untried', 'Breakfast', 'Main Course', 'Desserts', 'Drinks', 'Sides/Misc.', 'Soups', 'Salads', 'Snacks', 'Breads'];
  const [category, setCategory] = useState('Untried');
  const [recipeData, setRecipeData] = useState(null); // Initialize with null

  useEffect(() => {
    // Fetch the document from Firestore using the specified ID
    const fetchRecipeData = async () => {
      try {
        const docRef = projectFirestore.collection('recipeData').doc('bgkIgbYG78vAPtCLDkUB');
        const doc = await docRef.get();
        if (doc.exists) {
          // If the document exists, update the state with the data
          setRecipeData(doc.data());
        } else {
          // Handle the case where the document does not exist
          console.log('Document not found.');
        }
      } catch (error) {
        // Handle any potential errors
        console.error('Error fetching document:', error);
      }
    };

    fetchRecipeData();
  }, []); // Empty dependency array ensures this effect runs once on component mount
  console.log('recipeData', recipeData)

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
      <NavigationBar handleScrollToBottom={handleScrollToBottom} />

      <section className="p-4 rounded-xl shadow-xl">
        { recipeData && recipeData.recipes
          ? <AddRecipe categories={recipeCategories} currentRecipes={recipeData.recipes} category={category} />
          : null
        }

        {/* Recipe Categories */}
        <div>
          <p className="text-center text-slate-700 text-lg">Select a category to upload a recipe</p>
          <div className="flex flex-wrap justify-center p-4">
            {recipeCategories.map((categoryId, index) => (
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
        <section>
          {/* Recipe List */}
          <div className="flex flex-col items-center justify-center w-full p-4 gap-4 bg-gray-100 rounded-xl">
            <h2 className="text-2xl font-bold text-center text-slate-700">{category} Recipes</h2>
            <div className="flex flex-col items-center justify-center w-full p-4 gap-4 bg-gray-100 rounded-xl">
              {recipeData && recipeData.recipes
                ? recipeData.recipes.map((recipe, index) => (
                    <div key={index} className="flex flex-col items-center justify-center w-full p-4 gap-4 bg-gray-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-center text-slate-700">{recipe.name}</h3>
                      <p className="text-lg font-bold text-center text-slate-700">{recipe.description}</p>
                      <p className="text-sm italic font-bold text-center text-slate-700">{recipe.originalRecipeUrl}</p>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </section>

        {/* Recipe PDF Display on right */}
      </section>

      <ContactSection />
    </section>
  );
}
