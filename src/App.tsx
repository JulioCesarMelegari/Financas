import React from 'react';
import * as C from './App.styles';
import './App.css';

function App() {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <h1>Corpo da aplicacao</h1>
      </C.Body>
    </C.Container>
  );
}

export default App;
