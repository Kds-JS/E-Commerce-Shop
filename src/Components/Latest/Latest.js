import React from 'react';
import '../../SCSS/latest.scss';

function Latest(props) {
    return (
        <div className='latest_section'>

            <h1 className='text-center'>Nos meilleures Ventes</h1>

            <div className='latest-product'>

                    <div>
                        <a href="#">
                            <div className='product'>
                                <div className='product-image'>
                                    <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5559315711_2_5_1-1024x1308.jpg" alt="image" />
                                </div>

                                <div className='product-description'>
                                    <a href="#">T-shirt Jeans Stretch</a>
                                    <h6>59 $</h6>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div >
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

                    <div >
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

                    <div >
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


            <div className='text-center' id='all_product'>
                <a href="#" className='btn btn-primary'>Tous les produits</a>
            </div>
        </div>
    );
}

export default Latest;