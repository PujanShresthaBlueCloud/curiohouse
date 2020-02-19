import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
               {(value)=> {
                   const {
                            id,
                            title,
                            img,
                            price,
                            company,
                            info,
                            inCart,
                            } = value.detailProduct;
                   return (
                       <div className="container py-5">
                           {/* title */}
                           <div className="row">
                               <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                   <h1>{title}</h1>
                               </div>
                           </div>
                           {/* End title */}
                           {/* product info */}
                           <div className="row">
                                <div className="col-10 mx-auto my-3 col-md-6">
                                    <img src={img} alt="product" className="img-fluid" />
                                </div>
                                 {/* product text */}
                                <div className="col-10 mx-auto text-capitalize my-3 col-md-6">
                                   <h2>Item: {title}</h2>
                                   <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                       made by: <span className="text-uppercase" >
                                           {company}
                                       </span>
                                   </h4>
                                   <h4 className="text-blue">
                                        <strong>
                                            Price: <span>${price}</span>
                                        </strong>
                                   </h4>
                                    <p className="mt-3 text-capitalize font-weight-bold mb-0">
                                        some info about product: 
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                   {/* buttons */}
                                   <Link to="/" >
                                       <ButtonContainer>
                                           back to products
                                       </ButtonContainer>
                                   </Link>
                                   <ButtonContainer cart
                                            disabled={inCart?true:false} onClick={()=>{
                                                value.addToCart(id);
                                                value.openModal(id);

                                   }}>
                                       {inCart ? 'in cart' : 'add to cart' }
                                   </ButtonContainer>
                                </div>
                                 {/* end product text */}
                           </div>
                       </div>
                   );
               }}
            </ProductConsumer>
        )
    }
}
