import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div>
    <div style={{backgroundImage:`url(${logo})`}}>
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      
      <ul>
        <li>Learn React</li>
        <li>Skip Leg Day</li>
        <li>Climb My. Everest</li>
        <li>Feed the dogs</li>
      </ul>
      
      
    </div>
  );
}

export default App;
