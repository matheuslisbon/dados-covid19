import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Recomendations from './components/recomendations/index'
import Footer from './components/footer/index'
import CreateGlobalStyle from './styles/globalStyles'

function App() {
  return (
    <>
    <CreateGlobalStyle/>    
    <NavBar/>
    <Home/>
    <Recomendations/>
    <Footer/>
    
    </>
  );
}

export default App;
