import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editList } from '../../features/userList';
import Navbar from '../../components/Navbar';
import './UserManagement.css'
import NoAcess from '../../components/NoAcess';

const UserManagement = () => {
  const userList = useSelector((state) => state.userList.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const [listOfUsers, setlistOfUsers] = useState([]);

  useEffect(() => {
    setlistOfUsers(userList);
  }, [userList])


  const deleteUser = (userToDelete) => {
    const filteredListOfUsers = listOfUsers.filter(user => user.id !== userToDelete.id);
    dispatch(editList(filteredListOfUsers));
    alert('User deleted!');
  }

  return (
    <div className='user-management'>
      <Navbar />
      {user.role !== 'admin' ?
        <NoAcess /> :
        <div className='user-management-content'>
          <div className='content-wrapper'>
            <h1>Users List</h1>
            {userList.map(user => (
              <div key={user.id} className='user-list'>
                <p className='user-info'>Email: <span>{user.email}</span></p>
                <p className='user-info'>Name: <span>{user.name}</span></p>
                <p className='user-info'>Role: <span>{user.role}</span></p>
                <button onClick={() => deleteUser(user)}>X</button>
              </div>
            ))}
          </div>

        </div>
      }
    </div>
  )
}

export default UserManagement