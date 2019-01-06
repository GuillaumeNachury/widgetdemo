/**
 * Connected component that will display and bind the grid option
 * to the redux store
 */
import React from 'react';

import {connect} from 'react-redux';
import MozaiGrid, {CellOrganisation} from './MozaiGrid';

class GridWidget extends React.Component{

    render(){
        const {companyData,snapPosition, gridParams } = this.props;

        return  <MozaiGrid rows={gridParams.rows} cols={gridParams.cols} 
                    currentSnap={snapPosition}
                    data={companyData} 
                    style={{...this.props.style}} 
                    cellOrganisation={CellOrganisation.COLUMN}
                    showProgressBar = {true}
                    />
                }


}


function mapStateToProps(store, ownProps){
    return {
        companyData : store.appContent.companyData,
        snapPosition:store.appContent.companyGridSnapPosition,
        gridParams:store.appContent.companyGridParams
    }
  }

export default connect(mapStateToProps, {})(GridWidget);