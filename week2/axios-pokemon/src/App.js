import React, {useState } from 'react';
import Fetch from './Components/Fetch'
import './App.css';


function App() {
  const [fetch, setFetch] = useState(false);

  const fetchList = () =>{
    
    setFetch(!fetch)
  }
  return (
    <div className="App">
      {
        fetch?
        <input type="button" onClick={()=>fetchList()} value = "Clear"/>
          :
          <input type="button" onClick={()=>fetchList()} value = "Fetch"/>
      }
      {    
        fetch?<Fetch/> :<p>Click the button to fetch all 807 Pokemons' names</p>
      }
      
    </div>
  );
}

export default App;
