import React from 'react'
import { Avatar } from '@material-ui/core'
import './sidebarrow.css'

function SidebarRow({src,Icon,title}){
return(
<div className="sidebar__element">
    {src && <Avatar src={src}/>}
    {Icon && <Icon />}
     <h4>{title}</h4>
</div>
)


}
export default SidebarRow