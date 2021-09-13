import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams} from "react-router-dom";
import {Link} from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(()=>{
        fetchData();
    }, [id]); 
    const fetchData = () =>{
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.error(err));
    }
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <Link  to={"/products/"+id}>Go back</Link>
            <form onSubmit={updateProduct}>
            <p>
                <label>Ttile</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
            </form>
        </div>
    )
}
    
export default Update;

