// Librairies
import React from 'react';
import Hero from './HeroBanner/Hero';
import '../../SCSS/home.scss';
import Latest from '../Latest/Latest';
import Banner from './Banner/Banner';



// Components

function Home(props) {
    return (
        <div className='home-section'>
            <Hero/>
            <Banner/>
            <Latest/>
        </div>
    );
}

export default Home;