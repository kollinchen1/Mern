import './App.css';
import React from "react";
import {BrowserRouter,Switch,Route,useParams} from "react-router-dom";

const InputWord = (props) => {
  const { input } = useParams();
    
  return (
    isNaN(input)?
      <h1>The word is: { input }</h1>
      :
      <h1>The number is: { input }</h1>
  );
}

const InputWordWithProps = (props) => {
  const { input,stringColor,backgroundColor } = useParams();
  return (
    isNaN(input)?
    <h1 style={{color:stringColor,backgroundColor:backgroundColor}}>The Word is: {input}</h1>
    :
    <h1 style={{color:stringColor,backgroundColor:backgroundColor}}>The number is: {input}</h1>

  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/home">
          <h1>Welcome</h1>
        </Route>
        <Route exact path="/:input">
          <InputWord/>
        </Route>
        <Route  path="/:input/:stringColor/:backgroundColor">
          <InputWordWithProps/>
        </Route>
        

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
