import React from 'react';
import './App.css';
import HeaderContent from './containers/Header-Content'
import BodyContent from './containers/Body-Content'
import FooterContent from './containers/Footer-Content'


function App() {
  return (
    <div className="App">
      <HeaderContent />
      <BodyContent />
      <FooterContent />
    </div>
  );
}

export default App;
