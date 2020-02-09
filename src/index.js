import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './styles/index.css';
import './styles/table.scss'
import './styles/pLeague.scss'
import LeagueTable from './components/leagueTable';
=======
import './styles/container.css';
import './styles/table.scss';
import App from './components/app';
>>>>>>> berabulut-patch-1
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
