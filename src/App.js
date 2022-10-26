import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ADICIONE NOVA CARTA</h1>
        <Form />
        <h1>PRÉ-VISUALIZAÇÃO</h1>
        <Card />
      </div>
    );
  }
}

export default App;
