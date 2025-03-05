import { BASE_URL } from "@/constants/api";
import "./style.scss";
import Image from "next/image";
import Link from "next/link";
import { getIngredients } from "@/constants/functions";
import RecipeItem from "@/components/RecipeItem/RecipeItem";
import ErrorModal from "@/components/ErrorModal/ErrorModal";

const Recipe = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  try {
    const recipeResponse = await fetch(`${BASE_URL}/recipes/${id}`);
    const { data: recipeData } = await recipeResponse.json();

    const recipe = recipeData.meals[0];

    const categoryResponse = await fetch(
      `${BASE_URL}/recipes?c=${recipe.strCategory}`
    );
    const ingredients = getIngredients(recipe);

    const { data: categoryData } = await categoryResponse.json();
    const recipesByCategory = categoryData.meals;

    return (
      <div className="recipe">
        <div className="recipe__general">
          <div className="recipe__header">
            <Image
              src={recipe.strMealThumb}
              alt={"recipe_img"}
              width={200}
              height={200}
            />
            <div className="recipe__info">
              <p className="name">{recipe.strMeal}</p>
              <Link href={`/recipe/all?a=${recipe.strArea}`}>
                <p className="country">{recipe.strArea}</p>
              </Link>
            </div>
          </div>
          <h2>Instructions:</h2>
          <p>{recipe.strInstructions}</p>
          <h2>Ingredients:</h2>
          <ul>
            {ingredients.map((item, index) => (
              <Link key={index} href={`/recipe/all?i=${item}`}>
                <li>{item}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="recipe__others">
          <h2>Category: {recipe.strCategory}</h2>
          <div className="recipe__tab">
            {recipesByCategory &&
              recipesByCategory.map(
                ({ idMeal, strMeal }: { idMeal: string; strMeal: string }) => (
                  <Link
                    key={idMeal}
                    href={`/recipe/all?c=${recipe.strCategory}`}
                  >
                    <RecipeItem name={strMeal} />
                  </Link>
                )
              )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <ErrorModal />;
  }
};

export default Recipe;
