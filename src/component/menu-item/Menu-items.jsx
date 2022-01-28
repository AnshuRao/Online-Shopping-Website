import React ,{Component, useDebugValue} from "react";
import './menu-item.scss';


export const Menu_Item =({title, imageUrl , size })=>{

    return(
        <div className={`${size} menu-item`}>
        
        <div className="background-image" 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>

        <div className="content">

        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle"> Shop Now </span>

        </div>

        </div>
    )
}