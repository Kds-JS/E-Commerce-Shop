import React, { Fragment } from 'react';
import '../SCSS/App.scss';

// Components
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';
import Market from '../Components/Market/Market';
import Detail from '../Components/Detail/Detail';

function App() {
  return (
    <Fragment>
      <Header/>
      <Home/>
      {/* <Market/> */}
      {/* <Detail/> */}
      <Footer/>
    </Fragment>
  );
}

export default App;
