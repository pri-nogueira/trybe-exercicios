// Importa os componentes
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './App.css';

class App extends React.Component {
  render () {
    return (
      // rederiza os componentes
      // Tornar permanente um trabalho 
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
