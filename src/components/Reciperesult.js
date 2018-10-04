import React from 'react';

// function Reciperesult({recipe, handleClick}){
//     return (
//      <div className='test'>
//         <li>
//         <h2 className='recipe__heading'>{recipe.recipeName}</h2>
//         <img  src={recipe.imageUrlsBySize[90]} className='puff-in-center'/>
//             {/* <ul>
//                 {recipe.ingredients.map(recipeIngredient => {
//                    return <li key={recipeIngredient}>{recipeIngredient}</li>
//                 })}
//             </ul> */}
//         </li>
//      </div>
//     )
// }

// export default Reciperesult;


class Reciperesult extends React.Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state ={
            recipeInfo: {}
        }
    }

    handleClick(){
        const yummlyID = '1bb7c201';
        const yummlyApiKey = 'f14c56f1efcc668efdf6a7a37d1f3f45';
        fetch(`http://api.yummly.com/v1/api/recipe/${this.props.recipe.id}?_app_id=${yummlyID}&_app_key=${yummlyApiKey}`)
        .then(response => response.json())
        .then(body =>{
            console.log(body)
             this.setState({
            recipeInfo: body
        })})
    }
    render(){
        return(
        <div className='test'>
                <li>
                <h2 className='recipe__heading'>{this.props.recipe.recipeName}</h2>
                <img  onClick={this.handleClick} src={this.props.recipe.imageUrlsBySize[90]} className='puff-in-center meal-image'/>
                </li>             
        </div>
        )
    }
}

export default Reciperesult;




{/* <ul>
     {recipe.ingredients.map(recipeIngredient => {
       return <li key={recipeIngredient}>{recipeIngredient}</li>
         })}
       </ul> */}

      