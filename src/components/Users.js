import React from 'react';
import User from './User';

const Users = ({ users, onDelete, onEdit }) => {

  if (!users.length) { 
    return <div className='user'> <h3>No users available</h3> </div>
  }
  
  return (
    <div>
      {users.map((el) => (
        <User key={el.id} {...el} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  )
}

export default Users;