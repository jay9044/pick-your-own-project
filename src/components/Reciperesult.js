import React from 'react';


function Reciperesult({recipe}){
    return (
     <div className='test'>
        <li>
        <h2 className='recipe__heading'>{recipe.recipeName}</h2>
        <img src={recipe.imageUrlsBySize[90]} />
            {/* <ul>
                {recipe.ingredients.map(recipeIngredient => {
                   return <li key={recipeIngredient}>{recipeIngredient}</li>
                })}
            </ul> */}
        </li>
     </div>
    )
}

export default Reciperesult;


