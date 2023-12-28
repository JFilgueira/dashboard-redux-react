import React from 'react';
import { postList } from '../CreatePost';
import Navbar from '../../components/Navbar';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='home-content'>
      {postList.map(post => (
        <div className='post'>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <p>author: {post.author}</p>
        </div>
      ))}

      <div className='post'>
          <h1>Title X</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, nibh sit amet feugiat malesuada, tortor libero condimentum urna, et laoreet magna nulla ac turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sed tincidunt tellus, vel sodales tortor. Nulla at hendrerit elit. Cras tristique justo nec urna bibendum cursus. Nullam in felis nisi. Pellentesque eu mi sed elit consequat pulvinar quis vel erat. In lectus erat, ultrices et sem quis, interdum venenatis augue. Duis lacinia ipsum ac mollis malesuada. Donec tellus justo, interdum in aliquam non, mollis id orci. Proin tincidunt ultrices pellentesque. Sed feugiat blandit bibendum. Donec ullamcorper, leo vel vehicula porttitor, nisi felis eleifend turpis, eu aliquam felis odio quis augue. Integer porttitor ante non ex mattis, vitae egestas nibh placerat. Ut quis mi nisi.</p>
          <p>author:</p>
      </div>
      <div className='post'>
          <h1>Title X</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, nibh sit amet feugiat malesuada, tortor libero condimentum urna, et laoreet magna nulla ac turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sed tincidunt tellus, vel sodales tortor. Nulla at hendrerit elit. Cras tristique justo nec urna bibendum cursus. Nullam in felis nisi. Pellentesque eu mi sed elit consequat pulvinar quis vel erat. In lectus erat, ultrices et sem quis, interdum venenatis augue. Duis lacinia ipsum ac mollis malesuada. Donec tellus justo, interdum in aliquam non, mollis id orci. Proin tincidunt ultrices pellentesque. Sed feugiat blandit bibendum. Donec ullamcorper, leo vel vehicula porttitor, nisi felis eleifend turpis, eu aliquam felis odio quis augue. Integer porttitor ante non ex mattis, vitae egestas nibh placerat. Ut quis mi nisi.</p>
          <p>author:</p>
      </div>
      <div className='post'>
          <h1>Title X</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, nibh sit amet feugiat malesuada, tortor libero condimentum urna, et laoreet magna nulla ac turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sed tincidunt tellus, vel sodales tortor. Nulla at hendrerit elit. Cras tristique justo nec urna bibendum cursus. Nullam in felis nisi. Pellentesque eu mi sed elit consequat pulvinar quis vel erat. In lectus erat, ultrices et sem quis, interdum venenatis augue. Duis lacinia ipsum ac mollis malesuada. Donec tellus justo, interdum in aliquam non, mollis id orci. Proin tincidunt ultrices pellentesque. Sed feugiat blandit bibendum. Donec ullamcorper, leo vel vehicula porttitor, nisi felis eleifend turpis, eu aliquam felis odio quis augue. Integer porttitor ante non ex mattis, vitae egestas nibh placerat. Ut quis mi nisi.</p>
          <p>author:</p>
      </div>
    </div>  
    </div>
    
  )
}

export default Home