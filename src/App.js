import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

import GridWidget from './components/GridWidget';
import {requestCompanyGridScrollPrevious, requestCompanyGridScrollNext} from './actions';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentSnap : 0
    };
  }

  _snapTo(prev=true){
    if(prev){
      this.props.requestCompanyGridScrollPrevious();
    }
    else{
      this.props.requestCompanyGridScrollNext();
    }
  }

  render() {
    return (
      <div className="App">
        <GridWidget style={{height:450, width:'50%', backgroundColor:'lightblue'}}/>
        <button onClick={()=>this._snapTo()}>Previous</button>
        <button onClick={()=>this._snapTo(false)}>Next</button>
      </div>
    );
  }
}

export default connect(undefined, {requestCompanyGridScrollPrevious,requestCompanyGridScrollNext})(App)
