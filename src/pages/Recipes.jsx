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
  const [filteredRecipes, setFilteredRecipes] = useState(null);
  const [deleteBtnStatus, setDeleteBtnStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
  useEffect(() => {

    fetchRecipeData();
  }, []); // Empty dependency array ensures this effect runs once on component mount
  

  // useEffect that runs when the cateogry changes, filter the recipeData by the .category property to make sure we only display recipes for the selected category
  useEffect(() => {
    console.log('recipeData', recipeData)
    if (recipeData) {
      console.log('run')
      const filteredRecipes = recipeData.recipes.filter((recipe) => recipe.category === category);
      setFilteredRecipes({ ...recipeData, recipes: filteredRecipes });
    } else {
      console.log('not run')
    }
  }, [category, recipeData]);
  console.log('filteredRecipes', filteredRecipes)


  // Define a function to delete a recipe
  const deleteRecipe = async (recipe) => {
    setIsLoading(true);
    // Filter out the recipe that is being deleted
    const filteredRecipes = recipeData.recipes.filter((recipeItem) => recipeItem.name !== recipe.name);

    try {
      // Update Firestore with the filteredRecipes
      await projectFirestore
        .collection('recipeData')
        .doc('bgkIgbYG78vAPtCLDkUB')
        .update({
          recipes: filteredRecipes,
        });

      // Clear the input fields
      setDeleteBtnStatus(false);
      fetchRecipeData();
      setIsLoading(false);
    } catch (error) {
      console.error('Error updating Firestore:', error);
    }
  }

  // Define a function to determine the background color of category buttons
  const getCategoryButtonColor = (categoryId) => {
    if (categoryId === category) {
      return 'bg-green-400/50';
    }
    return 'bg-green-200/50';
  };
  console.log('category', category)
  console.log('recipeData', recipeData)
  return (
    <section>
      {/* Header / Welcome Area */}
      <NavigationBar handleScrollToBottom={handleScrollToBottom} />

      <section className="p-4 rounded-xl shadow-xl">
        { recipeData && recipeData.recipes
          ? <AddRecipe 
              categories={recipeCategories} 
              currentRecipes={recipeData.recipes} 
              category={category} 
              fetchRecipeData={fetchRecipeData}
              setIsLoading={setIsLoading}
            />
          : null
        }

        {/* Recipe Categories */}
        <div>
          <p className="text-center text-slate-700 text-lg">new recipes will be saved to the current category that is selected</p>
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
        { isLoading ? <p className='m-auto text-2xl text-green-500'>loading...</p> : null }
        <section>
          {/* Recipe List */}
          <div className="flex flex-col items-center justify-center w-full p-4 gap-4 bg-gray-100 rounded-xl">
            {filteredRecipes ? <>
              <h2 className="text-2xl font-bold text-center text-slate-700">
                {`${category} Recipes (${filteredRecipes.recipes ? filteredRecipes.recipes.length : 0} recipes)`}
              </h2>
            </> : null}

            <div className="flex flex-col items-center justify-center w-full p-4 gap-4 bg-gray-100 rounded-xl">            
              {filteredRecipes
                ? filteredRecipes.recipes.map((recipe, index) => (
                    <div key={index} className="flex flex-col items-center justify-center w-full p-4 gap-4 bg-gray-100 border-2 border-black border-dashed rounded-xl">
                      <h3 className="text-2xl font-bold text-center text-slate-700">{recipe.name}</h3>                      
                      <a href={recipe.recipeURL} target="_blank" rel='noreferrer' className="font-bold text-center text-blue-800 italic">
                        {recipe.recipeURL}
                      </a>

                      <p className="text-lg font-bold text-center text-slate-700">{recipe.description}</p>
                      <a href={recipe.pdfRecipeUrl} target="_blank" rel='noreferrer' className="text-sm italic font-bold text-center text-slate-700">
                        Recipee PDF
                      </a>

                      { !deleteBtnStatus ? <>
                      <button 
                        className='w-full p-4 text-2xl font-bold text-center text-slate-700 bg-red-200/50 rounded-xl shadow-xl hover:bg-red-400/50 focus:bg-red-400/50 focus:outline-none'
                        onClick={() => setDeleteBtnStatus(true)}
                        >Delete Recipe
                      </button>
                        </> : <> 
                      <button 
                        className='w-full p-4 text-2xl font-bold text-center text-slate-700 bg-red-400/50 rounded-xl shadow-xl hover:bg-red-600/50 focus:bg-red-600/50 focus:outline-none'
                        onClick={() => deleteRecipe(recipe)}
                        >Confirm - permanently delete this recipe?
                      </button>
                        </>}
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
