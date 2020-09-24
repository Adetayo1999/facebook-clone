import React from 'react';
import Story from './story'
import './storyreel.css'


function StoryReel(){
    return(
        <div className="story-feed">
            <Story avatar={require('./images/9.jpg')} title="Ronaldo" image={require('./images/10.jpg')}/>
            <Story avatar={require('./images/3.jpg')} image={require('./images/4.jpg')}title="Dwayne Johnson"/>
            <Story avatar={require('./images/5.jpg')}title="Mike Abraham" image={require('./images/6.jpg')}/>
            <Story avatar={require('./images/7.jpg')} title="Aquaman" image={require('./images/8.jpg')}/>
            <Story avatar={require('./images/avatar.jpg')}title="Adetayoh Tomiwa" image={require('./images/tommy2.jpg')}/>
        </div>
    )
}


export default StoryReel