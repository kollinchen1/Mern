import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import { Redirect } from 'react-router'
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path ="/">
            <Redirect to="/products"/>
          </Route>
          <Route exact path="/products/">
            <Main />
          </Route>
          <Route exact path="/products/:id">
            <Detail />
          </Route>
          <Route exact path="/products/:id/edit">
              <Update />
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}
    
export default App;