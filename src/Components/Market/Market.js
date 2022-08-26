import React, { Fragment } from 'react';
import '../../SCSS/market.scss';

function Market(props) {
    return (

        <Fragment>
            <div className='market-banner'>
                <h1>Shop</h1>
            </div>
        
            <div className='shop'>

                <div className='market-section'>
                    
                    <div className="row gx-lg-5">
                    <div className="col-lg-4">
                        <div className='category'>
                            <div>
                                <h1>Categories</h1>
                            </div>
                            <ul>
                                <li id="list-one">Tous les produits <span>+100</span></li>
                                <li>Hommes <span>+40</span></li>
                                <li>Femmes <span>+12</span></li>
                                <li>Enfants <span>+9</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 products">
                    
                        <div className="row gy-5 ">
                            <div className="col-lg-4 col-md-6 ">
                                <div className='product'>
                                    <div className='product-image'>
                                        <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5559315711_2_5_1-1024x1308.jpg" alt="image" />
                                    </div>

                                    <div className='product-description'>
                                        <a href="#">T-shirt Jeans Stretch</a>
                                        <h6>59 $</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 ">
                                <div className='product'>
                                    <div className='product-image'>
                                        <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5559315711_2_5_1-1024x1308.jpg" alt="image" />
                                    </div>

                                    <div className='product-description'>
                                        <a href="#">T-shirt Jeans Stretch</a>
                                        <h6>59 $</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className='product'>
                                    <div className='product-image'>
                                        <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5559315711_2_5_1-1024x1308.jpg" alt="image" />
                                    </div>

                                    <div className='product-description'>
                                        <a href="#">T-shirt Jeans Stretch</a>
                                        <h6>59 $</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className='product'>
                                    <div className='product-image'>
                                        <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5559315711_2_5_1-1024x1308.jpg" alt="image" />
                                    </div>

                                    <div className='product-description'>
                                        <a href="#">T-shirt Jeans Stretch</a>
                                        <h6>59 $</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            

                </div>
                    

        </Fragment>
    );
}

export default Market;