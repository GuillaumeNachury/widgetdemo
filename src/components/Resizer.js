/**
 * HOC to help resizing when the user
 * resizes the window
 * 
 * @author Guillaume Nachury
 */
import React, { Component } from 'react'

export default WrappedComp => (
  class Wrapper extends Component {
    constructor(props) {
      super(props)
      this.state = {
        parentWidth: null,
        parentHeight: null,
      }
    }

    componentDidMount() {
      this.useContainerSize()
      window.addEventListener('resize', this.useContainerSize.bind(this))
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.useContainerSize.bind(this))
    }

    useContainerSize() {
        const {width, height} = this.holder.getBoundingClientRect();
        this.setState({
            parentWidth: width,
            parentHeight: height,
        })
      
    }

    renderChildren() {
      return (
        <WrappedComp {...this.props} {...this.state} />
      )
    }

    render() {
      const { parentWidth } = this.state
      const shouldrenderChildren = parentWidth !== null
      return (
        <div
          ref={(el) => { this.holder = el }}
          style={{...this.props.style, boxSizing:'border-box', display:'flex'}}
        >
          {shouldrenderChildren && this.renderChildren()}
        </div>
      )
    }
  }
)