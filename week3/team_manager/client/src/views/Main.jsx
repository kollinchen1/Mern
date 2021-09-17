import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListHeader from '../components/ListHeader'
import PlayerList from '../components/PlayerList';

const Main = (props) => {
    const [players, setPlayers] = useState([])
    const [loaded, setLoaded] = useState(false);

    
    useEffect(()=>{
        fetchData();
    }, []); 
    const fetchData = () =>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data.allPlayersArray);
                // console.log(res.data)
                setLoaded(true);
                // console.log(size);
            })
            .catch(err => console.error(err));
    }

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }


    return (
        <div>
            {JSON.stringify(players)}
            <ListHeader/>
            <br/><br/>
            {loaded && <PlayerList players={players} removeFromDom={removeFromDom}/>
        }
        </div>


    )
}

export default Main;
