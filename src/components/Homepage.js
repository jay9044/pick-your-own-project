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
       <h1>GotFood?</h1> 
       {/* // replace o with plates and question mark with spagetti */}
       <p>Be All The Chef You Can Be!</p>
       {this.props.nothingFound ? <h1>Sorry we haven't Got this...</h1> : null}
      
      </div>
    )
  }
}

export default Homepage;
