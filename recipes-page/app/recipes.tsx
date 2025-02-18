export const OMELETTE = {
    name: "Simple Omelette Recipe",
    image_details: {
        source: "/image-omelette.jpeg",
        width: 1312,
        height: 600,
        alt: "Omelette with fillings"
    },
    description: "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats",
    time: {
        total: "Approximately 10 minutes",
        preparation: "5 minutes",
        cooking: "5 minutes"
    },
    ingredients: [
        "2-3 large eggs",
        "Salt, to taste",
        "1 tablespoon of butter or oil", 
        "Optional fillings: cheese, diced vegetables, cooked meats, herbs"],
    instructions: [
        {short: "Beat the eggs", long: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."},
        {short: "Heat the pan", long: "Place a non-stick frying pan over medium heat and add butter or oil."},
        {short: "Cook the omelette", long: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."},
        {short: "Add fillings (optional)", long: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."},
        {short: "Fold and serve", long: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."},
        {short: "Enjoy!", long: "Serve hot, with additional salt and pepper if needed."}],
    nutrition_specification: "The table below shows nutritional values per serving without the additional fillings.",
    nutrition_values: {calories: "277", carbs: "0g", protein: "13g", fat: "22g"}
};