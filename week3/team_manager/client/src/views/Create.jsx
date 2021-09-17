import React, { useState } from 'react';
import axios from 'axios';
import ListHeader from '../components/ListHeader'
import PlayerForm from '../components/PlayerForm';
import { useHistory} from "react-router-dom";

const Create = (props) => {
    const [dbErrors, setDBErrors] = useState([])
    const history = useHistory();

    const onCreatePlayer = newObj => {
        axios.post('http://localhost:8000/api/players', newObj)
            .then(res=>{
                console.log(res.data);
                history.push("/");

            })
            .catch(err=>{
                console.log(err.response)
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map( error => errors[error].message);
                setDBErrors(messages);
            })
        
    }
    return (
        <div>
            <ListHeader/>
            {dbErrors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            <PlayerForm submitPlayer = {onCreatePlayer} header="Add Player" initialName="" initialPos=""/>
        </div>


    )
}

export default Create;