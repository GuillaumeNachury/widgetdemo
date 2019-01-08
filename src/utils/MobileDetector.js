/**
 * Simple HOC that will inject a isMobile property to a component
 * 
 * @author Guillaume Nachury
 */
import React from "react";

const MOBILE_THRESHOLD = "(max-width: 600px)";

export const mobileDetector = Comp=>{

    class _wrappR extends React.Component{
        render(){
            return <Comp isMobile={window.matchMedia(MOBILE_THRESHOLD).matches} {...this.props}/>
        }
    }
    return _wrappR;
}

export const isMobile = ()=>window.matchMedia(MOBILE_THRESHOLD).matches;
  