import React, { useState } from 'react'
import axios from 'axios';
// import { useHistory} from "react-router-dom";

const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const { submitProduct,initialTitle,initialPrice,initialDescription,header} = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    // const history = useHistory();

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        // axios.post('http://localhost:8000/api/products', {
        //     title,
        //     price,
        //     description,
        // })
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err))
        submitProduct({title,price,description});
        setTitle(initialTitle)
        setPrice(initialPrice)
        setDescription(initialDescription)
        // history.push(`/products`)
    }
    //onChange to update firstName and lastName
    return (
        <>
        <h1>{header}</h1>
        <form onSubmit={onSubmitHandler}>
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
        </>
    )
}

export default ProductForm;