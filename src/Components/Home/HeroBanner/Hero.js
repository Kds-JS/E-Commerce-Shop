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

                            <div className='row hero-element'>
                                <div className='col-md-6 hero-image order-md-1 order-2'>
                                    
                                    <div id='circle'>
                                        <img src={hero_2} alt="" />
                                    </div>
                                </div>

                                <div className='col-md-6 hero-description d-flex order-md-2 order-1'>
                                    <h1>Promo Nouvel An</h1>
                                    <p>Jusqu'à 50% de réduction</p>
                                    <p >Utulisez le code promo ⚡ “NOUVEL AN”</p>
                                    <Link to="/shop" className='btn btn-outline-primary '>En savoir plus</Link>
                                </div>
                            </div>

                            
            </div>
        </div>
    );
}

export default Hero;