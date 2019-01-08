import React from 'react';
import {connect} from 'react-redux';
import {requestCompanyGridScrollPrevious, requestCompanyGridScrollNext} from '../../actions';


import './style.css';

class HeaderBar extends React.Component{

    _snapTo(prev=true){
        if(prev){
          this.props.requestCompanyGridScrollPrevious();
        }
        else{
          this.props.requestCompanyGridScrollNext();
        }
      }


    render(){
        return(
            <div className="HeaderBar">
                <div className="Logo">WD</div>
                <div className="ButtonHolder">
                    <span className="NavButton" onClick={()=>this._snapTo()} >🡐</span>
                    <span className="NavButton" onClick={()=>this._snapTo(false)}>🡒</span>
                </div>
            </div>
        )
    }

}

export default connect(undefined, {requestCompanyGridScrollPrevious,requestCompanyGridScrollNext})(HeaderBar)

