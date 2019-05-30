import React from 'react';
import ExampleApp from './components/Radio.js';
import Calculator from './components/Converter.js';

function App() {
  return (
    <div className="App">
      Click to show text: <ExampleApp />
      <br />Currency Converter:
      <Calculator />
    </div>
  );
}

export default App;
