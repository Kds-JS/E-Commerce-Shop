import React from 'react';
import home1 from '../../../Images/home_2.jpg';
import home2 from '../../../Images/home_3.jpg';
import home3 from '../../../Images/home_1.jpg';
import { Link } from 'react-router-dom';

function Banner(props) {
    return (
        <div className='banner_section row gy-5'>

           <div className='col-lg-4 col-md-6 '>
                <div className="banner-element" style={{backgroundImage: `url(${home1})`}}>
                    <div>
                        <div>
                            <h1>Hommes</h1>
                            <h6>A partir de 40$</h6>
                            <Link to="/shop" className='btn '>Achetez</Link>
                        </div>
                    </div>
                </div>
           </div>

           <div className='col-lg-4 col-md-6 '>
                <div className="banner-element" style={{backgroundImage: `url(${home2})`}}>
                    <div>
                        <div>
                            <h1>Hommes</h1>
                            <h6>A partir de 40$</h6>
                            <Link to="/shop" className='btn '>Achetez</Link>
                        </div>
                    </div>
                </div>
           </div>

           <div className='col-lg-4 col-md-6 '>
                <div className="banner-element" style={{backgroundImage: `url(${home3})`}}>
                    <div>
                        <div>
                            <h1>Hommes</h1>
                            <h6>A partir de 40$</h6>
                            <Link to="/shop" className='btn '>Achetez</Link>
                        </div>
                    </div>
                </div>
           </div>

            
            
        </div>
    );
}

export default Banner;