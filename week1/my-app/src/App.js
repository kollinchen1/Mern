import React from 'react';
import './App.css';
// import MyNewComponent from './components/MyNewComponent';
// import LightSwitch from './components/LightSwitch';
import SomeOtherComponent from './components/SomeOtherComponent'
import PersonCard from './components/PersonCard'
    
function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
        <SomeOtherComponent/>
        {/* <MyNewComponent header={ "Header Prop" }>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>  
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
        <LightSwitch header={ "LightSwitch Prop" }>
            <p>This is a child</p>

        </LightSwitch>   */}
    </div>
  );
}
    
export default App;