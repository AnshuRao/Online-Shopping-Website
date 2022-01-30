import React  from "react";


import './collection-preview.scss';

import CollectionItem from "../collection-items/collection-items.component";
const CollectionPreview = ({title , items})=>{


    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((itm ,idx)=>{
                        return( idx < 4)
                    }).map( ({id , ...otherItemProps}) =>{
                        return(
                            <CollectionItem key={id} {...otherItemProps}   />
                        )
                    })

                }
            </div>


        </div>

    )
}

export default CollectionPreview;