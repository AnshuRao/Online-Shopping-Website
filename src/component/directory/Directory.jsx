import React, { Component } from "react";
import "./directory.style.scss";

import  Menu_Item  from "../menu-item/Menu-items";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";


class Directory extends Component {
 
  render() {

    const {sections} = this.props;


    return (


      <div className="directory-menu">

        {sections.map(({id, ...otherDirectorySection }) => {
         return <Menu_Item key={id} {...otherDirectorySection} />;
        })}

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

 export default connect(mapStateToProps)(Directory);