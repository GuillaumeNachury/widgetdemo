/**
 * Base component for the grid cells
 */
import React from 'react';

import { Icon } from 'react-icons-kit';
import {ic_play_arrow} from 'react-icons-kit/md/ic_play_arrow';
import {ic_search} from 'react-icons-kit/md/ic_search';

import './style.css'

const CELL_TYPES = {
    IMAGE : "image",
    VIDEO : "video",
    QUOTE : "quote"
}

class MozaiCell extends React.Component{

 
  

    _renderImageCell(){
        return <div style={{...this.props.style, boxSizing:'border-box', position:'relative', overflow:'hidden'}} className='Cell'>
                <div className="cellThumb" style={{
                            ...this.props.style,
                            backgroundImage:`url(${this.props.data.srcThumb})`
                        }}>
                
                
                </div>
                {
                    this.props.data.caption && <div className="ThumbCaption">{this.props.data.caption}</div>
                }  
                <div style={{
                            ...this.props.style
                        }}
                        className="ImageCellHover">
                    <Icon icon={ic_search} size={30}/>
                </div>
        </div>
    }

    _renderQuoteCell(){
        return <div style={{...this.props.style, boxSizing:'border-box',
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center", justifyContent:"center",
                        padding:20,textAlign:"center",
                        color:"#FFF",
                        backgroundColor:"#373942"}}>
                        <span className='Quote' />
                    {
                        this.props.data.txt
                    }
        
        </div>
    }

    _renderVideoCell(){
        return <div style={{...this.props.style, boxSizing:'border-box', overflow:'hidden',  position:'relative',}}>
                <div className="cellThumb" style={{
                            ...this.props.style,
                            backgroundImage:`url(${this.props.data.srcThumb})`
                        }}>
                        
                
                </div>
                {
                    this.props.data.caption && <div className="ThumbCaption">
                    <div className="VideoPlay"><Icon icon={ic_play_arrow} /></div>
                    {this.props.data.caption}</div>
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