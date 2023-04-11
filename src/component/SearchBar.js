import React, { useState } from 'react'
// import {usedState} from 'react'

const SearchBar = () => {

  const [newSearch, setNewSearch] = useState("");

  const handleChange = (event) => {
    const searchuser = event.target.value
    setNewSearch(searchuser);
  }

  // const handleClick = () => {
  //   props.handleClick(newSearch)
  //   setNewSearch("");
  // }

  return (
    <div className='search'>
        <input type='text' placeholder='Search for a user' value={newSearch} onChange={handleChange}/>
    </div>
  )
}

export default SearchBar