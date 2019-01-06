/**
 * Connected component that will display and bind the grid option
 * to the redux store
 */
import React from 'react';

import {connect} from 'react-redux';
import MozaiGrid, {CellOrganisation} from './MozaiGrid';

class GridWidget extends React.Component{

    render(){
        return  <MozaiGrid rows={3} cols={4} 
                    currentSnap={this.props.snapPosition}
                    data={this.props.companyData} 
                    style={{...this.props.style}} 
                    cellOrganisation={CellOrganisation.COLUMN}
                    showProgressBar = {true}
                    />
                }


}


function mapStateToProps(store, ownProps){
    return {
        companyData : store.appContent.companyData,
        snapPosition:store.appContent.companyGridSnapPosition
    }
  }

export default connect(mapStateToProps, {})(GridWidget);