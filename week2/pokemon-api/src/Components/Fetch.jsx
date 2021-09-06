import React, { useEffect, useState } from 'react';

const Fetch = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);

    return (
        <div>
            {pokemon.length > 0 && pokemon.map((poke, index)=>{
                return (
                    <div key={index} style={{ textAlign:"left", marginLeft:"45%"}}>
                        <li>{poke.name}</li>
                    </div>
                )
            })}
        </div>
    );
}
export default Fetch;