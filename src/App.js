import React from 'react';
import Board from './board/board';
import { authorQuoteMap } from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Agile Board PoC
      </header>
      <Board initial={authorQuoteMap} withScrollableColumns />
    </div>
  );
}

export default App;
