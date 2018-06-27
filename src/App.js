import React, { Component } from 'react';
import './App.css';

import Infos from './components/Infos';
import List from './components/List';

const infoApiURL = 'http://www.mocky.io/v2/5b1afbbe3300008825fb161b';
const reposApiURL = 'http://www.mocky.io/v2/5b1afc89330000131ffb161e';
const starredApiURL = 'http://www.mocky.io/v2/5b1afc48330000b435fb161d';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Infos apiURL={infoApiURL} />
        <List apiURL={reposApiURL} title='Minha lista de repos:' />
        <List apiURL={starredApiURL} title='Minha lista de favoritos:' />
      </div>
    );
  }
}

export default App;
