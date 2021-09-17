import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";

import axios from 'axios';

const StatusPage = (props) => {
    const { id } = useParams();
    const [players, setPlayers] = useState();
    const [loaded, setLoaded] = useState(false);
    const [joinedGames,setJoinedGames] = useState([])
    useEffect(()=>{
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
        fetchData();
    }, [id]); 
    
    const updatePlayer = (id,games) => {
        console.log(id,games)
        axios.put('http://localhost:8000/api/players/' + id, games)
            .then(res => {
                console.log(res)
                setJoinedGames(games)
            })
            .catch(err => {
                console.log(err.response)
            });
        
    }
    return (
        <div>
            {JSON.stringify(players)}
            
            {loaded &&
                <table style={{marginLeft:"25%",border:"1px solid",width:"50%",alignContent:"center"}}>
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {players.map( (player, i) =>
                            <tr key={player._id} >
                                <td>{player.name}</td>
                                <td>{player.prefPos}</td>
                                <td>
                                    <button onClick={()=>updatePlayer(player._id,[true,false,false])}>Playing</button>
                                    <button onClick={()=>updatePlayer(player._id,[false,true,false])}>Not Playing</button>
                                    <button onClick={()=>updatePlayer(player._id,[false,false,true])}>Undecided</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
            {JSON.stringify(joinedGames)}
        </div>


    )
}

export default StatusPage;