import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../../SCSS/latest.scss';

function Latest(props) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:8000/products`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
          console.log(data);
          setProduct(data);
        })
        .catch((error) => {
          console.log(error.message);
        })
    }, [])


    return (
        <div className='latest_section'>

            <h1 className='text-center'>Nos meilleures Ventes</h1>

            <div className='latest-product'>

                { product.length != 0 &&
                    <Fragment>

                    <div>
                        <Link to={'/detail'+ '/' + product[0].id}>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product[0].image[0]} alt="image" />
                                </div>

                                <div className='product-description'>
                                    <a href="#">{product[0].name}</a>
                                    <h6>{product[0].price} $</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <Link to={'/detail'+ '/' + product[4].id}>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product[4].image[0]} alt="image" />
                                </div>

                                <div className='product-description'>
                                    <a href="#">{product[4].name}</a>
                                    <h6>{product[4].price} $</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <Link to={'/detail'+ '/' + product[2].id}>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product[2].image[0]} alt="image" />
                                </div>

                                <div className='product-description'>
                                    <a href="#">{product[2].name}</a>
                                    <h6>{product[2].price} $</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <Link to={'/detail'+ '/' + product[3].id}>
                            <div className='product'>
                                <div className='product-image'>
                                    <img src={product[3].image[0]} alt="image" />
                                </div>

                                <div className='product-description'>
                                    <a href="#">{product[3].name}</a>
                                    <h6>{product[3].price} $</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    </Fragment>

                }

            </div>


            <div className='text-center' id='all_product'>
                <Link to="/shop" className='btn btn-primary'>Tous les produits</Link>
            </div>
        </div>
    );
}

export default Latest;