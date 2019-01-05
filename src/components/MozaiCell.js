import React from 'react';

class MozaiCell extends React.Component{

    render(){
        return <div style={{...this.props.style, boxSizing:'border-box', border:'1px solid'}}>
        {
            this.props.id
        }
        </div>
    }

}


export default MozaiCell;