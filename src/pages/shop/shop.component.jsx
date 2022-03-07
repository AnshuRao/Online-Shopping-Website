import React from "react";

import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";

import CollectionsOverview from "../../component/collections-overview/collections-overview.component";
import CollectionPage from "../collectionpage/CollectionPage.component";

class ShopPage extends React.Component {

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
      

          <Route exact path={`${match.path}`}  component={CollectionsOverview} />
          
          <Route path={`${match.path}/:collectionID`}  component={CollectionPage}/> 

      
      </div>
    );
  }

}



const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});



export default connect(mapStateToProps)(ShopPage);
