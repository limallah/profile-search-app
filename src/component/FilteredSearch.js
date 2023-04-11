import React from 'react'
import usersLi from '../Data/dataInfo'

const FilteredSearch = () => {

  const users = usersLi.filter ((person) => person.id === 'firstName, lastName, image, id, title')
  //

  const profileList = users.map((user, index) => {
      
  return(
    <div className='' key={index}>
        {user.title} {user.firstName} {user.lastName}
    </div>
  )
})

        return (
    <div className='searchresult'>
        {profileList}
    </div>
  )
}

export default FilteredSearch