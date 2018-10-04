import React from 'react';

import '../styles/components/app.scss';

function Search({searchQuery, handleChange, searchSubmit}){
    return (
      <form className='homepage-container' onSubmit={(event) => {event.preventDefault(); searchSubmit()}}> 
          <input type="text" placeholder='Search for a recipe..' onChange={(event) => handleChange(event.target.value)} value={searchQuery}/><i className="fas fa-search"></i>
      </form>
    )
}

export default Search;
