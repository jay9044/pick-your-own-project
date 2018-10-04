import React from 'react';
import Search from './Search'
import '../styles/components/homepage.scss';

class Homepage extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div  className='homepage-container'>
      <ul className='favourites'>
        <li><a href='#'>Favourtie Recipes</a><i className="fas fa-angle-down"></i></li>
      </ul>
       <h1 className='heartbeat'>GotFood?! <i className="fas fa-utensils"></i></h1> 
       <span className='motto'><strong>The Healthy Alternative!</strong></span>
       <p>Type in what you have in your fridge</p>
       <p>OR</p>
       {this.props.nothingFound && <h1 className='no-result'>Sorry we haven't Got this...<i class="fas fa-sad-cry"></i></h1>}
      </div>
    )
  }
}

export default Homepage;
