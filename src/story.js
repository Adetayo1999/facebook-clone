import React from 'react'
import './story.css'
import {Avatar} from '@material-ui/core'

function Story({image , avatar , title}){
return(
            <div style={{backgroundImage: `url(${image})`}} className="story">
                <Avatar className="story-avatar" src={avatar}/>
                <h4>{title}</h4>
            </div>
)

}

export default Story;
