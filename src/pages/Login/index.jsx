import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import { login } from '../../features/user';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({ name: name, email: email, role: role }))
        setName('');
        setEmail('');
        setRole('');
        navigate('/home');
    }

    return (
        <div className='login'>
            <form className='login-form' onSubmit={handleLogin}>
                <h1 className='login-title'>Blog Management</h1>
                <input type="text" placeholder='Enter name...' value={name} onChange={e => setName(e.target.value)} required />
                <input type="text" placeholder='Enter email...' value={email} onChange={e => setEmail(e.target.value)} required />
                <select required onChange={e => setRole(e.target.value)}>
                    <option value="">Select a Role...</option>
                    <option value="regular">Regular</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
                <button className='login-button'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login