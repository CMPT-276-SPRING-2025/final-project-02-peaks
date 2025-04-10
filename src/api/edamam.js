

// getRecipe: This function queries the API with the specified parameters and returns a list of recipes.
//
// Parameters:
//      - ingredients: Takes in an array of ingredients that we want in our recipes.
//      - excludedIngredients: Takes in an array of ingredients that we don't want in our recipes.
//      - diet: Takes in an array of the following keywords: balanced, high-fiber, high-protein, low-carb, low-fat, low-sodium
//      - dietaryRestrictions: Takes in an array of the following keywords:  low-fat-abs, gluten-free, low-potassium, low-sugar, lupine-free, peanut-free, pescatarian, pork-free, 
//                                                                           red-meat-free, sesame-free, shellfish-free, soy-free, sugar-conscious, sulfite-free, 
//                                                                           tree-nut-free, vegan, vegetarian, wheat-free (there's more but I've limited them to this for simplicity sake)
//      - maxCal: Takes in an integer of the maximum amount of calories that the recipe should have.
//      - maxTime: Takes in an integer of the maximum amount of time (in minutes) the recipe should have.
//      - cuisineType: Takes in a string to set dishes to be of the following cuisines: American, Asian, British, Caribbean, Central Europe, Chinese, Eastern Europe, French, Indian, Italian, Japanese, 
//       
//      - limit: Takes in an integer, will set how many recipe results we want to see, by default set to 1. Should change later.
//
// Returns:
//      - recipeName: the name of the given recipe
//      - imageURL: a picture of the recipe
//      - recipeURL: the link the the recipe from seriouseats.com
//      - ingredients: An array of javascript objects, each object corresponds to an ingredient + its amount
//      - timetoMake: estimated cooking time in minutes.

const getRecipe = async (
    ingredients = [], 
    excludedIngredients = [], 
    diet = [], 
    dietaryRestrictions = [], 
    cuisineType = "",
    maxCal=null, 
    maxTime=null, 
    limit = 1 ) => {
    if (ingredients.length === 0) {
        return [];
    }
    ingredients = ingredients.join(",");
    const queryParams = new URLSearchParams({
        type: "public",
        q: ingredients,
        app_id: process.env.REACT_APP_EDAMAM_APP_ID,
        app_key: process.env.REACT_APP_EDAMAM_API_KEY,
    });

    // For whatever reason the API has a stroke if you send it an empty array. These conditions will
    // add the parameters if their arrays aren't empty.
    if (cuisineType) queryParams.append("cuisineType", cuisineType)
    if (excludedIngredients.length > 0) queryParams.append("excludedIngredient", excludedIngredients.join(","));
    if (dietaryRestrictions.length > 0) dietaryRestrictions.forEach(d => queryParams.append("health", d));
    if (diet.length > 0) diet.forEach(d => queryParams.append("diet", d));

    try {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?${queryParams.toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if (!json.hits || json.hits.length === 0) {
            console.log("No recipes found");
            return [];
        }

        const res = [];
        for (let i = 0; i < (json.hits.length <= limit ? json.hits.length : limit); i++) {
            let current = json.hits[i].recipe;
            if (maxCal && current.calories > maxCal) { 
                continue 
            }
            if (maxTime && current.totalTime > maxTime) { 
                continue 
            }
            let parsedData = {
                recipeName: current.label,
                recipeURL: current.url,
                imageURL: current.image,
                ingredients: current.ingredients,
                timetoMake: current.totalTime,
                calories: current.calories
            };
            res.push(parsedData);
        }
        return res;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default getRecipe