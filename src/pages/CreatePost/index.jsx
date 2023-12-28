import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../features/post';
import Navbar from '../../components/Navbar';
import './CreatePost.css'
import NoAcess from '../../components/NoAcess';

export const postList = [];

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const user = useSelector((state) => state.user.value);


  const dispatch = useDispatch();

  const handleNewPostSubmit = (e) => {
    e.preventDefault();

    const post = { title: title, content: content, author: user.name };
    dispatch(createPost(post));
    postList.push(post);

    setTitle('');
    setContent('');
  }

  return (
    <div className='create-post'>
      <Navbar />
      {user.role !== 'editor' && 'admin' ?
        <NoAcess /> :
        <div className='create-post-content'>
          <form onSubmit={handleNewPostSubmit} className='create-post-form'>
            <h1>Create a Post...</h1>
            <input
              type="text"
              placeholder='Title...'
              value={title}
              onChange={e => setTitle(e.target.value)} />
            <input
              type="textarea"
              placeholder='Content...'
              value={content}
              onChange={e => setContent(e.target.value)} />
            <button>Create Post</button>
          </form>
        </div>
      }
    </div>
  )
}

export default CreatePost