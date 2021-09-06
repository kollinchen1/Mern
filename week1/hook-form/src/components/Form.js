import React, { useState } from  'react';

const Form = (props) => {
    const{inputs,setInputs} = props
    // const [ferrors, setfError] = useState("");
    // const [lerrors, setlError] = useState("");
    // const [eerrors, seteError] = useState("");
    // const [perrors, setpError] = useState("");
    // const [pcerrors, setpcError] = useState("");
    const [errorObj,setErrorObj] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const createUser = (e) => {
        e.preventDefault();
        const newUser = inputs
        if(!hasErrors()&&!emptyForm(newUser)){
            setErrorObj({
                firstName:"",
                lastName:"",
                email:"",
                password:"",
                confirmPassword:""
                }
            )
            alert("Welcome "+ newUser.firstName);
            
        }
        else{
            alert("Please fix the errors")
        }
        
    };
    const emptyForm = (newUser) =>{
        for(let a in newUser){
            // console.log(newUser[a]);
            if(newUser[a])
                return false;
        }
        return true
    }
    const hasErrors = () =>{
        // console.log("da");
        for(let a in errorObj){
            console.log(errorObj[a]);
            if(errorObj[a])
                return true;
        }
        return false;
    }
    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
        switch(e.target.name){
            case "firstName":
                setErrorObj({
                    ...errorObj,
                    firstName:"must be at least 2 characters."
                    }
                )
                if(e.target.value.length<2&&e.target.value.length!==0)
                    setErrorObj({
                        ...errorObj,
                        firstName:"must be at least 2 characters."
                        }
                    )
                else
                    setErrorObj({
                        ...errorObj,
                        firstName:""
                        }
                )
                // console.log("first")
                break;
            case "lastName":
                if(e.target.value.length<2&&e.target.value.length!==0)
                    setErrorObj({
                        ...errorObj,
                        lastName:"must be at least 2 characters."
                        }
                    )
                else
                    setErrorObj({
                        ...errorObj,
                        lastName:""
                        }
                    )
                console.log("last")
                break;
            case "email":
                if(e.target.value.length<5&&e.target.value.length!==0)
                    setErrorObj({
                        ...errorObj,
                        email:"must be at least 5 characters."
                        }
                    )
                else
                    setErrorObj({
                        ...errorObj,
                        email:""
                        }
                    )
                console.log("email")
                break;
            case "password":
                if(e.target.value.length<8 && e.target.value.length!==0){
                    
                    setErrorObj({
                        ...errorObj,
                        password:"must be at least 8 characters."
                        }
                    )
                    
                }
                    
                else{
                    // console.log("Nope 121")
                    setErrorObj({
                        ...errorObj,
                        password:""
                        }
                    )
                    // console.log(errorObj.password)
                }
                // if(e.target.value !== inputs['confirmPassword']){
                //     console.log(inputs['confirmPassword'])
                //     setErrorObj({
                //         ...errorObj,
                //         confirmPassword:"Not Match"
                //         }
                //     )
                // }
                    
                // else{
                //     setErrorObj({
                //         ...errorObj,
                //         confirmPassword:""
                //         }
                //     )
                // }
                    
                console.log(errorObj.password)
                // console.log(errorObj.confirmPassword)
                break;
            case "confirmPassword":
                if(e.target.value !== inputs['password'])
                    setErrorObj({
                        ...errorObj,
                        confirmPassword:"Not Match"
                        }
                    )
                else
                    setErrorObj({
                        ...errorObj,
                        confirmPassword:""
                        }
                    )
                break;
            default:
                break;
        }
    }


    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label htmlFor="firstName">First Name: </label> 
                    <input type="text" name = "firstName" onChange={onChange} />
                    {
                        // ferrors?
                        errorObj.firstName?
                        <p style={{color:'red'}}>{ errorObj.firstName }</p> 
                        :
                        <p>&nbsp;</p>
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label> 
                    <input type="text" name = "lastName" onChange={onChange} />
                    {
                        errorObj.lastName?
                        <p style={{color:'red'}}>{ errorObj.lastName }</p> 
                        :
                        <p>&nbsp;</p>
                    }
                </div>
                <div>
                    <label htmlFor="email">Email: </label> 
                    <input type="email" name = "email" autoComplete="username" onChange={onChange} />
                    {
                        errorObj.email?
                        <p style={{color:'red'}}>{ errorObj.email }</p> 
                        :
                        <p>&nbsp;</p>
                    }
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name = "password" autoComplete="new-password" onChange={onChange} />
                    {
                        errorObj.password?
                        <p style={{color:'red'}}>{ errorObj.password }</p> 
                        :
                        <p>&nbsp;</p>
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label> 
                    <input type="password" autoComplete="new-password" name = "confirmPassword" onChange={onChange} />
                    {
                        errorObj.confirmPassword?
                        <p style={{color:'red'}}>{ errorObj.confirmPassword }</p> 
                        :
                        <p>&nbsp;</p>
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
        
        
    );
};

export default Form;