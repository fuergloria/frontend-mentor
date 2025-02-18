import Image from "next/image";
import { OMELETTE } from "./recipes";

interface RecipeData {
  name: string;
  image_details: {
    source: string;
    width: number;
    height: number;
    alt: string
  };
  description: string;
  time: {
    total: string;
    preparation: string;
    cooking: string;
  };
  ingredients: string[];
  instructions: {
    short: string;
    long: string 
  } [];
  nutrition_specification: string;
  nutrition_values: { 
    calories: string;
    carbs: string;
    protein: string;
    fat: string };
}

export default function Home() {
  return (
    <div role="main" className="bg-stone-100 min-h-screen flex flex-col items-center justify-center">
      <Recipe data={OMELETTE} />
    </div>
  );
}

function Recipe({data} : {data: RecipeData}) {
  return(
    <div className="bg-white sm:rounded-lg sm:p-6 font-outfit">
      <Image className="md:rounded"
        src={data.image_details.source}
        alt={data.image_details.alt}
        width={data.image_details.width}
        height={data.image_details.height} />
        <div className="p-6">
          <h1 className="text-stone-900 text-3xl font-bold"> {data.name} </h1>
          <p className=""> {data.description} </p>
          <Preparation time={data.time} />
          <Ingredients ingredients={data.ingredients} />
          <Instructions instructions={data.instructions} />
          <Nutrition nutrition_specification={data.nutrition_specification} nutrition_values={data.nutrition_values} />
        </div>
    </div>
  );
}

function Preparation({time} : {time: RecipeData["time"]}) {
  return(
    <div className="bg-rose-50 p-2 rounded-lg">
      <h2 className="text-rose-800 font-bold">Preparation time</h2>
      <ul className="list-disc list-inside p-2 marker:text-rose-800">
        <li>
          <span className="font-bold">Total:&nbsp;</span>
          {time.total}
        </li>
        <li>
          <span className="font-bold">Preparation:&nbsp;</span>
          {time.preparation}
        </li>
        <li>
        <span className="font-bold">Cooking:&nbsp;</span>
        {time.cooking}
        </li>
      </ul>
    </div>
  )
}

function Ingredients({ingredients}: {ingredients:RecipeData["ingredients"]}) {
  return(
   <div>
    <h2 className="text-brown-800">Ingredients</h2>
    <ul className="list-disc list-inside marker:text-brown-800">
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
   </div> 
  )
}

function Instructions({instructions}: {instructions : RecipeData["instructions"]}) {
  return(
    <div>
      <h2 className="text-brown-800">Instructions</h2>
      <ol className="list-decimal list-inside marker:text-brown-800">
        {instructions.map((instruction, index) =>(
          <li key={index}>
              <span className="font-bold">
                {instruction.short}:&nbsp;
              </span>
              {instruction.long}
          </li>
        ))}
      </ol>
    </div>
  )
}

function Nutrition({nutrition_specification, nutrition_values}: {nutrition_specification: string, nutrition_values: RecipeData["nutrition_values"]}) {
  return(
    <div>
      <h2 className="text-brown-800">Nutrition</h2>
      <table className="w-full">
        <caption className="caption-top">
          {nutrition_specification}
        </caption>
        <tbody>
          <tr className="border-collapse border-b border-stone-150">
            <th className="font-medium">Calories</th>
            <td className="font-bold text-brown-800">{nutrition_values.calories}</td>
          </tr>
          <tr className="border-collapse border-y border-stone-150">
            <th className="font-medium">Carbs</th>
            <td className="font-bold text-brown-800">{nutrition_values.carbs}</td>
          </tr>
          <tr className="border-collapse border-y border-stone-150">
            <th className="font-medium">Protein</th>
            <td className="font-bold text-brown-800">{nutrition_values.protein}</td>
          </tr>
          <tr className="border-collapse border-t border-stone-150">
            <th className="font-medium">Fat</th>
            <td className="font-bold text-brown-800">{nutrition_values.fat}</td>
          </tr>
        </tbody>  
      </table>

    </div>
  )
}