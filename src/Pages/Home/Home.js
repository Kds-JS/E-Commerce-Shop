// Librairies
import React from 'react';
import Hero from './HeroBanner/Hero';

import Banner from './Banner/Banner';
import BestProduct from '../../Components/BestProduct/BestProduct';



// Components

function Home(props) {
    return (
        <div className='home-section'>
            <Hero/>
            <Banner/>
            <BestProduct/>
        </div>
    );
}

export default Home;