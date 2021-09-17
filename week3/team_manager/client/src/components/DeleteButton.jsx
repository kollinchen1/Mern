import React from 'react'
import axios from 'axios';
    
const DeleteButton =(props)=>{
    
    const { playerId, successCallback } = props;
    
    const deleteAuthor = e => {
        if (window.confirm("really?")){
            axios.delete('http://localhost:8000/api/players/' + playerId)
                .then(res=>{
                    successCallback();
                })
        }
    }
    
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}
export default DeleteButton
