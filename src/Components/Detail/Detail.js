import React, { useEffect, useState } from 'react';
import '../../SCSS/detail.scss';
import parka from '../../../src/Images/parka.png';
import parka2 from '../../../src/Images/parka-1.png';
import Latest from '../Latest/Latest';


function Detail(props) {
    const imageArray = [parka,parka2,'https://assets.website-files.com/5c78e314be5f9fc4990593b3/5e2edabd3efbdb42a475fae5_wrapped-in-my-favourite-sweater-p-800.jpeg','https://shoptimizerdemo.commercegurus.com/wp-content/uploads/2017/12/parka_jacket_01-990x990.jpg'];
    const [imageIndex, setImageIndex]  = useState(0);

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