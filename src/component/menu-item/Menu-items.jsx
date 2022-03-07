import React  from "react";
import './menu-item.scss';
 
import { withRouter } from "react-router-dom";

 const Menu_Item =({title, imageUrl , size ,linkUrl ,history ,match})=>{
console.log(match)
    return(
        <div className={`${size} menu-item`}  onClick={()=> history.push(`${linkUrl}`)} >
        
        <div className="background-image" 
        style={
            {
            backgroundImage: `url(${imageUrl})`
           
        }
        }  />

        <div className="content">

        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle"> Shop Now </span>

        </div>

        </div>
    )
}
export default withRouter(Menu_Item);