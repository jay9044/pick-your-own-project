import React from 'react';
import Reciperesult from './Reciperesult'


function Reciperesults({recipes}){
    return (
     <div className='results'>
      <ul>
        {recipes.map(recipe => <Reciperesult   key={recipe.id} recipe={recipe}/>)}
      </ul>
     </div>
    );
}

export default Reciperesults;


