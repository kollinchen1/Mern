import React, { useState } from  'react';
import { useHistory} from "react-router-dom";
import Input from './Components/Input';
import Fetch from './Components/Fetch'
import './App.css';
import Obi from './pictures/oooo.jpeg'
import {Switch,Route} from "react-router-dom";


function App() {
  const [object, setObj] = useState({});
  const [list,setList] = useState({})
  // const [homeWorld, setHomeworld] = useState({})
  const history = useHistory();
  // const history = useHistory();
  const onNewObj = ( newObj ) => {
    console.log(newObj.category,newObj.id)
    setObj( newObj );
    history.push(`/${newObj.category}/${newObj.id}`);
  }
  const onNewList = ( newList ) => {
    if(newList!=="These aren't the droids you're looking for")
    {  
      var first5 = {}
      let i = 0
      for(const [key, value] of Object.entries(newList)){
        first5[key] = newList[key]
        i++
        if(i==5)
          break;
      }
      setList( first5 );
    }
    else{
      setList(newList)

    }
    // setObj({})
  }
  return (
    
    <div className="App">
      {JSON.stringify(object)}
        <Switch>
          <Route path="/">
          <Input onNewObj ={onNewObj} />
            <Route path="/:category/:id">
            {JSON.stringify(object)} 
              <Fetch onNewList={onNewList} list={list}/>
              {/* {      
                object.category?<Fetch onNewList={onNewList} list={list}/> :<p>&nbsp;</p>
              } */}
              </Route>
          </Route>
        </Switch>
    </div>
    
    // <div className="App">
    //   <Input onNewObj ={onNewObj} />
    //   {/* {JSON.stringify(object)} */}
    //   {      
    //    object.category&&object.id? <Fetch category={object.category} id={object.id} onNewList={onNewList}/> :<p>&nbsp;</p>
    //   }
    //   {
    //   list!=="These aren't the droids you're looking for"?
    //     <div style={{textAlign:"left",marginLeft:"25%"}}>
    //       {Object.keys(list).map( (key, i) =>
              
    //             key==="name"?
    //             <h1 key={i}>{list[key]}</h1>
    //             :
    //             <p key={i} style={{fontSize:"18px"}} ><span style={{fontWeight:"bold"}}>{key[0].toUpperCase()+key.substring(1)}:</span> {list[key]}</p>
              
    //       )}
    //       {/* {JSON.stringify(list)} */}

    //     </div>
        
    //     :
    //     <div>
    //       <img src={Obi} height={200} width={200}></img>
    //       <p>{JSON.stringify(list)}</p>
    //     </div>
        
    //   }
    // </div>
  );
}

export default App;
