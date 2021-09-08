import './App.css';
import {Switch,Route} from "react-router-dom";
import Fetch from "./Components/Fetch"
import Input from "./Components/Input"

function App() {
  return (
    <div className="App">
      
        <Switch>
        <Route exact path="/" render={()=>(<Input/>)}/>
        <Route exact path="/:category/:id" render={()=>(
          <div>
            <Input/>
            <Fetch/>
          </div>
        )}/>
        
        </Switch>
    </div>
  );
}

export default App;
