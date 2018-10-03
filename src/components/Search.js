import React from 'react';

import '../styles/components/app.scss';

function Search({searchQuery, handleChange, searchSubmit}){
    return (
      <form className='homepage-container' onSubmit={(event) => {event.preventDefault(); searchSubmit()}}> 
          <input type="text" onChange={(event) => handleChange(event.target.value)} value={searchQuery}/>
      </form>
    )
}

export default Search;
