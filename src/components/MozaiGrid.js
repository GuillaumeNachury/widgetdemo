import React from 'react';
import PropTypes from 'prop-types';
import Resizer from './Resizer';

import MozaiCell from './MozaiCell';
import MozaiProgressBar, {MozaiProgressSize} from './MozaiProgress';


class MozaiGrid extends React.Component{

    _findCellSize(){
        const _computedHeight = this.props.parentHeight-(this.props.showProgressBar ? MozaiProgressSize.height:0)
        return {width : this.props.parentWidth / this.props.cols, height : _computedHeight / this.props.rows}
    }

    _buildCells(cellSize){
        return this.props.data.map((entry,idx) =>  <MozaiCell key={'cell'+idx} id={idx} style={{...cellSize, display:"flex"}} />);
    }

    _findPercentDisplayed(){
        const nbOutsideLeft = this.props.currentSnap*this.props.rows;
        const nbDisplayed = this.props.rows*this.props.cols;

        const percent = (((nbDisplayed + nbOutsideLeft) / this.props.data.length)*100)>>0;

        return (Math.min(Math.max(percent,0),100)); // limits percent to 0 - 100
    }

    render(){
        const cellSize = this._findCellSize();
        const _maxCol = Math.ceil(this.props.data.length / this.props.rows);
       
        return <div style={{overflow:"hidden", display:'flex',
                    flexDirection:'column',
                    width:this.props.parentWidth,
                    height:this.props.parentHeight,
                }}>
                    <div style={{display:'flex', flexWrap:'wrap', 
                        transition:'all 300ms ease-in-out 0s',
                        flexDirection:this.props.cellOrganisation,
                        width:cellSize.width * _maxCol,
                        height:this.props.parentHeight,
                        transform : `translate(${this.props.currentSnap*-(cellSize.width)}px)`

                    }}>
                    {
                        this._buildCells(cellSize)
                    }
                    </div>
                    {
                        this.props.showProgressBar && <MozaiProgressBar percent={ this._findPercentDisplayed()} />
                    }
                </div>
    }

}

export const CellOrganisation = {
    COLUMN:'column',
    ROW:'row'

}

MozaiGrid.propTypes={
    cols:PropTypes.number,
    rows:PropTypes.number,
    currentSnap:PropTypes.number,
    data:PropTypes.array.isRequired,
    cellOrganisation:PropTypes.oneOf([CellOrganisation.COLUMN, CellOrganisation.ROW]),
    showProgressBar:PropTypes.bool
}

MozaiGrid.defaultProps = {
    currentSnap: 0,
    cellOrganisation:CellOrganisation.COLUMN
  };


export default Resizer(MozaiGrid);