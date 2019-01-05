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
  render() {
    return (
      <div className="App">
        <MozaiGrid rows={2} cols={3} data={DATA} style={{height:400, width:'100%', backgroundColor:'lightblue'}} cellOrganisation={CellOrganisation.COLUMN}/>
      </div>
    );
  }
}

export default App;
