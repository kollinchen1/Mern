import React from 'react'
import { Link,useLocation} from "react-router-dom";

const Header =(props)=>{
    const location = useLocation();
    return (
        <div className="subHeader">
            {
                location.pathname === "/players/list"?
                <>
                    <Link to="/players/list">
                        <span style={{fontWeight:"bold"}}>List</span>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/players/addplayer">
                        Add Player
                    </Link>
                </>
                :
                <>
                    <Link to="/players/list">
                        List
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/players/addplayer">
                        <span style={{fontWeight:"bold"}}>Add Player</span>

                    </Link>
                </>
            }
            
        </div>
    )
}
export default Header
