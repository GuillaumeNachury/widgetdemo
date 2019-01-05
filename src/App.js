import React, { Component } from 'react';
import './App.css';

import MozaiGrid, {CellOrganisation} from './components/MozaiGrid';

const DATA = [
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
  {name:'aaa'},
]

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentSnap : 0
    };
  }

  _snapTo(prev=true){
    this.setState({currentSnap:this.state.currentSnap + (prev ?  -1:1)})
  }

  render() {
    return (
      <div className="App">
        <MozaiGrid rows={2} cols={4} 
        currentSnap={this.state.currentSnap}
        data={DATA} style={{height:400, width:'100%', backgroundColor:'lightblue'}} cellOrganisation={CellOrganisation.COLUMN}/>
        <button onClick={()=>this._snapTo()}>Previous</button>
        <button onClick={()=>this._snapTo(false)}>Next</button>
      </div>
    );
  }
}

export default App;
