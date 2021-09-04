import React, { useState } from  'react';
const Input = (props) => {
    const [inputs,setInputs] = useState({
        content:"",
        completed:false
    })
    const handleAdd = (e) => {
        e.preventDefault();
        console.log(inputs.content)
        if(!inputs.content)
            alert("input something")
        else
            props.onNewList(inputs);
        setInputs({
            content:"",
            completed:false
        })
    }
    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    return(

        <>
            <br/>
            <br/>
            <form onSubmit={ handleAdd }>
            <input 
                name = "content"
                type = "text"
                onChange={onChange}
                value = {inputs.content}
            />
            <br/>
            <br/>
            <input type="submit" value="Add" />
            </form>
            <br/>
            <br/>

        </>

        
    );
};

export default Input;