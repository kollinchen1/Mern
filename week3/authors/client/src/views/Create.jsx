import React, { useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { useHistory} from "react-router-dom";

const Create = (props) => {
    const [dbErrors, setDBErrors] = useState([])
    const history = useHistory();

    const onCreateAuthor = newObj =>{
        // setSize(size=>size+1)
        axios.post('http://localhost:8000/api/authors', newObj)
            .then(res=>{
                //setAuthors([...authors, res.data]);
                console.log(res.data);
                history.push("/");

            })
            .catch(err=>{
                console.log(err.response)
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map( error => errors[error].message);
                setDBErrors(messages);
            })
        
    }
    return (
        <div>
            {dbErrors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            <AuthorForm submitAuthor = {onCreateAuthor} header="Add a new author" initialName="" />
        </div>


    )
}

export default Create;
