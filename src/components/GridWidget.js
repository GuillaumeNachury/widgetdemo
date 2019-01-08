/**
 * Connected component that will display and bind the grid option
 * to the redux store
 */
import React from 'react';

import {connect} from 'react-redux';
import MozaiGrid, {CellOrganisation} from './MozaiGrid';
import {getCompanyData} from './../actions' ;

import {mobileDetector} from '../utils/MobileDetector';
import Automator from '../utils/ActionAutomator';
import {ACTION_TYPES} from "../actions";

class GridWidget extends React.Component{

    componentDidMount(){
        this.props.getCompanyData();
        if(this.props.autoScroll){
            Automator.start(ACTION_TYPES.AUTO_SCROLL_COMPANY, this.props.autoScrollInterval ||5000)
        }
    }

    _stopAutoScroll(){
        Automator.stop(ACTION_TYPES.AUTO_SCROLL_COMPANY);
    }

    _restartAutoScroll(){
        Automator.start(ACTION_TYPES.AUTO_SCROLL_COMPANY, this.props.autoScrollInterval ||5000)
    }


    render(){
        const {companyData,snapPosition, gridParams } = this.props;

        return  <MozaiGrid rows={gridParams.rows} cols={gridParams.cols} 
                    currentSnap={snapPosition}
                    data={companyData} 
                    style={{...this.props.style, height:this.props.isMobile ? this.props.mobileHeight : this.props.height}} 
                    cellOrganisation={CellOrganisation.COLUMN}
                    showProgressBar = {true}
                    isMobile = {this.props.isMobile}
                    onMouseEnter={()=>this._stopAutoScroll()}
                    onMouseLeave={()=>this._restartAutoScroll()}
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

export default connect(mapStateToProps, {getCompanyData})(mobileDetector(GridWidget));