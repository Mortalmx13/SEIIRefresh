export default function TopRecipeCard({top}){
    return(
        <div className="top-card">
           <img src="/img/top/top-01.jpg" alt="" />
           <div className="top-card-info">
                <h3 className="top-card-name">top drink name</h3>
                <p className="top-ingredient-count">Ingredients: <b>3</b></p>
                <p className="top-cuisine">Type: <b>Smoothie</b></p>
                <p className="top-icons">

                </p>
           </div>
        </div>
        

    )
}