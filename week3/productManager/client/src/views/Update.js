import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const history = useHistory()
    // const [title, setTitle] = useState(""); 
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");

    //fetch
    useEffect(()=>{
        const fetchData = () =>{
            axios.get('http://localhost:8000/api/products/' + id)
                .then(res => {
                    setProduct(res.data);
                    setLoaded(true);
                    // setTitle(res.data.title);
                    // setPrice(res.data.price);
                    // setDescription(res.data.description);
                })
                .catch(err => console.error(err));
        }
        fetchData();
    }, [id]); 
    
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => {
                history.push("/products/"+id)
                console.log(res)
            })
            .catch(err => console.error(err));
        
    }
    
    return (
        <div>
            
            {loaded && 
                (<div>
                <ProductForm submitProduct = {updateProduct} 
                                    header="Update a Product" 
                                    initialTitle={product.title} 
                                    initialDescription={product.description} 
                                    initialPrice={product.price}/>
                <br/>
                <DeleteButton productId={product._id} successCallback={() => history.push("/")}/>
                </div>                 
                )}
            <br/>
            <Link  to={"/products/"+id}>Go back</Link>
        </div>
    )
}
    
export default Update;

