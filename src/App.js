import React, { Component } from 'react';
import './App.css';

import Infos from './components/Infos';
import ReposList from './components/ReposList';
import StarredList from './components/StarredList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Infos />
        <ReposList />
        <StarredList />
      </div>
    );
  }
}

export default App;
