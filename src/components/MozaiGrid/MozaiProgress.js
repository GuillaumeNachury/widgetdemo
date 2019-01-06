/**
 * Simple component that display an integrated progress bar
 * to the grid component
 * 
 * @author Guillaume Nachury
 */
import React from 'react';


class MozaiProgress extends React.Component{

    render(){
        return <div style={{height:MozaiProgressSize.height}}>
                    <div style={{backgroundColor:'green', 
                        transition:'all 300ms ease-in-out 0s',
                        height:MozaiProgressSize.height, 
                        width:`${this.props.percent}%`}}></div>
                </div>
    }
}

/**
 * Component size 
 */
export const MozaiProgressSize = {
    height:4
}


export default MozaiProgress;