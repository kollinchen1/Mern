import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fetch = (props) => {

    const [pokedex, setpokedex] = useState([]);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>{setpokedex(response.data.results)});
    }, []); 
    return(
        <div>
            {pokedex.length > 0 && pokedex.map((poke, index)=>{
                return (
                    <div key={index} style={{ textAlign:"left", marginLeft:"45%"}}>
                        <li>{poke.name}</li>
                    </div>
                )
            })}
        </div>
    )

}
export default Fetch;