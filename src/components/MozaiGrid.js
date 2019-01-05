import React from 'react';
import PropTypes from 'prop-types';
import Resizer from './Resizer';

class MozaiGrid extends React.Component{


    _findCellSize(){
        return {width : this.props.parentWidth / this.props.cols, height : this.props.parentHeight / this.props.rows}
    }

    render(){
        const cell = this._findCellSize();
        return <div>
                    <p>I'm the grid {this.props.cols} x {this.props.rows}</p>
                    <p>Parent size =  {this.props.parentWidth} x {this.props.parentHeight}</p>
                    <p>Cell size = {cell.width} x {cell.height}</p>
                    <p>Cell organisation : {this.props.cellOrganisation}</p>
                </div>
    }

}

export const CellOrganisation = {
    COLUMN:'column',
    ROW:'row'

}

MozaiGrid.propTypes={
    cols:PropTypes.number,
    rows:PropTypes.number
}


export default Resizer(MozaiGrid);