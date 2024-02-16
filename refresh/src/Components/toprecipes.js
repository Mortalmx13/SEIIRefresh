import TopRecipeCard from "./toprecipecard"

export default function TopRecipes(){
    return(
        <div className="section toprecipes">
            <h1 className="title">Our Top Recipes</h1>
            <div className="top-recipes-container">
                <TopRecipeCard />
                <TopRecipeCard />
                <TopRecipeCard />
                <TopRecipeCard />
                <TopRecipeCard />
                <TopRecipeCard />
            </div>
        </div>
    )
}