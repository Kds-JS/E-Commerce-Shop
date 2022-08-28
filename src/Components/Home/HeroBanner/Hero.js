// Librairies
import React from 'react';
import hero_1 from '../../../Images/hero-3.png';
import hero_2 from '../../../Images/hero-4.png'

import { FaChevronCircleLeft } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Hero(props) {
    return (
        <div className='hero-section'>
            <div className='hero'>

                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>

                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <div className='row hero-element'>
                                <div className='col-md-6 hero-image'>
                                    <img src={hero_2} alt="" />
                                </div>

                                <div className='col-md-6 hero-description d-flex'>
                                    <h1>Promo Nouvel An</h1>
                                    <p className='d-md-flex d-none'>Jusqu'à 50% de réduction</p>
                                    <p className='d-md-flex d-none'>Utulisez le code promo ⚡ “NOUVEL AN”</p>
                                    <p className='d-md-flex d-none'>Ne manquez pas certains articles très spéciaux à des prix de vente extraordinaires. Pour un temps limité!</p>
                                    

                                    <Link to="/shop" className='btn btn-outline-primary '>En savoir plus</Link>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div className='row hero-element'>
                                    <div className='col-md-6 hero-image'>
                                        <img src={hero_1} alt="" />
                                    </div>

                                    <div className='col-md-6 hero-description d-flex'>
                                        <h1>Promo Nouvel an</h1>
                                        <p className='d-md-flex d-none'>Jusqu'à 50% de réduction</p>
                                        <p className='d-md-flex d-none'>Utulisez le code promo ⚡ “NOUVEL AN”</p>
                                        <p className='d-md-flex d-none'>Ne manquez pas certains articles très spéciaux à des prix de vente extraordinaires. Pour un temps limité!</p>
                                        

                                        <Link to="/shop" className='btn btn-outline-primary'>En savoir plus</Link>

                                    </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span id="slide-icon" aria-fadden="true"><FaChevronCircleLeft/></span>
                        <span class="visually-fadden"></span>
                    </button>
                    <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span id="slide-icon" aria-fadden="true"><FaChevronCircleRight/></span>
                        <span class="visually-fadden"></span>
                    </button>
                </div>

                
            </div>
        </div>
    );
}

export default Hero;