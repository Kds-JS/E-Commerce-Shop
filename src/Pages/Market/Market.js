import React, { Fragment, useState, useEffect, Children } from 'react';
import { Link} from "react-router-dom";

function Market(props) {
    const [data, setData] = useState([]);
    const [products,setProducts] = useState([]);

    

    useEffect(() => {
        fetch(`https://kds-js.github.io/shop.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
        //   console.log(data);
          setData(data.products);
        })
        .catch((error) => {
          console.log(error.message);
        })
    }, [])

    useEffect(() => {
        setProducts(data);
    }, [data])

    const manArray = data.filter((product) => product.category == "homme");
    const womanArray = data.filter((product) => product.category == "femme");
    const childrenArray = data.filter((product) => product.category == "enfant");

    const [checkMan,setCheckMan] = useState(false);
    const [checkWoman,setCheckWoman] = useState(false);
    const [checkChildren,setCheckChildren] = useState(false);
    const [checkAll,setCheckAll] = useState(true);



    const showAll = () => {
        setProducts(data);
        setCheckAll(true);
        setCheckMan(false);
        setCheckWoman(false);
        setCheckChildren(false);
    }

    const filteredMan = () => {
        if (checkMan) {
            setProducts(data);
            setCheckAll(true);
        } else {
            setProducts(manArray);
            setCheckAll(false);
            setCheckWoman(false);
            setCheckChildren(false);
        }
    }

    const filteredWoman = () => {
        if (checkWoman) {
            setProducts(data);
            setCheckAll(true);
        } else {
            setProducts(womanArray);
            setCheckAll(false);
            setCheckMan(false);
            setCheckChildren(false);
        }
    }

    const filteredChildren = () => {
        if (checkChildren) {
            setProducts(data);
            setCheckAll(true);
        } else {
            setProducts(childrenArray);
            setCheckAll(false);
            setCheckWoman(false);
            setCheckMan(false);
        }
    }

    const showProducts = products.map((product,index) => {
        return (
            <div className="col-lg-4 col-md-6 " key={index}>
               <Link to={'/detail'+ '/' + product.id}>
                <div className='product'>
                        <div className='product-image'>
                            <img src={product.image[0]} alt="image" />
                        </div>

                        <div className='product-description'>
                            <Link to={'/detail'+ '/' + product.id}>{product.name}</Link>
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
                                <li id="list-one">
                                    <p>
                                        <input type="checkbox" checked={checkAll} className='form-check-input me-2' onClick={showAll}/>
                                        Tous
                                    </p> 
                                    <span className={checkAll && 'active'}>+{data.length}</span>
                                </li>
                                <li  > 
                                    <p>
                                        <input type="checkbox" checked={checkMan} className='form-check-input me-2' onChange={(e) => setCheckMan(e.target.checked)} onClick={filteredMan}/>
                                        Hommes
                                    </p> 
                                    <span className={checkMan && 'active'}>+{manArray.length}</span>
                                </li>
                                <li  >
                                    <p>
                                        <input type="checkbox" checked={checkWoman} className='form-check-input me-2' onChange={(e) => setCheckWoman(e.target.checked)} onClick={filteredWoman}/>
                                        Femmes
                                    </p> 
                                    <span className={checkWoman && 'active'}>+{womanArray.length}</span>
                                </li>
                                <li >
                                    <p>
                                        <input type="checkbox" checked={checkChildren} className='form-check-input me-2' onChange={(e) => setCheckChildren(e.target.checked)} onClick={filteredChildren}/>
                                        Enfants
                                    </p>  
                                    <span className={checkChildren && 'active'}>+{childrenArray.length}</span>
                                </li>
                                
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