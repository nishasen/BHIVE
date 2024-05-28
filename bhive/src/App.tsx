import React from 'react';
import './App.css';
import { RouteProvider } from './router/routeProvider';

function App(): JSX.Element {
  return (
    <div className="App">
      <RouteProvider />
    </div>
  );
}

export default App;
