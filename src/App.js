import React from 'react';
// import Header from './components/Header';
import Page from './components/Page';

const App = (props) => (
  <div className="App">
    {console.log('props from App.js which calls Page.jsx', props)}
    <Page />
  </div>
);

export default App;
