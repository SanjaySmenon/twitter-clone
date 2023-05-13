import React, { useEffect, useState } from 'react';
import "./Feed.css";
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from './firebase';
export default function Feed() {

  const [posts, setPosts]=useState([]);

  useEffect(() => {
     db.collection('posts').onSnapshot(Snapshot =>(
      setPosts(Snapshot.docs.map(doc => doc.data()))
     ))
  }, []);
  return (
    
    <div className='feed'>
       <div className="feed__header">
       <h2>Home</h2>
       </div>
       
       <Tweetbox/>
        
      {posts.map(post => (
      <Post
      displayName={post.displayName}
      userName={post.userName}
      verified={post.verified}
      text={post.text}
      avatar={post.avatar}
      image= {post.image}/>
      
      ))}
      
    
  
      
    </div>
  )
}
