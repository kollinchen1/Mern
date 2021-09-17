import React, { useState } from 'react'

const PlayerForm = (props) => {
    //keep track of what is being typed via useState hook
    const { submitPlayer,initialName,header,initialPos} = props;
    const [name, setName] = useState(initialName); 
    const [prefPos, setPrefPos] = useState(initialPos); 
    const [joinedGames] = useState([false,false,true])
    // const [joinedGames, setJoinedGames] = useState([false,false,true])

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        console.log("submitted")
        submitPlayer({name,prefPos,joinedGames});
    }

    //onChange to update firstName and lastName
    return (
        <>
            {/* {JSON.stringify(name)} */}
            <h1>{header}</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name: </label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </p>
                <p>
                    <label>Preferred Position: </label>
                    <input type="text" onChange={(e)=>setPrefPos(e.target.value)} value={prefPos}/>
                </p>
            
                <input style={{marginLeft:"30px"}}type="submit"/>
            </form>
        </>
    )
}

export default PlayerForm;