import React, { useState } from  'react';


const CreateBox = (props) => {
    const [inputs,setInputs] = useState({
        color:"",
        width:"",
        height:""
    })
    const handleEnter = (e) => {
        e.preventDefault();
        // if(!inputs.width){
        //     setInputs({
        //         ...inputs,
        //         width:"50px"
        //         }
        //     )
        // }
        if(!inputs.height)
            inputs.height = 100;
        if(!inputs.width)
            inputs.width = 100;
        inputs.width = inputs.width + "px";
        inputs.height = inputs.height + "px";
        props.onNewBox( inputs);
        
        setInputs({
            color:"",
            width:"",
            height:""
            }
        )
    };
    const onChange = (e) =>{
        
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    return(
        // onChange={ (e) => setColor(e.target.value)}
            <form onSubmit={ handleEnter }>
            <label htmlFor="color">Color: </label> 
            <input 
                name = "color"
                type = "color"
                onChange={onChange}
                value = {inputs.color}
            />
            <br/>
            <br/>
            <label htmlFor="width">Width: </label> 
            <input 
                name = "width"
                type="number"
                onChange={onChange}
                value = {inputs.width}
            />
            <br/>
            <br/>
            <label htmlFor="height">Height: </label> 
            <input 
                name = "height"
                type="number"
                onChange={onChange}
                value = {inputs.height}
            />
            <br/>
            <br/>
            <input type="submit" value="Submit" />
            </form>
        
    );

};

export default CreateBox;