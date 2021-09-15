import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [size, setSize] = useState(0);
    
    useEffect(()=>{
        fetchData();
    }, [size]); 
    const fetchData = () =>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
                // console.log(size);
            })
            .catch(err => console.error(err));
    }
    const onCreateProduct = newObj =>{
        setSize(size=>size+1)
        axios.post('http://localhost:8000/api/products', newObj)
            .then(res=>{
                setProducts([...products, res.data]);
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            <ProductForm submitProduct = {onCreateProduct} header="Product Manager" initialTitle="" initialDescription="" initialPrice=""/>
            
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}
    
export default Main;