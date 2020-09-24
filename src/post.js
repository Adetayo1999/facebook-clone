import React from 'react'
import './post.css'
import {Avatar} from '@material-ui/core'

function Post({profilePic,image,username,timestamp,message }){

    return(
        <div className="post">
                <div className="post-top">
                <Avatar src={profilePic} className="profile-picture"/>
                <div className="post-top-info">
                   <h3>{username}</h3>
                 <p>Timestamp...</p>  
                </div>
                </div>
        </div>
    )
}
export default Post;