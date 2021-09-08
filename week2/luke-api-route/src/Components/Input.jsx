import React, { useState } from  'react';
import { useHistory} from "react-router-dom";

const Input = (props) => {
    const [NewObj,setNewObj] = useState({
        category:"",
        id:""
    })
    const history = useHistory();

    const handleEnter = (e) => {
        e.preventDefault();
        if(NewObj.category && NewObj.id){
            history.push(`/${NewObj.category}/${NewObj.id}`)
            // setNewObj({
            //     category:"",
            //     id:""
            //     }
            // )
        }
        else{
            alert("please fill out the form")
        }    
    };
    const onChange = (e) =>{
        setNewObj({
            ...NewObj,
            [e.target.name]:e.target.value
        })
    }
    return(
        <>
        
        {/* {JSON.stringify(NewObj)}    */}
        <div style={{marginTop:"50px"}}>
        <form onSubmit={handleEnter}>    
            <label htmlFor="category">Search for: </label> 
            <select 
                value = {NewObj.category} 
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
                value = {NewObj.id}
            />
            &nbsp;&nbsp;
            <input type ="submit" value="Search" />
        </form>
        </div>            
        </>
    );

};

export default Input;