import React, { useState } from 'react'
import HomeButton from './HomeButton';

const AuthorForm = (props) => {
    //keep track of what is being typed via useState hook
    const { submitAuthor,initialName,header} = props;
    const [name, setName] = useState(initialName); 


    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        console.log("submitted")
        submitAuthor({name});
        // setName(initialName)
    }

    //onChange to update firstName and lastName
    return (
        <>
            {/* {JSON.stringify(name)} */}
            <p style={{color:"#ad6eff"}}>{header}</p>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name: </label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </p>
                <br/>
                <HomeButton/>
            
                <input style={{marginLeft:"30px"}}type="submit"/>
            </form>
        </>
    )
}

export default AuthorForm;