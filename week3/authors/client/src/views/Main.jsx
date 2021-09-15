import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import {Link } from 'react-router-dom';

const Main = (props) => {
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false);
    // const {size} = props;

    
    useEffect(()=>{
        fetchData();
    }, []); 
    const fetchData = () =>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data.allAuthorsArray);
                // console.log(res.data)
                setLoaded(true);
                // console.log(size);
            })
            .catch(err => console.error(err));
    }
    // const onCreateProduct = newObj =>{
    //     setSize(size=>size+1)
    //     axios.post('http://localhost:8000/api/authors', newObj)
    //         .then(res=>{
    //             setAuthors([...authors, res.data]);
    //             console.log(res.data);
    //         })
    //         .catch(err=>console.log(err))
    // }
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }


    return (
        <div>
            <Link to={"/new"}>Add an author</Link>
            {loaded &&
            <>
                <p style={{color:"#ad6eff"}}>We have quotes by:</p>
                <AuthorList authors={authors} removeFromDom={removeFromDom}/>
            </>
        }
        </div>


    )
}

export default Main;
