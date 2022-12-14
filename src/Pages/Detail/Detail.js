import React, { useEffect, useState } from 'react';
import BestProduct from '../../Components/BestProduct/BestProduct';
import { Link, useParams } from 'react-router-dom';
import {useUpdateCartContext} from '../../App/AppContext';



function Detail() {
    const [imageArray, setImageArray] = useState([]);
    const [imageIndex, setImageIndex]  = useState(0);

    const {id}  = useParams();
    const [product, setProduct] = useState({});

    const setCart = useUpdateCartContext();
    

    useEffect(() => {
      fetch(`https://kds-js.github.io/shop.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
          console.log(data.products[id]);
          setProduct(data.products[id]);
          setImageArray(data.products[id].image);
        })
        .catch((error) => {
          console.log(error.message);
        })

        setImageIndex(0);
    }, [id])

   

    const addToCart = () => {

        setCart(cart=>{
            
            let isAlreadyInCart = false;
            for (let i = 0; i < cart.length; i++) {
                
                if (cart[i].id == product.id) {
                    isAlreadyInCart = true;
                }
            }

            if (isAlreadyInCart) return cart;
            else return [
                        product,
                        ...cart
                        ];
        });
    }

    // console.log(cart);




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

                        <Link to="/cart" onClick={addToCart}>AJOUTEZ AU PANIER</Link>
                        
                    </div>

                    
                </div>
            </div>


            <BestProduct/>

        </div>
    );
}

export default Detail;