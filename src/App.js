import React, { useState } from 'react';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: 'Bob',
      lastname: 'Marley',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      age: 40,
      isHappy: true
    },
    {
      id: 2,
      firstname: 'John',
      lastname: 'Doe',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      age: 22,
      isHappy: false
    }
  ]);

  const deleteUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const editUser = (updatedUser) => {
    console.log('Editing', updatedUser);
    console.log(users.id);
    setUsers(prev =>
      prev.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  };

  const addUser = (user) => {
    const newUser = {
      ...user,
      id: Date.now()
    };

    setUsers(prev => [...prev, newUser]);
  };

  return (
    <div>
      <Header title="User List" />

      <main>
        <Users
          users={users}
          onDelete={deleteUser}
          onEdit={editUser}
          onClick={(id) => console.log('User with id', id, 'clicked')}
        />
      </main>

      <aside>
        <AddUser onAdd={addUser} />
      </aside>
    </div>
  );
};

export default App;