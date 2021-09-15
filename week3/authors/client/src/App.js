import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Favorite authors</h1>
        <Switch>
          <Route exact path ="/">
            <Main />
          </Route>
          <Route exact path ="/new">
            <Create />
          </Route>
          <Route exact path="/edit/:id/">
            <Edit />
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
