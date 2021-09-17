import React from 'react'
import DeleteButton from './DeleteButton';

const PlayerList = (props) => {
    const { removeFromDom } = props;

    return (
        <table style={{marginLeft:"25%",border:"1px solid",width:"50%",alignContent:"center"}}>
            <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {props.players.map( (player, i) =>
                    <tr key={player._id} >
                        <td>{player.name}</td>
                        <td>{player.prefPos}</td>
                        <td>
                            <DeleteButton
                                playerId={player._id} 
                                successCallback={()=>removeFromDom(player._id)}
                            />
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
    
export default PlayerList;