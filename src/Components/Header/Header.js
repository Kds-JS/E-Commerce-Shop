import React, { useEffect, useState } from "react";
import '../../SCSS/header.scss';
  import { BsBag } from 'react-icons/bs';
  import { HiMenuAlt3 } from 'react-icons/hi';
  import { GrClose } from 'react-icons/gr';
import { Link, NavLink } from "react-router-dom";
import {useAppContext} from '../../App/AppContext';



function Navbar() {

  const [active, setActive] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                setMenuOpen(true);
            } else {
                setMenuOpen(false);
            }
          })
    }, [menuOpen])

  const navToggle = () => {
    if (active) {
      setActive(false);
    } else setActive(true);
  };

  return (
    <header className={menuOpen && "menuActive"}>
      
    <nav className="nav">
      <div onClick={navToggle} className="menu d-md-none d-flex">
        <span className='text-black  fs-1' >
          <HiMenuAlt3/>
        </span>
      </div>


      <Link to="/" className="nav-brand">
        E-Shop
      </Link>
      
      <ul className="nav-menu">
        
        <li >
          <NavLink to="/" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
            Accueil
          </NavLink>
        </li>
        <li >
          <NavLink to="/shop"  className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
            Boutique
          </NavLink>
        </li>
        <li >
          <a href="#" className="menu-link">
            Collection
          </a>
        </li>
        <li >
          <a href="#" className="menu-link">
            Blog
          </a>
        </li>

        
      </ul>
      
      <CartLink/>       

    </nav> 

    <nav className={active ? "nav-mobile active" : "nav-mobile"}>

          <div className="nav_mobile_item">

            <div className="d-flex justify-content-between">
              <Link to="/" className="nav-brand">
                E-Shop
              </Link>

              <div onClick={navToggle} className="closeMenu">
                <span className='text-black  fs-1' >
                  <GrClose/>
                </span>
              </div>
            </div>
          

            <ul>
            
          
                <li onClick={navToggle}>
                  <NavLink to="/" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
                    Accueil
                  </NavLink>
                </li>
                <li onClick={navToggle}>
                  <NavLink to="/shop"  className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
                    Boutique
                  </NavLink>
                </li>
                <li >
                  <a href="#" className="menu-link">
                    Collection
                  </a>
                </li>
                <li >
                  <a href="#" className="menu-link">
                    Blog
                  </a>
                </li>

          
            </ul>

          </div>

    </nav>

    </header>
  );
}

export default Navbar;

const CartLink = () => {
  const {cart} = useAppContext();


  return (
    <Link to="/cart" className="icon-toggler">
      <div className=" d-flex">
        <div className='icon  me-3 text-white '>
            <BsBag/>
            {
              cart !=0 && <div className='cart'>
                {cart.length}
              </div>
            }
        </div>
      </div>
    </Link>  
  )
}