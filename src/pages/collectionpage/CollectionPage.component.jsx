import React from "react";
import './CollectionPage.style.scss';

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from '../../component/collection-items/collection-items.component';


const CollectionPage =({collection,match})=>{

    const {title , items} = collection;

    console.log(collection);
    console.log(match.params.collectionID)


    return(
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div> 
    )
};

const mapStateToProps =(state ,ownProps)=>({
    collection : selectCollection(ownProps.match.params.collectionID)(state)
})

export default connect(mapStateToProps)(CollectionPage);
