import React, { useEffect, useState } from "react";
import '../../SCSS/header.scss';
  import { BsBag } from 'react-icons/bs';
  import { HiMenuAlt3 } from 'react-icons/hi';
  import { GrClose } from 'react-icons/gr';



function Navbar() {

  const [active, setActive] = useState("nav-mobile");

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
    if (active === "nav-mobile") {
      setActive("nav-mobile active");
    } else setActive("nav-mobile");
  };

  return (
    <header className={menuOpen && "menuActive"}>
      
    <nav className="nav">
      <a href="#" className="nav-brand">
        E-Shop
      </a>
      
      <ul className="nav-menu">
        
        <li >
          <a href="#" className="menu-link link-active">
            Accueil
          </a>
        </li>
        <li >
          <a href="#" className="menu-link">
            Boutique
          </a>
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
      

      
          <div className="icon-toggler d-lg-flex d-none">
            <div className='icon  me-3 text-white '>
                <BsBag/>
                <div className='cart'>
                    5
                </div>
            </div>
          </div>

          <div className='d-lg-none d-flex align-items-center ' >
              <div className='text-white icon me-3'>
                  <BsBag/>
                  <div className='cart'>
                      5
                  </div>
              </div>
              
              <div onClick={navToggle} className="menu">
                <span className='text-black  fs-1' >
                  <HiMenuAlt3/>
                </span>
              </div>
              
              
          </div>

    </nav> 

    <nav className={active}>
          <ul className="nav_mobile_item">

          <div onClick={navToggle} className="menu">
                <span className='text-black  fs-1' >
                  <GrClose/>
                </span>
              </div>
        
        <li >
          <a href="#" className="menu-link link-active">
            Accueil
          </a>
        </li>
        <li >
          <a href="#" className="menu-link">
            Boutique
          </a>
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