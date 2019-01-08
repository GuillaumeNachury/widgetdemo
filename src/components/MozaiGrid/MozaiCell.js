/**
 * Base component for the grid cells
 */
import React from 'react';

import './style.css'

const CELL_TYPES = {
    IMAGE : "image",
    VIDEO : "video",
    QUOTE : "quote"
}

class MozaiCell extends React.Component{

    _randomColor(){
        return 'hsl('+(this.props.id*10)+', 50%, 57%)';
    }

    _generateThumb(src){
        return <div className="cellThumb" style={{
            ...this.props.style,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'50% 50%',
            backgroundSize:'cover',
            backgroundImage:`url(${src})`
        }}></div>
    }

    _renderImageCell(){
        return <div style={{...this.props.style, boxSizing:'border-box',overflow:'hidden'}}>
        {
            this._generateThumb(this.props.data.srcThumb)
        }
        </div>
    }

    _renderQuoteCell(){
        return <div style={{...this.props.style, boxSizing:'border-box', backgroundColor:"#373942"}}>
        {
            this.props.data.type
        }
        </div>
    }

    _renderVideoCell(){
        return <div style={{...this.props.style, boxSizing:'border-box', overflow:'hidden'}}>
         {
            this._generateThumb(this.props.data.srcThumb)
        }
        </div>
    }


    render(){
       switch(this.props.data.type){
            case CELL_TYPES.IMAGE :
                return this._renderImageCell();
            case CELL_TYPES.VIDEO :
                return this._renderVideoCell();
            case CELL_TYPES.QUOTE :
                return this._renderQuoteCell();
            default:
            return <div style={{...this.props.style, boxSizing:'border-box'}}></div>
       }
    }

}


export default MozaiCell;