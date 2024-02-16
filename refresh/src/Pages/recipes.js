import PreviousSearches from "../Components/previoussearches"
import RecipeCard from "../Components/recipecard"

export default function Recipes(){
    return(
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
        </div>
    )
}