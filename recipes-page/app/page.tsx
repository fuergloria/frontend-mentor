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
    <div className="bg-white sm:rounded-lg sm:p-6 font-outfit text-stone-600 sm:w-3/4 md:w-1/2">
      <Image className="md:rounded"
        src={data.image_details.source}
        alt={data.image_details.alt}
        width={data.image_details.width}
        height={data.image_details.height} />
        <div className="p-8">
          <h1 className="text-stone-900 text-4xl font-young-serif"> {data.name} </h1>
          <p className="pt-6 pb-8"> {data.description} </p>
          <Preparation time={data.time} />
          <Ingredients ingredients={data.ingredients} />
          <hr></hr>
          <Instructions instructions={data.instructions} />
          <hr></hr>
          <Nutrition nutrition_specification={data.nutrition_specification} nutrition_values={data.nutrition_values} />
        </div>
    </div>
  );
}

function Preparation({time} : {time: RecipeData["time"]}) {
  return(
    <div className="bg-rose-50 px-6 py-4 rounded-lg">
      
      <h2 className="text-rose-800 font-bold text-xl">Preparation time</h2>

      <ul className="list-disc list-outside pt-1.5 pl-3 marker:text-rose-800 marker:align-text-bottom ml-4">
        <li className="p-1 pl-3">
          <span>
            <span className="font-bold">Total:&nbsp;</span>
          {time.total}</span>
          
        </li>
        <li className="p-1 pl-3">
          <span className="font-bold">Preparation:&nbsp;</span>
          {time.preparation}
        </li>
        <li className="p-1 pl-3">
        <span className="font-bold">Cooking:&nbsp;</span>
        {time.cooking}
        </li>
      </ul>

    </div>
  )
}

function Ingredients({ingredients}: {ingredients:RecipeData["ingredients"]}) {
  return(
   <div className="pt-6 pb-3">
    <h2 className="text-brown-800 font-young-serif text-3xl">Ingredients</h2>
    <ul className="list-disc list-outside marker:text-brown-800 ml-3 p-3 leading-7" >
      {ingredients.map((ingredient, index) => (
        <li className="p-1 pl-4" key={index}>{ingredient}</li>
      ))}
    </ul>
   </div> 
  )
}

function Instructions({instructions}: {instructions : RecipeData["instructions"]}) {
  return(
    <div className="py-6">
      <h2 className="text-brown-800 font-young-serif text-3xl mb-4">Instructions</h2>
      <ol className="list-decimal list-outside marker:text-brown-800 marker:font-bold ml-5">
        {instructions.map((instruction, index) =>(
          <li key={index} className="p-1 pl-4">
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
    <div className="mt-6">
      <h2 className="text-brown-800 font-young-serif text-3xl mb-4">Nutrition</h2>
      <table className="w-full text-left">
        <caption className="caption-top text-left mb-4">
          {nutrition_specification}
        </caption>
        <tbody>
          <tr className="border-collapse border-b border-stone-150">
            <th className="font-medium p-3 pl-8 w-1/2">Calories</th>
            <td className="font-bold text-brown-800 pl-2">{nutrition_values.calories}</td>
          </tr>
          <tr className="border-collapse border-y border-stone-150">
            <th className="font-medium p-3 pl-8">Carbs</th>
            <td className="font-bold text-brown-800 pl-2">{nutrition_values.carbs}</td>
          </tr>
          <tr className="border-collapse border-y border-stone-150">
            <th className="font-medium p-3 pl-8">Protein</th>
            <td className="font-bold text-brown-800 pl-2">{nutrition_values.protein}</td>
          </tr>
          <tr className="border-collapse border-t border-stone-150">
            <th className="font-medium p-3 pl-8">Fat</th>
            <td className="font-bold text-brown-800 pl-2">{nutrition_values.fat}</td>
          </tr>
        </tbody>  
      </table>

    </div>
  )
}