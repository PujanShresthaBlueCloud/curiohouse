import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    
    render() {
        return (
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        {/* product row */}
                        <Title name="our" title="products" />
                        <div className="row">
                            <div className="row">
                                <ProductConsumer>
                                    {/* always use function to get consumer send by context as value property */}
                                    {value=>{
                                       // console.log(value);
                                        return value.products.map(product => {
                                            return <Product key={product.id} product={product}/>
                                        });
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
