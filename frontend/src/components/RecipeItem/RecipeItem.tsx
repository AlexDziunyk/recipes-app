import Link from "next/link";
import "./style.scss";

const RecipeItem = ({ name }: {name: string }) => {
  return (
   
      <div className="recipe-item">
        <span>{name}</span>
      </div>
    
  );
};

export default RecipeItem;
