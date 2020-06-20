import React from 'react';
import './App.css';
import Child from './child.js'
import {TransactionProvider} from './transContext.js'

function App() {
  return (
    <TransactionProvider>
    <Child />
  </TransactionProvider>
);
}

export default App;
