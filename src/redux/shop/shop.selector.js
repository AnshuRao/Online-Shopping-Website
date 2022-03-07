import { createSelector } from "reselect";
import memoize from 'lodash.memoize';


const selectShopData = (state)=> {
    console.log(state);
    console.log(state.shop)
    return state.shop;}


export const selectCollections = createSelector(
    [selectShopData],
    (shopData) => { 
        console.log(shopData);
        return(shopData.collections)}
);




export const selectCollection = memoize((collectionUrlParam) => {
    console.log(collectionUrlParam)
    return createSelector(
    [selectCollections] ,
    (collections) => collections[collectionUrlParam]
)});


export const selectCollectionsForPreview = createSelector(
    [selectCollections], 
    (collections)=> Object.keys(collections).map(key => collections[key] )

)

