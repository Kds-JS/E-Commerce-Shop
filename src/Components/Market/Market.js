import React, { Fragment, useState, useEffect, Children } from 'react';
import '../../SCSS/market.scss';
import { Link} from "react-router-dom";

function Market(props) {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('');
    const [filter,setFilter] = useState(false);

    const [allProduct, setAllProduct] = useState([]);
    const [man, setMan] = useState([]);
    const [woman, setWoman] = useState([]);
    const [children, setChildren] = useState([]);
    

    useEffect(() => {
      fetch(`http://localhost:8000/products${filter ? `?category=${category}` : ''}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.log(error.message);
        })
    }, [category,filter])

    useEffect(() => {
        fetch(`http://localhost:8000/products`)
          .then((response) => {
              return response.json();
          })
          .then((data) => {
            console.log(data);
            const manArray = data.filter((product) => product.category == "homme");
            const womanArray = data.filter((product) => product.category == "femme");
            const childrenArray = data.filter((product) => product.category == "enfant");
            setAllProduct(data);
            setMan(manArray);
            setWoman(womanArray);
            setChildren(childrenArray);
            
          })
          .catch((error) => {
            console.log(error.message);
          })
      }, [])



    const showAll = () => {
        setCategory('');
        setFilter(false);
    }

    const filteredMan = () => {
        setCategory('homme');
        setFilter(true);
    }

    const filteredWoman = () => {
        setCategory('femme');
        setFilter(true);
    }

    const filteredChildren = () => {
        setCategory('enfant');
        setFilter(true);
    }

    const showProducts = data.map((product,index) => {
        return (
            <div className="col-lg-4 col-md-6 " key={index}>
               <Link to={'/detail'+ '/' + product.id}>
                <div className='product'>
                        <div className='product-image'>
                            <img src={product.image[0]} alt="image" />
                        </div>

                        <div className='product-description'>
                            <a href="#">{product.name}</a>
                            <h6>{product.price} $</h6>
                        </div>
                    </div>
               </Link>
            </div>
        )
    })


    return (

        <Fragment>
            <div className='market-banner'>
                <h1>Shop</h1>
            </div>
        
            <div className='shop'>

                <div className='market-section'>
                    
                    <div className="row gx-lg-5">
                    <div className="col-lg-3">
                        <div className='category'>
                            <div>
                                <h1>Categorys</h1>
                            </div>
                            <ul>
                                <li id="list-one" onClick={showAll} className={category == '' && 'active'}>Tous <span>+{allProduct.length}</span></li>
                                <li onClick={filteredMan} className={category == 'homme' && 'active'}>Hommes <span>+{man.length}</span></li>
                                <li onClick={filteredWoman} className={category == 'femme' && 'active'}>Femmes <span>+{woman.length}</span></li>
                                <li onClick={filteredChildren} className={category == 'enfant' && 'active'}>Enfants <span>+{children.length}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 products">
                    
                        <div className="row gy-5 ">

                            {showProducts}
        
                        </div>
                    </div>
                    </div>

                </div>
            

                </div>
                    

        </Fragment>
    );
}

export default Market;