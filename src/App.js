import React from 'react';
import logo from './styles/logo.svg';
import './styles/App.css';
import leagueTable from './components/leagueTable'

export default class App extends React.Component {

  render() {
    return (
      {leagueTable}
    );
  }
}


