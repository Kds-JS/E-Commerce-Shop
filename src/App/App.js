// Librairies
import React, { Fragment } from 'react';
import '../SCSS/App.scss';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';

// Components
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from './ScrollToTop';
import GlobalContext from './AppContext';
import Home from '../Pages/Home/Home';
import Market from '../Pages/Market/Market';
import Detail from '../Pages/Detail/Detail';
import Cart from '../Pages/Cart/Cart';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <ScrollToTop/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Market />}/>
          <Route path="/detail/:id" element={<Detail />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
