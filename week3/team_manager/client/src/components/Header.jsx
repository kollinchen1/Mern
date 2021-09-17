import React from 'react'
import { Link,useLocation} from "react-router-dom";
import './headers.css';
const Header =(props)=>{
    const location = useLocation();

    return (
        <div className="mainHeader">
            <br/>
            {
                location.pathname.includes("/status/game/")?
                <>
                    <Link to="/players/list">
                        Manage Players 
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/status/game/1">
                        <span style={{fontWeight:"bold"}}>Manage Player Status</span>
                    </Link>
                </>
                :
                <>
                    <Link to="/players/list">
                        <span style={{fontWeight:"bold"}}>Manage Players</span>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/status/game/1">
                        Manage Player Status
                    </Link>
                </>
            }
            <br/>
            <br/>
            {/* <h1>{location.pathname}</h1>
            <Link to="/players/list">
                Manage Players 
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/status/game/1">
                Manage Player Status
            </Link> */}
        </div>
    )
}
export default Header
