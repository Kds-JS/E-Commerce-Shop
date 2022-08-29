import React, { useEffect, useState } from "react";
import '../../SCSS/header.scss';
  import { BsBag } from 'react-icons/bs';
  import { HiMenuAlt3 } from 'react-icons/hi';
  import { GrClose } from 'react-icons/gr';
import { Link, NavLink } from "react-router-dom";
import {useAppContext} from '../../App/AppContext';



function Navbar() {

  const [active, setActive] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);

  const {cart, setCart} = useAppContext();

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
      

      
          <Link to="/cart" className="icon-toggler">
            <div className=" d-lg-flex d-none">
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

          <div className='d-lg-none d-flex align-items-center ' >
              <div className='text-white icon me-3'>
                  <BsBag/>
                  {
                    cart.length !=0 && <div className='cart'>
                      {cart.length}
                    </div>
                  }
              </div>
              
              <div onClick={navToggle} className="menu">
                <span className='text-black  fs-1' >
                  <HiMenuAlt3/>
                </span>
              </div>
              
              
          </div>

    </nav> 

    <nav className={active ? "nav-mobile" : "nav-mobile active"}>
          <ul className="nav_mobile_item">

              <div onClick={navToggle} className="menu">
                <span className='text-black  fs-1' >
                  <GrClose/>
                </span>
              </div>
        
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

    </nav>

    </header>
  );
}

export default Navbar;