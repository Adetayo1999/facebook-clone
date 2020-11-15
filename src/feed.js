import React, { useState , useEffect } from 'react';
import './feed.css'
import StoryReel from './storyreel'
import MessageSender from './messagesender'
import Post from './post'
import db from './firebase'
//
function Feed(){
const [posts , setPosts] = useState([])

useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot =>(
        setPosts(snapshot.docs.map((doc)=> ({id:doc.id , data:doc.data() })))
    ))
  
}, [])
return(
<div className="feed">
    <StoryReel/>
    <MessageSender/>
   
     {posts.map((post) => (
         <Post
         key={post.id}
         profilePic={post.data.profilePic}
         image={post.data.image}
         timestamp={post.data.timestamp}
         message={post.data.message}
         username={post.data.username}
         />
     ))}
     <Post 
     profilePic = {require('./images/4.jpg')}
     image ={require('./images/4.jpg')}
     message="hello manning"
     username ="Tomie"
     />
</div>

)


}

export default Feed