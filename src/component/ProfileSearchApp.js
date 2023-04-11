import React from 'react'
import SearchBar from './SearchBar'
import UsersList from './UsersList'
// import FilteredSearch from './FilteredSearch'

const ProfileSearchApp = () => {
  return (
    <div className='wrapper'> 
        <SearchBar/>
        <UsersList/>
       
    </div>
  )
}

export default ProfileSearchApp