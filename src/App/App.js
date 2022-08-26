import React from 'react';
import '../SCSS/App.scss';

// Components
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';
import Market from '../Components/Market/Market';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <Market/>
      <Footer/>
    </div>
  );
}

export default App;
