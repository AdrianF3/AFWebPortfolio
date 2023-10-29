import React from 'react';

export default function AddRecipe({ categories }) {
  // state for selected category
  const [category, setCategory] = React.useState('Appetizers');
  // state for recipe name
  const [name, setName] = React.useState('');
  // state for recipe note, limit to 300 characters
  const [note, setNote] = React.useState('');

  // Define a function to determine the background color of category buttons
  const getCategoryButtonColor = (categoryId) => {
    if (categoryId === category) {
      return 'bg-green-400/50';
    }
    return 'bg-green-200/50';
  };

  const appetizerRecipes = [
    {
      name: "Stuffed Mushrooms",
      description: "Delicious and savory stuffed mushrooms with a cheesy filling.",
      imageUrl: "https://example.com/stuffed-mushrooms.jpg",
      originalRecipeUrl: "https://example.com/stuffed-mushrooms.pdf",
    },
    {
      name: "Caprese Skewers",
      description: "Fresh Caprese salad on skewers with mozzarella, tomatoes, and basil.",
      imageUrl: "https://example.com/caprese-skewers.jpg",
      originalRecipeUrl: "https://example.com/stuffed-mushrooms.pdf",
    },
    {
      name: "Guacamole Dip",
      description: "Classic guacamole dip with ripe avocados and fresh ingredients.",
      imageUrl: "https://example.com/guacamole-dip.jpg",
      originalRecipeUrl: "https://example.com/stuffed-mushrooms.pdf",
    },
    {
      name: "Spinach and Artichoke Dip",
      description: "Creamy and cheesy spinach and artichoke dip served with tortilla chips.",
      imageUrl: "https://example.com/spinach-artichoke-dip.jpg",
      originalRecipeUrl: "https://example.com/stuffed-mushrooms.pdf",
    },
    {
      name: "Bruschetta",
      description: "Italian bruschetta with diced tomatoes, garlic, basil, and balsamic glaze.",
      imageUrl: "https://example.com/bruschetta.jpg",
      originalRecipeUrl: "https://example.com/stuffed-mushrooms.pdf",
    },
  ];

  return (
    <>
      {/* Add A Recipe */}
      <div>
        <h2 className="text-2xl font-bold text-center text-slate-700">Save A New Recipe</h2>
        {/* Recipe Name and Note inputs */}
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

        {/* Save Recipe Button */}
            <button
                className="w-full p-4 text-2xl font-bold text-center text-slate-700 bg-sky-200/50 rounded-xl shadow-xl hover:bg-sky-400/50 focus:bg-sky-400/50 focus:outline-none"
                onClick={() => console.log('Save Recipe')}
            >
                Save Recipe
            </button>
        </div>

        {/* Recipe Categories */}
        <div>
          <p className="text-center text-slate-700 text-lg">
            Select a category to upload a recipe
          </p>
          <div className="flex flex-wrap justify-center p-4">
            {categories.map((categoryId, index) => (
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

        {/* Recipe PDF Display - list of recipes on left, pdf display on right */}
        <section>
            {/* Recipe List */}
            <div className="flex flex-col items-center justify-center w-full p-4 gap-4 bg-gray-100 rounded-xl">
                <h2 className="text-2xl font-bold text-center text-slate-700">Recipes</h2>
                <div className="flex flex-col items-center justify-center w-full p-4 gap-4 bg-gray-100 rounded-xl">
                    {appetizerRecipes.map((recipe, index) => (
                        <div key={index} className="flex flex-col items-center justify-center w-full p-4 gap-4 bg-gray-100 rounded-xl">
                            <h3 className="text-2xl font-bold text-center text-slate-700">{recipe.name}</h3>
                            <p className="text-lg font-bold text-center text-slate-700">{recipe.description}</p>
                            <p className="text-sm italic font-bold text-center text-slate-700">{recipe.originalRecipeUrl}</p>
                            <img className="w-full p-4 rounded-xl shadow-xl" src={recipe.imageUrl} alt={recipe.name} />
                        </div>
                    ))}
                </div>
            </div>
                
                {/* Recipe PDF Display */}
                


        </section>
        


      </div>
    </>
  );
}
