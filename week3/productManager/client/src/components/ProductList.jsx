import React from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
const ProductList = (props) => {
    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map( (product, i) =>
                <div key={i}>
                <Link  to={"/products/"+product._id}>{product.title}</Link>
                <br/><br/>
                </div>
            )}
        </div>
    )
}
    
export default ProductList;