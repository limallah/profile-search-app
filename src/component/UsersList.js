import React from 'react'
import usersLi from '../Data/dataInfo'

const UsersList = () => {

  const profileLists = usersLi.map((user,index) =>{
    return <li className='user' key={index}> 
    <img src={user.image} alt="" style={{height: "40px"}}/> 
    {user.id} {user.title} {user.firstName} {user.lastName} </li>
  })
  

 return (
    <div className='searchresult'>
        {profileLists}
    </div>
  )
}

export default UsersList