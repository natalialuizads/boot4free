import React from 'react';

import Header from './components/Template/Header'
import Footer from './components/Template/Footer'
import Routes from './routes'

import './style.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;