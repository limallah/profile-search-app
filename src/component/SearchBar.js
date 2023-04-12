import React, { useState } from 'react'
import usersLi from '../Data/dataInfo';
// import {usedState} from 'react'

const SearchBar = () => {

  const [newSearch, setNewSearch] = useState("");
  // const users = [usersLi];

  const handleChange = (event) => {
    const searchuser = event.target.value
    setNewSearch(searchuser);
 }

  const profileLists = usersLi.filter((person) => 
  person.firstName.toLowerCase().includes(newSearch.toLowerCase())|| 
  person.lastName.toLowerCase().includes(newSearch.toLowerCase()));  

  return (
    <>
      <div className='search'>
          <input 
            type='text' 
            placeholder='Search for a username' 
            value={newSearch} 
            onChange={handleChange}
          />
      </div>
      <ul className='searchresult'> {profileLists.map((user) =>(
            <li className='user' key={user.id}> 
            <img src={user.image} alt="" style={{height: "40px"}}/> 
            {user.id} {user.title} {user.firstName} {user.lastName} </li>
            ))}
      </ul>      
    </>      
    
  )
}

export default SearchBar