import React, { useEffect, useState } from 'react';
import '../../SCSS/detail.scss';
import parka from '../../../src/Images/parka.png';
import parka2 from '../../../src/Images/parka-1.png';
import Latest from '../Latest/Latest';
import { useParams } from 'react-router-dom';
import {useAppContext} from '../../App/AppContext';


function Detail(props) {
    const [imageArray, setImageArray] = useState([]);
    const [imageIndex, setImageIndex]  = useState(0);

    const {id}  = useParams();
    const [product, setProduct] = useState({});

    const {cart, setCart} = useAppContext();
    // const [isAlreadyInCart, setIsAlreadyInCart] = useState(true);
    

    useEffect(() => {
      fetch(`http://localhost:8000/products/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
          console.log(data);
          setProduct(data);
          setImageArray(data.image);
        })
        .catch((error) => {
          console.log(error.message);
        })
    }, [])


    // const addToCart = () => {
    //     // let isAlreadyInCart = true
    //     console.log(product.id);
        
    //         if (cart.length == 0) {
    //             // isAlreadyInCart = false;
    //             // setIsAlreadyInCart(false);
    //             setCart([...cart, product])
    //         } else {
                
    //             for (let i= 0; i< cart.length; i++) {
    //                 if (product.id != cart[i].id) {
    //                     // isAlreadyInCart = false;
    //                     // setIsAlreadyInCart(false);
    //                     console.log(cart[i].id);
    //                     setCart([...cart, product])
    //                 }
    //             }
    //         }
        
        
    //     // !isAlreadyInCart && setCart([...cart, product]);
    // }

    const addToCart = () => {
        // setIsAlreadyInCart(true);

        let isAlreadyInCart = true;
        console.log(isAlreadyInCart);
        setCart( () => {

            if (cart.length == 0) {
                isAlreadyInCart = false;
                // setIsAlreadyInCart(false);
                // setCart([...cart, product])
            } else {
                
                for (let i= 0; i< cart.length; i++) {
                    let add = product == cart[i];
                    console.log(cart[i]);
                    console.log(product);
                    if (add) {
                        isAlreadyInCart = true;
                        // setIsAlreadyInCart(false);
                        // console.log(cart[i].id);
                        // setCart([...cart, product])
                    } else {
                        isAlreadyInCart = false;
                    }
                }
            }


            console.log(isAlreadyInCart);
            if (isAlreadyInCart) {
                return cart;
            } else {
                return [
                    product,
                    ...cart
                ]
            }
        })
    }

    console.log(cart);
    // console.log(isAlreadyInCart);



    const changeImage = (index) => {
        setImageIndex(index);
    }

    const smallImage = imageArray.map((image, index) => {
        return (
            <div key={index} onClick={() => changeImage(index)} className={imageIndex === index && "smallActive"}>
                <img src={image} alt="" />
            </div>
        )
    })

    return (
        <div className='detail-section'>

            <div className='row'>
                
                <div className="col-lg-7">
                    <div className='detail-image'>
                        
                        <div className="row">

                        <div className='small-image col-md-3 order-md-1 order-2'>
                            
                            {smallImage}
                            
                        </div>

                        <div className='big-image col-md-9 order-md-2 order-1'>
                            <img src={imageArray[imageIndex]} alt="" />
                        </div>

                        </div>

                    </div>
                </div>

                <div className="col-lg-5">
                    <div className='detail-description'>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>

                        <p className='mb-3'>{product.price} $</p>

                        <a href="#" onClick={addToCart}>AJOUTEZ AU PANIER</a>
                        
                    </div>

                    
                </div>
            </div>


            <Latest/>

        </div>
    );
}

export default Detail;