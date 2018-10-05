import React from 'react';
import cx from 'classnames';

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
        this.closeSliderFunction = this.closeSliderFunction.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state ={
            recipeInfo: {},
            showSlider: false,
            recipeIngredientLines: []
        }
    }

   closeSliderFunction(){
       this.setState({
           showSlider:false
       })
   }


    handleClick(){
        const yummlyID = '1bb7c201';
        const yummlyApiKey = 'f14c56f1efcc668efdf6a7a37d1f3f45';
        fetch(`http://api.yummly.com/v1/api/recipe/${this.props.recipe.id}?_app_id=${yummlyID}&_app_key=${yummlyApiKey}`)
        .then(response => response.json())
        .then(body =>{
            console.log(body)
             this.setState({
            recipeInfo: body,
            showSlider: true,
            images: `${body.images[0].imageUrlsBySize[360]}`,
            recipeIngredientLines: body.ingredientLines,
            star: <i className='star-icon' className="fas fa-star"></i>,
            recipeVideo: `${body.attribution.url}`
        })})
    }
    render(){
        const sliderView = cx('hidden', {'RecipeInfo': this.state.showSlider})
        return(
        <div>
                <li>
                <h2 className='recipe__heading'>{this.props.recipe.recipeName}</h2>
                <img  onClick={this.handleClick} src={this.props.recipe.imageUrlsBySize[90]} className='puff-in-center meal-image'/>
                </li> 

                {/* //Slider view details */}
                <div className={sliderView}>
                <h4 className="closer" onClick={this.closeSliderFunction}>X</h4>
                <h2 className='ingredients-name'>{this.state.recipeInfo.name}</h2>
                <h4>CookTime: {this.state.recipeInfo.cookTime || this.state.recipeInfo.totalTime}</h4>  
                <p>Number Of Servings: {this.state.recipeInfo.numberOfServings}</p>
                <p>User Rating: {this.state.recipeInfo.rating}{this.state.star}</p>
                <img src={this.state.images}  className='modal-image'/>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    {this.state.recipeIngredientLines.map(recipeIngredient => {
                        return <li className='ingredients-list' key={this.props.recipe.id}>{recipeIngredient}</li>
                    })}
                </ul>
                <p><a href={this.state.recipeVideo} target='_blank'>Click Here To Watch This Being Prepared!</a></p>
                </div>              
        </div>
        )
    }
}

export default Reciperesult;





      