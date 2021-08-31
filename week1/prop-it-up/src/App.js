import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import BigInversion from './components/BigInversion';

var peopleArr =[
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
  {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
  {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
]

function App() {
  return (
    <div className="App">
        <h1 style={{textDecoration: "underline"}}>Prop it Up</h1>
        {peopleArr.map(person => {
          return <PersonCard header={person.lastName +", " + person.firstName} firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
        })
        
        }
        <h1 style={{textDecoration: "underline"}}>Big Inversion</h1>
        {peopleArr.map(person => {
          return <BigInversion header={person.lastName +", " + person.firstName} firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
        })
        
        }
    </div>
  );
}
    
export default App;