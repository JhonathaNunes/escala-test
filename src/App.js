import React, { Component } from 'react';
import './App.css';
import EscalaNav from './components/navbar';
import Sidebar from './components/sidebar';
import UsersTable from './containers/usersTable';


class App extends Component {
  render() {
    return (
      <div className="App">
        <EscalaNav/>
        <div className="wrap-content">
          <Sidebar/>
          <div className="workbench">
            <h1> Usuários </h1>
            <UsersTable/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
