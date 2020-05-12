import React from 'react';
import './App.css';
import Header from './components/Header';
import SanaTextsLoader from './components/SanaTextsLoader';
import Page from './components/Page';

function App() {
  return (
    <>
      <Header />
      <SanaTextsLoader />
      <Page />
    </>
  );
}

export default App;
