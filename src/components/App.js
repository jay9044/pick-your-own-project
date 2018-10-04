import React from 'react';
import Homepage from './Homepage';
import Search from './Search';
import Reciperesults from './Reciperesults';


import '../styles/components/app.scss';

const yummlyID = '1bb7c201';
const yummlyApiKey = 'f14c56f1efcc668efdf6a7a37d1f3f45';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      recipes: [],
      searchQuery: '',
      nothingFound:false,
      buttons: false,
      start: 9

      
    }
    this.handleHealthChange = this.handleHealthChange.bind(this)
    this.handleCourseChange = this.handleCourseChange.bind(this)
    this.handleCuisineChange = this.handleCuisineChange.bind(this)
    this.handleNextPage = this.handleNextPage.bind(this)
    this.handlePrevPage = this.handlePrevPage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.searchSubmit = this.searchSubmit.bind(this)
    
  }

searchSubmit(){
  return fetch(`http://api.yummly.com/v1/api/recipes?_app_id=${yummlyID}&_app_key=${yummlyApiKey}&q=${this.state.searchQuery}&maxResult=9&start=${this.state.start}&requirePictures=true&${this.state.cuisine}&${this.state.course}&${this.state.healthOption}`)
  .then(response => response.json())
  .then(body =>{
    console.log(body)
    const nothingFound = body.matches.length === 0;
    this.setState({
      nothingFound: nothingFound,
      recipes: nothingFound ? [] : body.matches,
      buttons: nothingFound ? false : true
    })
    console.log(this.state.recipes)
  })
}
  
  
handleChange(searchQuery){
  this.setState({searchQuery})
}

// drop down handlers
handleHealthChange(event){
  this.setState({
    healthOption: event.target.value
  },() => this.searchSubmit())
}

handleCourseChange(event){
  this.setState({
    course: event.target.value
  },() => this.searchSubmit())
}

handleCuisineChange(event){
  this.setState({
      cuisine: event.target.value
  }, () => this.searchSubmit())
}


handleNextPage(event){
  this.setState({
      start: this.state.start + 10
  },() => this.searchSubmit(this.state.start))
}

handlePrevPage(event){
  this.setState({
    start: this.state.start - 10
  }, () => this.searchSubmit(this.state.start))
}


  render(){
    return (
      <div className="app">
      <Homepage  buttons={this.state.buttons} nothingFound={this.state.nothingFound}/>
        <Search  
          searchQuery={this.state.searchQuery}
          handleChange={this.handleChange}
          searchSubmit={this.searchSubmit}
        />

        {/* drop downs */}
        <div className='select__buttons'>
          <select value={this.state.healthOption} name="Health Filter" onChange={this.handleHealthChange}>
            <option value='#'>Diet</option>
            <option value="nutrition.PROCNT.min=20&nutrition.PROCNT.max=50">High Protein</option>
            <option value="nutrition.CHOCDF.min=0&nutrition.CHOCDF.max=20">Low Carbs</option>
            <option value="nutrition.FASAT.min=0&nutrition.FASAT.max=35">Low Fat</option>
            <option value="nutrition.CHOLE.min=0&nutrition.CHOLE.max=25">Low Cholesterol</option>
            </select>
            
          <select name="Course" value={this.state.course} onChange={this.handleCourseChange}>
            <option  value='#'>Course(Main)</option>
            <option value="allowedCourse[]=course^course-Main Dishes">Main</option>
            <option value="allowedCourse[]=course^course-Appetizers">Lunch</option>
            <option value="allowedCourse[]=course^course-Lunch and Snacks">Appetizers</option>
            <option value="allowedCourse[]=course^course-Soups">Soups</option>
            </select>

          <select name="Cuisine" value={this.state.cuisine} onChange={this.handleCuisineChange}>
            <option  value='#'>All Cuisines</option>
            <option value="allowedCuisine[]=cuisine^cuisine-american">American</option>
            <option value="allowedCuisine[]=cuisine^cuisine-indian">Indian</option>
            <option value="allowedCuisine[]=cuisine^cuisine-italian">Italian</option>
            <option value="allowedCuisine[]=cuisine^cuisine-japanese">Japanese</option>
            <option value="allowedCuisine[]=cuisine^cuisine-thai">Thai</option>
            </select>
         </div>
        
        <div className='grid-container'>
       <Reciperesults   recipes={this.state.recipes}/>

       {/* pagination buttons */}
       <div className='results-buttons'>
       {/* ternary to show buttons */}
        {this.state.buttons && <button onClick={this.handleNextPage}>Next Page(10)</button>}
        {this.state.buttons && <button onClick={this.handlePrevPage}>Prev Page(10)</button>}
      </div>
       </div>
      </div>
    )
  }
}

export default App;


