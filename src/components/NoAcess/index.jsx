import React from 'react'
import './NoAcess.css'
import { useDispatch } from 'react-redux'
import { login } from '../../features/user';
import { useNavigate } from 'react-router-dom';

const NoAcess = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleLogout = () => {
        dispatch(login({name: '', email: '', role: ''}));
        navigate('/')
      }

    return (
        <div className='no-acess'>
            <div className='no-acess-content'>
                <h1>Your account role doesn't have permission to access this page!</h1>
                <p>Change the type of your account to a higher one.</p>
                <button onClick={handleLogout}>Change account role</button>
            </div>
        </div>
    )
}

export default NoAcess