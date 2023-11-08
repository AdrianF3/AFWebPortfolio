import React, { useEffect, useState } from 'react';
import ContactSection from '../components/ContactSection';
import { handleScrollToBottom } from '../components/renderless/handleScrollToBottom';
import NavigationBar from '../components/NavigationBar';
import AddRecipe from '../components/recipes/AddRecipe';
import { projectFirestore } from '../firebase/config';
import RecipeView from '../components/recipes/RecipeView';
import EditRecipe from '../components/recipes/EditRecipe';

export default function Recipes() {
  const recipeCategories = ['Untried', 'Breakfast', 'Main Course', 'Desserts', 'Drinks', 'Sides/Misc.', 'Soups', 'Salads', 'Snacks', 'Breads'];
  const [category, setCategory] = useState('Untried');
  const [recipeData, setRecipeData] = useState(null); // Initialize with null
  const [filteredRecipes, setFilteredRecipes] = useState(null);
  const [deleteBtnStatus, setDeleteBtnStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingRecipe, setEditingRecipe] = useState(false);

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
    setIsLoading(false);
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

  // Define a function to update a recipe - should load the recipe into the AddRecipe component 
  // and state variables - then the user can edit the recipe and save it - should also pass to
  //  Add Recipe whether it is saivng a new recipe or editing a recipe  
  


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
  console.log('editingRecipe', editingRecipe)
  return (
    <section>
      {/* Header / Welcome Area */}
      <NavigationBar handleScrollToBottom={handleScrollToBottom} />

      <section className="p-4 rounded-xl shadow-xl">
        {  recipeData ? recipeData.recipes ? !isLoading ? !editingRecipe
          ? <AddRecipe 
              categories={recipeCategories} 
              currentRecipes={recipeData.recipes} 
              category={category} 
              fetchRecipeData={fetchRecipeData}              
              setIsLoading={setIsLoading}
            />
          : <EditRecipe
              categories={recipeCategories} 
              currentRecipes={recipeData.recipes} 
              category={category} 
              fetchRecipeData={fetchRecipeData}              
              setIsLoading={setIsLoading}
              editingRecipe={editingRecipe}
              setEditingRecipe={setEditingRecipe}
              deleteRecipe={deleteRecipe}            
            />
          : null : null : <p className='flex justify-center h-1/3 my-10 py-10 rounded-2xl shadow-xl bg-sky-400/50 first-letter text-4xl'>loading currently message</p>
        }

        {/* Recipe Categories */}
        <div>          
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
        { isLoading ? <p className='flex justify-center h-1/3 my-10 py-10 rounded-2xl shadow-xl bg-sky-400/50 first-letter text-4xl'>loading currently message</p> : null }
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
                    <RecipeView
                      key={index}
                      index={index}
                      recipe={recipe}
                      deleteRecipe={deleteRecipe}
                      deleteBtnStatus={deleteBtnStatus}
                      setDeleteBtnStatus={setDeleteBtnStatus}
                      setEditingRecipe={setEditingRecipe}

                    />                  
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
