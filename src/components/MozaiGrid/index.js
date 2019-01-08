/**
 * Main Mozaic / Grid component.
 * 
 * Use 'cols' and 'rows' props to define the shape of the grid
 * 
 * Cells can be arranged (cf. 'cellOrganisation' prop )by column or row e.g. :
 *  by Row : 
 *  1 2 3 4
 *  5 6 7 8
 * 
 * by Column :
 * 1 3 5 7
 * 2 4 5 6
 * 
 * To scroll the component (move to next or previous column) use the 
 * 'currentSnap' prop
 * 
 * Basically it's composed of
 * +---------------------------------------------------------+
 * | An hidden hidden parent in charge of detecting resize   |
 * | so the compoenent can be responsive / fluid (1)         |
 * |                                                         |
 * | +-----------------------------------------------------+ |
 * | | A Viewport that show a limited part of the grid     | |
 * | | based on the component desired size. (2)            | |
 * | |                                                     | |
 * | |  +------------------------------------------------+ | |
 * | |  | An Animated (on the x axis) container which    | | | 
 * | |  | contains all the cells (3)                     | | |
 * | |  |                                                | | |
 * | |  | +---(4)----+  +---(4)----+  +---(4)----+       | | |
 * | |  | | Cell 1   |  | Cell 2   |  |  Cell n  |       | | |
 * | |  | +----------+  +----------+  +----------+       | | |
 * | |  +------------------------------------------------+ | |
 * | +-----------------------------------------------------+ |
 * +---------------------------------------------------------+
 *  
 *  The component can also display a progress bar (cf. MozaiProgress.js) at the bottom
 *  via the 'showProgressBar' prop
 * 
 *  You can pass a 'isMobile' prop to switch some style/UX for a better mobile experience
 * 
 * (1) cf. : Rezier.js
 * (2) Main root div in MozaiGrid.js
 * (3) Simple div   
 * (4) cf. : MozaiCell.js  
 *          
 * @author Guillaume Nachury
 */

 import React from 'react';
import PropTypes from 'prop-types';
import Resizer from './Resizer';

import MozaiCell from './MozaiCell';
import MozaiProgressBar, {MozaiProgressSize} from './MozaiProgress';


class MozaiGrid extends React.Component{

    /**
     * Helper function that calculate the size of a grid cell
     * based on the parent size and some parameters
     */
    _findCellSize(){
        const _computedHeight = this.props.parentHeight-(this.props.showProgressBar ? MozaiProgressSize.height:0)
        return {width : this.props.parentWidth / this.props.cols, height : _computedHeight / this.props.rows}
    }

    
    /**
     * Helper function that calculates the percent of cells displayed / scrolled
     */
    _findPercentDisplayed(){
        

        return LayoutUtil_getPercentDisplayed(this.props.currentSnap,this.props.rows, this.props.cols, this.props.data.length);

       
    }

    /**
     * Method that build all the cells for the grid component
     * @param {*} cellSize Cell size descriptor
     */
    _buildCells(cellSize){
        return this.props.data.map((entry,idx) =>  
                    <MozaiCell key={'cell'+idx} id={idx} style={{...cellSize, display:"flex"}} data={entry}/>
                    );
    }
    
    /**
     * Render the grid
     */
    renderGrid(){
        const cellSize = this._findCellSize();
        const _maxCol = Math.ceil(this.props.data.length / this.props.rows);
       
        return <div style={{overflow:"hidden", display:'flex',
                    flexDirection:'column',
                    width:this.props.parentWidth,
                    height:this.props.parentHeight,
                }}>
                    <div style={{display:'flex', flexWrap:'wrap', 
                        transition:'all 200ms ease-in-out 0s',
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

    /**
     * Render a place holder while waiting for the data to load 
     * or the cols / rows counts to get computed
     */
    renderPlaceHolder(msg){
        return <div style={{display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                width:this.props.parentWidth,
                height:this.props.parentHeight,
                }}>
                   {msg}
                </div>
    }

    render(){
        const {cols, rows, data} = this.props;
        if(isNaN(cols)|| isNaN(rows)){
            return this.renderPlaceHolder("Missing params")
        }
        else if(data === undefined || data.length === 0){
            return this.renderPlaceHolder("Loading data...")
        }
        else{
            return this.renderGrid();
        }
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
    showProgressBar:PropTypes.bool,
    isMobile:PropTypes.bool
}

MozaiGrid.defaultProps = {
    currentSnap: 0,
    cellOrganisation:CellOrganisation.COLUMN
  };


export default Resizer(MozaiGrid);


export const LayoutUtil_getPercentDisplayed = (currentSnap, rows, cols, dataLength)=>{
        const nbOutsideLeft = currentSnap*rows;
        const nbDisplayed = rows*cols;
        const percent = (((nbDisplayed + nbOutsideLeft) / dataLength)*100)>>0;

        return (Math.min(Math.max(percent,0),100)); // limits trick to get percent value between 0 and 100
}