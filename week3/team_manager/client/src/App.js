import {Switch,Route} from "react-router-dom";
import Main from './views/Main';
import { Redirect } from 'react-router'
import Create from './views/Create';
import Header from './components/Header'
import StatusPage from "./views/StatusPage";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path ="/">
            <Redirect to="/players/list"/>
          </Route>
          <Route exact path ="/players/list">
            <Main />
          </Route>
          <Route exact path ="/players/addplayer">
            <Create/>
          </Route>
          <Route exact path ="/status/game/:id">
            <h1>Page Under Construction</h1>
            <StatusPage/>
          </Route>

        </Switch>
        
      </div>
  );
}

export default App;
