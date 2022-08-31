import React, { Fragment, useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Stepper from 'react-stepper-horizontal';
import { Link} from "react-router-dom";
import {useAppContext} from '../../App/AppContext';

function Cart() {
    const [CartOpen,setCartOpen] = useState(false);
    const {cart, setCart} = useAppContext();
    const [total,setTotal] = useState(0);
    

    useEffect(() => {
        let newTotal = 0;
        cart.forEach(item => {
            newTotal += item.price * item.quantity;
          });

          setTotal(newTotal);
    },[cart])

    useEffect(() => {
        if (cart.length != 0) {
            setCartOpen(true);
        } else {
            setCartOpen(false);
        }
    }, [cart]);

    const deleteFromCart = (id) => {
        const newCart = cart.filter((item) => item.id !=   id);
        setCart(newCart);
    }

    const addQuantity = (itemId,itemQuantity) => {
        
        setCart (cart => {
            return cart.map(item => {
                if (item.id == itemId & itemQuantity != 10){
                    return {
                        ...item,
                        quantity: itemQuantity + 1
                    }
                } else return item;
            })
        })
    }

    const reduceQuantity = (itemId,itemQuantity) => {
        
        setCart (cart => {
            return cart.map(item => {
                if (item.id == itemId & itemQuantity != 1){
                    return {
                        ...item,
                        quantity: itemQuantity - 1
                    }
                } else return item;
            })
        })
    }
    

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
                {
                    cart.map( item => {
                        return (
                            <div className='cart row' key={item.id}>
                                <div className='cart-item1 d-flex col-lg-6 col-md-7'>

                                    <div className='cart-image'>
                                        <img src={item.image[0]} alt="image" width="50px"/>
                                    </div>

                                    <div className='cart-description'>
                                        <h2>{item.name}</h2>
                                        <span style={{textTransform: 'uppercase'}}>{item.category}</span>
                                    </div>

                                </div>
                    
                                <div className='cart-item2 col-lg-6 col-md-5 d-flex'>
                                    <div className="cart-btn d-flex">
                                        <div className='btn' id={item.quantity != 1 && "active"} onClick={() => reduceQuantity(item.id,item.quantity)}>-</div>
                                        <div>{item.quantity}</div>
                                        <div className='btn' id={item.quantity != 10 && "active"} onClick={() => addQuantity(item.id,item.quantity)}>+</div>
                                    </div>

                                    <div className='cart-price'>
                                        <strong>{item.price} $</strong>
                                    </div>

                                    <div className='delete-btn' onClick={() => deleteFromCart(item.id)}>
                                        <span><GrClose /></span>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }
                

                <div className='cart-checkout'>
                        <div>Total: <strong>{total} $</strong></div>
                        <Link to='/' className='btn btn-primary'>Achetez</Link>
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