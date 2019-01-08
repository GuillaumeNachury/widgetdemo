import React, { Component } from 'react';
import './App.css';

import GridWidget from './components/GridWidget';
import HeaderBar from './components/HeaderBar';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentSnap : 0
    };
  }

  

  render() {
    return (
      <div className="App">
        <div className="AppContent">
          <HeaderBar />
          <GridWidget style={{width:'100%'}} height={450} mobileHeight={300} autoScroll={true}  autoScrollInterval={7000}/>
          <h1>Sdem diebus Apollinaris Domitiani</h1>
          <p className="Paragraph">Quod cum ita sit, paucae domus studiorum seriis cultibus antea celebratae nunc ludibriis ignaviae torpentis exundant, vocali sonu, perflabili tinnitu fidium resultantes. denique pro philosopho cantor et in locum oratoris doctor artium ludicrarum accitur et bybliothecis sepulcrorum ritu in perpetuum clausis organa fabricantur hydraulica, et lyrae ad speciem carpentorum ingentes tibiaeque et histrionici gestus instrumenta non levia.</p>
          <p className="Paragraph">Constituendi autem sunt qui sint in amicitia fines et quasi termini diligendi. De quibus tres video sententias ferri, quarum nullam probo, unam, ut eodem modo erga amicum adfecti simus, quo erga nosmet ipsos, alteram, ut nostra in amicos benevolentia illorum erga nos benevolentiae pariter aequaliterque respondeat, tertiam, ut, quanti quisque se ipse facit, tanti fiat ab amicis.</p>
        </div>
      </div>
    );
  }
}
