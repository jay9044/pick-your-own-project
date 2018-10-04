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
       <h1 className='heartbeat'>GotFood?! <i className="fas fa-utensils"></i></h1> 
       <p>Type in what you have in your fridge</p>
       <p>OR</p>
       
       {/* // replace o with plates and question mark with spagetti */}
       {this.props.nothingFound ? <h1>Sorry we haven't Got this...</h1> : null}
      
      </div>
    )
  }
}

export default Homepage;
