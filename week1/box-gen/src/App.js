
import React, { useState } from  'react';
import CreateBox from './components/CreateBox';
import Draw from './components/Draw'
import './App.css';

function App() {

  const [currentArr, setCurrentArr] = useState([
    {color:"red",width:"50px",height:"50px"}
  ]);
  
  const newBox = ( newBox ) => {
    var box = currentArr.concat(newBox);
    console.log(box)
    setCurrentArr( box );
  }
  return (
    <div className="App">
      
      <CreateBox onNewBox = { newBox }/>
      <Draw circles={ currentArr } />
    </div>
  );
}

export default App;
