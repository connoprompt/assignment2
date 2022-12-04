import React from 'react';
import './App.css';
import Heading from "./components/Heading/Heading";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Heading />
      <div className='bgContainer'>
        <div className='contentContainer'>
          <Nav />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
