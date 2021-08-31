import React from  'react';

const Result = (props) => {
    // const {firstName,lastName,email,password,confirmPassword} = props.result;
    return(
        <div>
            <h1>Your Form Data</h1>
            <p>First Name: {props.result.firstName}</p>
            <p>Last Name: {props.result.lastName}</p>
            <p>Email: {props.result.email}</p>
            <p>Password: {props.result.password}</p>
            <p>Confirmed Password: {props.result.confirmPassword}</p>

{/* 
            <h1>Your Form Data</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirmed Password: {confirmPassword}</p> */}
        </div>
        
        
        
    );
};

export default Result;