import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../features/user'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let accessHome = false;
  let accessCreatePost = false;
  let accessUserManagement = false;

  const isAble = () => {
    if (user.role === 'admin') {
      accessHome = false;
      accessCreatePost = false;
      accessUserManagement = false;
    } else if (user.role === 'editor') {
      accessHome = false;
      accessCreatePost = false;
      accessUserManagement = true;
    } else {
      accessHome = false;
      accessCreatePost = true;
      accessUserManagement = true;
    }
  }

  isAble();

  const handleLogout = () => {
    dispatch(login({ name: '', email: '', role: '' }));
    navigate('/')
  }

  return (
    <div className='navbar' style={{width: toggle ? '80%' : '50px', position: toggle ? 'absolute' : 'inherit'}}>
      <div className="hamburguer-container">
          <GiHamburgerMenu className='hamburguer' onClick={() => setToggle(!toggle)}/>
      </div>
      <div className="navbar-content" style={{display: toggle ? 'block' : ''}}>
        <h1 className='navbar-title'>Dashboard</h1>
        <p className='navbar-user'>welcome {user.name}</p>
        <nav>
          <ul className='navbar-nav'>
            <Link to='/home' className='nav-link'>
              <button disabled={accessHome}>Home</button>
            </Link>
            <Link to='/create-post' className='nav-link'>
              <button disabled={accessCreatePost}>Create Post</button>
            </Link>
            <Link to='/user-management' className='nav-link'>
              <button disabled={accessUserManagement}>User's Management</button>
            </Link>
          </ul>
        </nav>
        <p className='inform-user'>If you can't acess a page, it's because you need a higher role!</p>
        <button className='logout-button' onClick={handleLogout}>Log out</button>
      </div>
    </div>
  )
}

export default Navbar