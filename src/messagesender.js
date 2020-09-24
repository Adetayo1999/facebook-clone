import React, {useState} from 'react'
import './messagesender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'


function MessageSender(){
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const [input,setInput] =useState('');
    const [image , setImage] = useState('')
    console.log(input)
return(
        <div className="message">
           <div className="message-top">
            <Avatar src={require('./images/avatar.jpg')}/>
            <form>
                <input type="text" placeholder="What's On Your Mind?" className="message-input" value={input} onChange= {(e)=> setInput(e.target.value)}/>
                <input type="text" 
                placeholder="image URL (Optional)" value={image} onChange={(e)=>
                setImage(e.target.value)}/>
            <input type="submit" onClick={handleSubmit} value="Hidden Submit"/>
            </form>
           </div>
           <div className="message-bottom">
                    <div className="message-option">
                    <VideocamIcon style={{color:'red'}}/>
                    <h3>Live Video</h3>
                    </div>
                    <div className="message-option">
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                    </div>
                    <div className="message-option">
                    <InsertEmoticonIcon style={{color:'yellow'}}/>
                    <h3>Feeling/Activity</h3>
                    </div>
           </div>
        </div>


)


}

export default MessageSender