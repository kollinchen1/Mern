import React, { useState } from  'react';
import { useHistory} from "react-router-dom";

// const options = [
//     { value: 'planets', label: 'Planets' },
//     { value: 'starships', label: 'Spaceships' },
//     { value: 'people', label: 'People' },
//     { value: 'films', label: 'Films' },
//     { value: 'vehicles', label: 'Vehicles' },
//     { value: 'species', label: 'Species' },
// ]

const Input = (props) => {
    const [inputs,setInputs] = useState({
        category:"",
        id:""
    })
    // const history = useHistory();
    // const currentRout = useRef("/")

    const handleEnter = (e) => {
        e.preventDefault();
        if(inputs.category && inputs.id){
            props.onNewObj( inputs);
            setInputs({
                category:"",
                id:""
                }
            )
        }
        else{
            alert("please fill out the form")
        }
        // console.log(history)
        // history.push(`/${inputs.category}/${inputs.id}`)
        // currentRout.current = `/${inputs.category}/${inputs.id}`;
        
        
    };
    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    return(
        <div style={{marginTop:"50px"}}>
            {/* {JSON.stringify(inputs)} */}
            {/* <form onSubmit={ handleEnter }> */}
                
                <label htmlFor="category">Search for: </label> 
                <select 
                    value = {inputs.category} 
                    onChange={onChange} 
                    name = "category"
                    type = "category">
                    <option hidden defaultValue> -- select an option -- </option>
                    <option value="planets">Planets</option>
                    <option value="starships">Spaceships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                </select>
                &nbsp;&nbsp;
                <label htmlFor="id">ID: </label> 
                <input 
                    name = "id"
                    type="number"
                    onChange={onChange}
                    value = {inputs.id}
                />
                &nbsp;&nbsp;
                <input onClick={handleEnter}  type ="button" value="Search" />
            {/* </form> */}
        </div>            
        
    );

};

export default Input;