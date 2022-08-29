import React, { Fragment, useState } from 'react';
import '../../SCSS/cart.scss';
import { GrClose } from 'react-icons/gr';
import Stepper from 'react-stepper-horizontal';
import { Link} from "react-router-dom";
import {useAppContext} from '../../App/AppContext';

function Cart(props) {
    const [CartOpen,setCartOpen] = useState(false);
    const [cart, setCart] = useAppContext();
    

    return (
        <div className='cart-section'>
            <div className='step-section row'>
                <div className='step-tittle col-md-4'>
                    <h1>Mon Panier</h1>
                </div>
                <div className='level col-md-8'>
                    <Stepper
                    steps={ [{title: 'Mon panier'}, {title: 'Passer la commande'}, {title: 'Valider la commande'}] } 
                    activeStep={ 0 }
                    circleTop={0}
                    activeTitleColor={'#0000ff'}
                    activeColor={'#509CE2'}
                    completeTitleColor={'#E0E0E0'}
                    defaultTitleColor={'#767373'}
                    completeColor={'#E0E0E0'}
                    completeBarColor={'#E0E0E0'}
                    barStyle={'dashed'}
                    size={30}
                    circleFontSize={15} 
                    />
                </div>
            </div>

            { CartOpen ? 
            (
            <Fragment>
                <div className='cart row'>
                    <div className='cart-item1 d-flex col-lg-6 col-md-7'>

                        <div className='cart-image'>
                            <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5559315711_2_5_1-1024x1308.jpg" alt="image" width="50px"/>
                        </div>

                        <div className='cart-description'>
                            <h2>Tshirt gris Adidas</h2>
                            <span>Color</span>
                        </div>

                    </div>
                    
                    <div className='cart-item2 col-lg-6 col-md-5 d-flex'>
                        <div className="cart-btn d-flex">
                            <div className='btn'>-</div>
                            <div>1</div>
                            <div className='btn'>+</div>
                        </div>

                        <div className='cart-price'>
                            <strong>980$</strong>
                        </div>

                        <div className='delete-btn'>
                            <span><GrClose /></span>
                        </div>

                    </div>

                </div>

                <div className='cart row'>
                    <div className='cart-item1 d-flex col-lg-6 col-md-7'>

                        <div className='cart-image'>
                            <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5559315711_2_5_1-1024x1308.jpg" alt="image" width="50px"/>
                        </div>

                        <div className='cart-description'>
                            <h2>Tshirt gris Adidas</h2>
                            <span>Color</span>
                        </div>

                    </div>
                    
                    <div className='cart-item2 col-lg-6 col-md-5 d-flex'>
                        <div className="cart-btn d-flex">
                            <div className='btn'>-</div>
                            <div>1</div>
                            <div className='btn'>+</div>
                        </div>

                        <div className='cart-price'>
                            <strong>980$</strong>
                        </div>

                        <div className='delete-btn'>
                            <span><GrClose /></span>
                        </div>

                    </div>

                </div>

                <div className='cart row'>
                    <div className='cart-item1 d-flex col-lg-6 col-md-7'>

                        <div className='cart-image'>
                            <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5559315711_2_5_1-1024x1308.jpg" alt="image" width="50px"/>
                        </div>

                        <div className='cart-description'>
                            <h2>Tshirt gris Adidas</h2>
                            <span>Color</span>
                        </div>

                    </div>
                    
                    <div className='cart-item2 col-lg-6 col-md-5 d-flex'>
                        <div className="cart-btn d-flex">
                            <div className='btn'>-</div>
                            <div>1</div>
                            <div className='btn'>+</div>
                        </div>

                        <div className='cart-price'>
                            <strong>980$</strong>
                        </div>

                        <div className='delete-btn'>
                            <span><GrClose /></span>
                        </div>

                    </div>

                </div>

                <div className='cart-checkout'>
                        <div>Total: <strong>2 777$</strong></div>
                        <a href='#' className='btn btn-primary'>Achetez</a>
                </div>
            </Fragment>

            )

            :

            (
                <Fragment>
                    <div id='CartEmpty'>
                        <img src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="" />
                        <p>Votre Panier est vide, Commencez votre shopping maintenant</p>

                        <Link to="/shop" className="btn btn-primary mb-3 px-5 fs-5">
                            Achetez
                        </Link>

                        <p>Bénéficiez de la livraison gratuite dans le monde entier pour toutes les commandes de plus de 39 $ !</p>
                    </div>
                </Fragment>
            )

            }

        </div>
    );
}

export default Cart;