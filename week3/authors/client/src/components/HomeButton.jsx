import React from 'react'
import { Link} from "react-router-dom";
// import { useHistory} from "react-router-dom";
const HomeButton =(props)=>{

    // const history = useHistory();
    
    // const CancelAndGoHome =()=>{
    //     history.push("/");
    // }
    return (
        <Link to="/">
            <button>
            Cancel 
            </button>
        </Link>
        
    )
}
export default HomeButton
