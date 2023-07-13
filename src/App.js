import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
// import  React , {  useState, useEffect } from 'react';
import './App.css';
import NewHero from './components/NewHero';

function App() {
  

  return (

    <main>
      <NavBar />
      {/* <Hero /> */}
<NewHero />

    </main>

  );
}

export default App;
