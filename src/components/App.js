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
      nothingFound:false
    }
    this.handleChange = this.handleChange.bind(this)
    this.searchSubmit = this.searchSubmit.bind(this)
  }


searchSubmit(){
  return fetch(`http://api.yummly.com/v1/api/recipes?_app_id=${yummlyID}&_app_key=${yummlyApiKey}&q=${this.state.searchQuery}&requirePictures=true`)
  .then(response => response.json())
  .then(body =>{
    console.log(body)
    const nothingFound = body.matches.length === 0;
    this.setState({
      nothingFound: nothingFound,
      recipes: nothingFound ? [] : body.matches
    })
  //   if(body.matches.length === 0){
  //     this.setState({
  //       nothingFound: true
  //     })
  //     console.log('nothing found')
  //   }else{
  //   this.setState({
  //     recipes: body.matches,
  //     nothingFound: false
  //   })
  // }
    console.log(this.state.recipes)
  })
}
  
  
handleChange(searchQuery){
  this.setState({searchQuery})
}


  render(){
    return (
      <div className="app">
        <div className='grid-container'>
        <Homepage nothingFound={this.state.nothingFound}/>
        <Search  
          searchQuery={this.state.searchQuery}
          handleChange={this.handleChange}
          searchSubmit={this.searchSubmit}
        />
       <Reciperesults  recipes={this.state.recipes}/>
       </div>
      </div>
    )
  }
}

export default App;


