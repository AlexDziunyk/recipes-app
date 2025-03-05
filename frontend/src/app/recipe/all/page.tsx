import RecipeItem from "@/components/RecipeItem/RecipeItem";
import "./style.scss";
import { BASE_URL } from "@/constants/api";
import {
  formatParamsToRequest,
  formatParamsToString,
} from "@/constants/functions";
import Link from "next/link";

const RecipeAll = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const isParamsEmpty = Object.keys(params).length === 0;

  const requestString = isParamsEmpty
    ? "recipes"
    : `recipes/${formatParamsToRequest({ params })}`;

  const response = await fetch(`${BASE_URL}/${requestString}`);
  const { data } = await response.json();

  return (
    <div className="recipe-all">
      <h1>
        {isParamsEmpty
          ? "All recipes"
          : `Filters: ${formatParamsToString({ params })}`}
      </h1>
      <h2>Category: </h2>
      <div className="recipes">
        {data &&
          data.meals.map(
            ({ idMeal, strMeal }: { idMeal: string; strMeal: string }) => (
              <Link key={idMeal} href={`/recipe/${idMeal}`}>
                <RecipeItem name={strMeal} />
              </Link>
            )
          )}
      </div>
    </div>
  );
};

export default RecipeAll;
