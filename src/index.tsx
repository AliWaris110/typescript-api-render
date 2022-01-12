import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//// FOR Context API
import App from './contextApi/App';


// For REDUX////
import {ReduxIndex} from './reduxIndex';

ReactDOM.render(
  <React.StrictMode>
    <ReduxIndex />
  </React.StrictMode>,
  document.getElementById('root')
);

