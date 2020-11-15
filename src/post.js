import React from 'react'
import './post.css'
import {Avatar} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import {ExpandMoreOutlined} from '@material-ui/icons'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'


function Post({profilePic,image,username,timestamp,message }){

    return(
        <div className="post">
                <div className="post-top">
                <Avatar src={profilePic} className="profile-picture"/>
          y      <div className="post-top-info">
                   <h3>{username}</h3>
                 <small>{new Date(timestamp?.toDate()).toUTCstring()}</small>
                </div>
                </div>
                <div className="post-bottom">
                 <p>{message}</p>
</div>
<div className="post-image">
<img src={image} alt=""/>     
</div>
<div className="express">
<div className="express-option">
<ThumbUpIcon />
<p>Like</p>
</div>
<div className="express-option">
<ChatBubbleOutlineIcon/>
<p>Comment</p>
</div>
<div className="express-option">
<NearMeIcon />
<p>Share</p>
</div>
<div className="express-option">
<AccountCircleIcon />
<ExpandMoreOutlined />
</div>
</div>
</div>
)
}
export default Post;