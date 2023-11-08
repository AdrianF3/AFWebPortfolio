import React, { useState, useRef } from 'react';
import { projectFirestore, projectStorage } from '../../firebase/config';

export default function AddRecipe({ currentRecipes, category, fetchRecipeData, setIsLoading }) {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [recipeURL, setRecipeURL] = useState('');
  const fileInputRef = useRef(null);  
  const handleFileUpload = () => {
    // Trigger a click event on the hidden file input element
    fileInputRef.current.click();
  };

  const saveRecipe = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];

    if (!file) {
      return; // No file selected
    }

    const storageRef = projectStorage.ref(`Recipes/${file.name}`);
    
    try {
      // Upload the file to storage
      const uploadTask = storageRef.put(file);
      const snapshot = await uploadTask;
      const downloadUrl = await snapshot.ref.getDownloadURL();

      const newRecipe = {
        name,
        recipeURL,
        description: note,
        category,
        pdfRecipeUrl: downloadUrl,
      };

      // Update Firestore with the newRecipe
      await projectFirestore
        .collection('recipeData')
        .doc('bgkIgbYG78vAPtCLDkUB')
        .update({
          recipes: [...currentRecipes, newRecipe],
        });

      // Clear the input fields
      setName('');
      setNote('');
      setRecipeURL('');
      fetchRecipeData();
      setIsLoading(false);
    } catch (error) {
      console.error('Error uploading file and updating Firestore:', error);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-center text-slate-700">Save A New Recipe</h2>
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

          <input
            type="file"
            id="file"
            ref={fileInputRef}
            className="hidden"
            onChange={saveRecipe}
          />

          <button
            className="w-full p-4 text-2xl font-bold text-center text-slate-700 bg-sky-200/50 rounded-xl shadow-xl hover:bg-sky-400/50 focus:bg-sky-400/50 focus:outline-none"
            onClick={handleFileUpload}
          >
            Select a PDF to upload
          </button>
        </div>
      </div>
    </>
  );
}
