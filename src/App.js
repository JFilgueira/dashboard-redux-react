import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import UserManagement from './pages/UserManagement';
import Login from './pages/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/user-management' element={<UserManagement/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
