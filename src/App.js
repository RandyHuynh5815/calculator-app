import React from 'react';
import './App.css';
import Key from './Button';
import Screen from './Screen';
import { Stack } from "react-bootstrap";

function App() {
  const keys = [[7, 8, 9, '/'], [4, 5, 6, '*'], [1, 2, 3, '-'], ['C', 0, '=', '+']]
  const buttons = keys.map((row) => <Stack direction="horizontal">{row.map((b) => <Key value={b}/>)}</Stack>)
  return (
    <div>
      <Screen />
      {buttons}
    </div>
  );
}

export default App;
