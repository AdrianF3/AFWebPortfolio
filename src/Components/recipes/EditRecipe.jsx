import React, { useState, useEffect } from 'react';
import { projectFirestore } from '../../firebase/config';

export default function EditRecipe({ currentRecipes, category, fetchRecipeData, setIsLoading, editingRecipe, setEditingRecipe, deleteRecipe }) {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [recipeURL, setRecipeURL] = useState('');



    // useEffect that runs once, when the editingRecipe changes, update the state variables with the editingRecipe
    useEffect(() => {
        if (editingRecipe) {
            setName(editingRecipe.name);
            setNote(editingRecipe.description);
            setRecipeURL(editingRecipe.recipeURL);
        }
    }, [editingRecipe]);



  

  const saveRecipe = async () => {    
    setIsLoading(true);

    


    
    try {
        // first delet the old recipe
        await deleteRecipe(editingRecipe);

        // filter out the editing recipe from the current recipes
        const filteredRecipes = currentRecipes.filter((recipe) => recipe.name !== editingRecipe.name);
      

      const newRecipe = {
        name,
        recipeURL,
        description: note,
        category,
        pdfRecipeUrl: editingRecipe.pdfRecipeUrl,
      };

      // Update Firestore with the newRecipe
      await projectFirestore
        .collection('recipeData')
        .doc('bgkIgbYG78vAPtCLDkUB')
        .update({
          recipes: [...filteredRecipes, newRecipe],
        });

      // Clear the input fields
      setName('');
      setNote('');
      setRecipeURL('');

      fetchRecipeData();
      setEditingRecipe(false);
      setIsLoading(false);
    } catch (error) {
      console.error('Error uploading file and updating Firestore:', error);
    }
  };

//   function to clear the editingRecipe state variable

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-center text-slate-700">Editing A Recipe</h2>
        <p className="text-center text-slate-700 text-lg">recipes will be saved to the current category that is selected</p>
        <div className="flex flex-col items-center justify-center p-4 gap-4 bg-gray-100 rounded-xl">
          <input
            className="w-full p-4 text-2xl font-bold text-center text-slate-700 bg-green-200/50 rounded-xl shadow-xl hover:bg-green-400/50 focus:bg-green-400/50 focus:outline-none"
            type="text"
            placeholder="Recipe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full p-4 text-2xl font-bold text-center text-slate-700 bg-green-200/50 rounded-xl shadow-xl hover:bg-green-400/50 focus:bg-green-400/50 focus:outline-none"
            type="text"
            placeholder="Recipe URL"
            value={recipeURL}
            onChange={(e) => setRecipeURL(e.target.value)}
          />
          <textarea
            className="w-full p-4 text-2xl font-bold text-center text-slate-700 bg-green-200/50 rounded-xl shadow-xl hover:bg-green-400/50 focus:bg-green-400/50 focus:outline-none"
            type="text"
            placeholder="My Personal Notes"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          

          <button
            className="w-full p-4 text-2xl font-bold text-center text-slate-700 bg-sky-200/50 rounded-xl shadow-xl hover:bg-sky-400/50 focus:bg-sky-400/50 focus:outline-none"
            onClick={() => saveRecipe()}
          >
            Save Changes To Recipe
          </button>

          {/* Button to undo editing recipe */}
            <button
                className="w-full p-4 text-2xl font-bold text-center text-slate-700 bg-red-200/50 rounded-xl shadow-xl hover:bg-red-400/50 focus:bg-red-400/50 focus:outline-none"
                onClick={() => setEditingRecipe(false)}
            >
                Cancel Editing Recipe
            </button>
            
        </div>
      </div>
    </>
  );
}
