import CustomImage from "./customimage"

export default function RecipeCard(){
    return(
        <div className="recipe-card">
            <CustomImage imgSrc="/img/gallery/gallery-01.jpg" pt="65%"/>
            <div className="recipe-card-info">
                <img className="author-img" src="/img/top/top-01.jpg" alt=""/>
                <p className="recipe-title">recipe name</p>
                <p className="recipe-desc">description of recipe</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
        
    )
}