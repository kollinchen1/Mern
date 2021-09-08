import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import Obi from '../pictures/oooo.jpeg'

const Fetch = (props) => {
    const { category,id } = useParams();
    // const list = props.list;
    const [list, setList] = useState({});
    useEffect(()=>{
        axios.get('https://swapi.dev/api/'+category+"/"+id)
        // axios.get('https://swapi.dev/api/'+props.category+"/"+props.id)
        .then(response=>{
            console.log(response.data)
            setList(response.data)
        })
        .catch(error =>{
            console.log(error);
            setList("These aren't the droids you're looking for")
            // setList("These aren't the droids you're looking for")
        });
    }, []); 
    return(
        <div>
            {
            list!=="These aren't the droids you're looking for"?
                <div style={{textAlign:"left",marginLeft:"25%"}}>
                {Object.keys(list).map( (key, i) =>
                    key==="name"?
                    <h1 key={i}>{props.list[key]}</h1>
                    :
                    <p key={i} style={{fontSize:"18px"}} ><span style={{fontWeight:"bold"}}>{key[0].toUpperCase()+key.substring(1)}:</span> {list[key]}</p>
                )}
                </div>
                :
                <div>
                    <img src={Obi} height={200} width={200}></img>
                    <p>{JSON.stringify(list)}</p>
                </div>
            }
        </div>
    )

}
export default Fetch;