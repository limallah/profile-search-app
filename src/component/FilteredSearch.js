// import React, { useState } from 'react'
import usersLi from '../Data/dataInfo'

const FilteredSearch = () => {

  // const initialuser = JSON.parse(localStorage.getItem(uList))

  //   const [search, setSearch] = useState(initialuser)
  const users = usersLi.filter((person) => person.firstName === person.id)
    console.log(users)

  const searchResult = users.map((user, index) => {
    return <li key={user.id}>
      {user.firstName}{}
    </li>
  })
       
    return (
      <div> 
        {searchResult}
      </div>
  )
}

export default FilteredSearch