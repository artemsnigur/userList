import React, { useState } from 'react';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';
import AddUser from './AddUser';

const User = ({
  id,
  firstname,
  lastname,
  bio,
  age,
  isHappy,
  onDelete,
  onEdit,
  ...rest
}) => {
  const [editForm, setEditForm] = useState(false);

  return (
    <div className='user'>
      <IoCloseCircleSharp 
        onClick={() => onDelete(id)} 
        className='delete-icon' 
      />
      <IoHammerSharp 
        onClick={() => setEditForm(!editForm)}
        className='edit-icon'
      />
      <h3>{firstname} {lastname}</h3>
      <p>{bio}</p>
      <b>{isHappy ? 'Happy' : 'Unhappy'}</b>

      {editForm && <AddUser 
        user={{ id, firstname, lastname, bio, age, isHappy }} 
        onAdd={(updatedUser) => { onEdit(updatedUser); setEditForm(false); }} 
      />}
    </div>
  )
}

export default User;