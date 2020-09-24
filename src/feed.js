import React from 'react';
import './feed.css'
import StoryReel from './storyreel'
import MessageSender from './messagesender'
import Post from './post'
function Feed(){

return(
<div className="feed">
    <StoryReel/>
    <MessageSender/>
    <Post />
    <Post />
    <Post />

</div>

)


}

export default Feed