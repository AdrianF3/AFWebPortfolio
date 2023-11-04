import React, { useRef } from 'react';
import { projectFirestore, projectStorage } from '../../firebase/config';

export default function AddRecipe({ currentRecipes, category }) {
  const [name, setName] = React.useState('');
  const [note, setNote] = React.useState('');
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    // Trigger a click event on the hidden file input element
    fileInputRef.current.click();
  };

  const handleFileChange = () => {
    
  };

  const saveRecipe = (e) => {
    let urlToSave = null
    const file = e.target.files[0];
    const storageRef = projectStorage.ref(`Recipes/${file.name}`);
    storageRef.put(file).then(() => {
      // Get the download URL after the file is uploaded
      storageRef.getDownloadURL().then((downloadUrl) => {        
         urlToSave = downloadUrl;
      });
    });

    const newRecipe = {
      name,
      description: note,
      category,
      originalRecipeUrl: urlToSave
    };

    // Save newRecipe to the database
    // the collection where recipe data should be stored recipeData collection, id: bgkIgbYG78vAPtCLDkUB
    projectFirestore
      .collection('recipeData')
      .doc('bgkIgbYG78vAPtCLDkUB')
      .update({
        recipes: [...currentRecipes, newRecipe],
      })

    


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
          <textarea
            className="w-full p-4 text-2xl font-bold text-center text-slate-700 bg-green-200/50 rounded-xl shadow-xl hover:bg-green-400/50 focus:bg-green-400/50 focus:outline-none"
            type="text"
            placeholder="Recipe Note"
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
