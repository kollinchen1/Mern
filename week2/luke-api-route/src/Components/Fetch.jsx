import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import Obi from '../Assets/ObiWan.jpeg'

const Fetch = (props) => {
    const { category,id } = useParams();
    const [Obj, setObj] = useState({});
    // const [loading, setLoading] = useState(false);

    useEffect(()=>{
        fetchData();
    }, [category,id]); 
    const fetchData = () =>{
        console.log("Fetching");
        axios.get('https://swapi.dev/api/'+category+"/"+id)
        .then(response=>{
            console.log(response.data)
            var first5 = {}
            let i = 0
            for(const [key, value] of Object.entries(response.data)){
                first5[key] = value
                i++
                if(i===5)break;
            }
            if(category === "people"){
                let homeId = response.data['homeworld'].match(/(\d+)/)[1]; 
                console.log(homeId);
                first5['homeworld'] = `planet ${homeId}`;
            }
            setObj(first5)
        })
        .catch(error =>{
            console.log(error);
            setObj("These aren't the droids you're looking for")
        });
    }
    return(
        <div>
            {
                Obj!=="These aren't the droids you're looking for"?
                    <div style={{textAlign:"left",marginLeft:"25%"}}>
                    {Object.keys(Obj).map((key, i) =>
                        key==="name"?
                        <h1 key={i}>{Obj[key]}</h1>
                        :
                        <p key={i} style={{fontSize:"18px"}} ><span style={{fontWeight:"bold"}}>{key[0].toUpperCase()+key.substring(1)}:</span> {Obj[key]}</p>
                    )}
                    </div>
                    :
                    <div>
                        <img src={Obi} height={200} width={200}></img>
                        <p>{Obj}</p>
                    </div>
                    
            }
            
        </div>
    )

}
export default Fetch;