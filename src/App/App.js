// Librairies
import React, { Fragment } from 'react';
import '../SCSS/App.scss';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';

// Components
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';
import Market from '../Components/Market/Market';
import Detail from '../Components/Detail/Detail';
import Cart from '../Components/Cart/Cart';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Market />}/>
        <Route path="/detail" element={<Detail />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
