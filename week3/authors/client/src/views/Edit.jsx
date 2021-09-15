import React, { useState, useEffect } from 'react';
import { useParams,useHistory} from "react-router-dom";

import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const Edit = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [dbErrors, setDBErrors] = useState([])
    const history = useHistory()
    useEffect(()=>{
        const fetchData = () =>{
            axios.get('http://localhost:8000/api/authors/' + id)
                .then(res => {
                    console.log(res.data)
                    setAuthor(res.data);
                    setLoaded(true);
                })
                .catch(err => console.error(err));
        }
        fetchData();
    }, [id]); 
    
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(err => {
                console.log(err.response)
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map( error => errors[error].message);
                setDBErrors(messages);
            });
        
    }
    return (
        <div>
            {dbErrors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            {loaded &&
                <AuthorForm submitAuthor = {updateAuthor} header="Edit This Author" initialName={author.name} />
            }
        </div>


    )
}

export default Edit;
