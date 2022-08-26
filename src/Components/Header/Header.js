import React, { Fragment, useEffect, useState } from 'react';

import { BsBag } from 'react-icons/bs';
import { HiMenuAlt4 } from 'react-icons/hi';

function Header(props) {
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



    return (

        <Fragment>
        <div className='promo_section'>
                LIVRAISON OFFERTE Dès 39£ d'achat
            </div>
        <header className={menuOpen && "menuActive"}>
            
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">E-shop</a>

                    <div className='d-flex'>
                        <div className='text-white icon d-lg-none d-flex me-3'>
                            <BsBag/>
                            <div className='cart'>
                                5
                            </div>
                        </div>
                        <button class="navbar-toggler text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className='text-black  fs-1'><HiMenuAlt4/></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column justify-content-start align-items-start flex-lg-row pt-4 pt-lg-0">
                        <li class="nav-item">
                        <a class="menu-link link-active" aria-current="page" href="#">Accueil</a>
                        </li>
                        <li class="nav-item">
                        <a class="menu-link" href="#">Categories</a>
                        </li>
                        <li class="nav-item">
                        <a class="menu-link" href="#">Collections</a>
                        </li>
                        <li class="nav-item">
                        <a class="menu-link" href="#">Blogs</a>
                        </li>

                        
                    </ul>
                    <div className='text-white icon d-lg-flex d-none me-2'>
                        <BsBag/>
                        <div className='cart'>
                                5
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
            
        </header>

        </Fragment>
    );
}

export default Header;