import React, { useState } from  'react';

const Form = (props) => {
    const [ferrors, setfError] = useState("");
    const [lerrors, setlError] = useState("");
    const [eerrors, seteError] = useState("");
    const [perrors, setpError] = useState("");
    const [pcerrors, setpcError] = useState("");


    const{inputs,setInputs} = props
    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
        switch(e.target.name){
            case "firstName":
                if(e.target.value.length<2)
                    setfError(
                        "must be at least 2 characters."
                    )
                else
                    setfError("")
                console.log("first")
                break;
            case "lastName":
                if(e.target.value.length<2)
                    setlError(
                        "must be at least 2 characters."
                    )
                else
                    setlError("")
                console.log("last")
                break;
            case "email":
                if(e.target.value.length<5)
                    seteError(
                        "must be at least 5 characters."
                    )
                else
                    seteError("")
                console.log("email")
                break;
            case "password":
                if(e.target.value.length<8)
                    setpError(
                        "must be at least 5 characters."
                    )
                else
                    setpError("")
                if(e.target.value != inputs['confirmPassword'])
                    setpcError(
                        "Not Match"
                    )
                else
                    setpcError("")
                
                console.log(inputs['confirmPassword'])
                break;
            case "confirmPassword":
                if(e.target.value != inputs['password'])
                    setpcError(
                        "Not Match"
                    )
                else
                    setpcError("")
                break;
        }
    }


    return(
        <div>
            <form>
                <div>
                    <label htmlFor="firstName">First Name: </label> 
                    <input type="text" name = "firstName" onChange={onChange} />
                    {
                        ferrors?
                        <p style={{color:'red'}}>{ ferrors }</p> 
                        :
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label> 
                    <input type="text" name = "lastName" onChange={onChange} />
                    {
                        lerrors?
                        <p style={{color:'red'}}>{ lerrors }</p> 
                        :
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="email">Email: </label> 
                    <input type="email" name = "email" onChange={onChange} />
                    {
                        eerrors?
                        <p style={{color:'red'}}>{ eerrors }</p> 
                        :
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password"name = "password" onChange={onChange} />
                    {
                        perrors?
                        <p style={{color:'red'}}>{ perrors }</p> 
                        :
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label> 
                    <input type="password" name = "confirmPassword" onChange={onChange} />
                    {
                        pcerrors?
                        <p style={{color:'red'}}>{ pcerrors }</p> 
                        :
                        ''
                    }
                </div>
                {/* <input type="submit" value="Create User" /> */}
            </form>
        </div>
        
        
    );
};

export default Form;