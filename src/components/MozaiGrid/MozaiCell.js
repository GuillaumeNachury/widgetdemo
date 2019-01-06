/**
 * Base component for the grid cells
 */
import React from 'react';

class MozaiCell extends React.Component{

    _randomColor(){
        return 'hsl('+(this.props.id*10)+', 50%, 57%)';
    }
    render(){
        return <div style={{...this.props.style, boxSizing:'border-box', backgroundColor:this._randomColor()}}>
        {
            this.props.id
        }
        </div>
    }

}


export default MozaiCell;