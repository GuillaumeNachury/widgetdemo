import React from 'react';
import PropTypes from 'prop-types';
import Resizer from './Resizer';

import MozaiCell from './MozaiCell';



class MozaiGrid extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentPage:0
        }
    }

    componentDidMount(){
        setTimeout(()=>this.setState({currentPage:this.state.currentPage+1}), 2000);
    }

    _findCellSize(){
        return {width : this.props.parentWidth / this.props.cols, height : this.props.parentHeight / this.props.rows}
    }

    _buildCells(cellSize){
        return this.props.data.map((entry,idx) =>  <MozaiCell key={'cell'+idx} id={idx} style={{...cellSize, display:"flex"}} />);
    }

    render(){
        const cellSize = this._findCellSize();
        const _maxCol = Math.ceil(this.props.data.length / this.props.rows);
        return <div style={{overflow:"hidden", display:'flex',
                    width:this.props.parentWidth,
                    height:this.props.parentHeight,
                }}>
                    <div style={{display:'flex', flexWrap:'wrap', 
                        transition:'all 100ms cubic-bezier(0.22, 0.61, 0.36, 1) 0s',
                        flexDirection:this.props.cellOrganisation,
                        width:cellSize.width * _maxCol,
                        height:this.props.parentHeight,
                        transform : `translate(${this.state.currentPage*-(cellSize.width)}px)`

                    }}>
                    {
                        this._buildCells(cellSize)
                    }
                    </div>
                    
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