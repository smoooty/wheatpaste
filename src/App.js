import React from 'react';
import './App.css';
import content from './data-config';
import { Div } from './styles';
import GlobalStyle from './Globals';

const App = () => (
  <Div>
    {content.map(entry =>
      React.createElement(entry.type, { ...entry.props }, `${entry.text}`)
    )}
    <GlobalStyle />
  </Div>
);

export default App;
