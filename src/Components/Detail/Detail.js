import React from 'react';
import '../../SCSS/detail.scss';
import parka from '../../../src/Images/parka.png';
import parka2 from '../../../src/Images/parka-1.png';
import Latest from '../Latest/Latest';


function Detail(props) {
    return (
        <div className='detail-section'>

            <div className='row'>
                
                <div className="col-lg-7">
                    <div className='detail-image'>
                        
                        <div className="row">

                        <div className='small-image col-md-2 order-md-1 order-2'>
                            
                            <div>
                                <img src={parka2} alt="" />
                            </div>

                            <div>
                                <img src={parka} alt="" />
                            </div>

                            <div>
                                <img src={parka2} alt="" />
                            </div>

                            <div>
                                <img src={parka} alt="" />
                            </div>
                            
                        </div>

                        <div className='big-image col-md-10 order-md-2 order-1'>
                            <img src={parka2} alt="" />
                        </div>

                        </div>

                    </div>
                </div>

                <div className="col-lg-5">
                    <div className='detail-description'>
                        <h1>Iphone 12 Grey Deep 2021</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laborum sed perferendis iste voluptatum veniam, possimus tempore repellat ullam deleniti nulla hic adipisci incidunt excepturi expedita pariatur, nam aspernatur totam!</p>

                        <p className='mb-3'>40$</p>

                        <a href="#">AJOUTEZ AU PANIER</a>
                    </div>

                    
                </div>
            </div>


            <Latest/>

        </div>
    );
}

export default Detail;