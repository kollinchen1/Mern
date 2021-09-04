import React, { useState } from  'react';
import Input from './components/Input';
import List from './components/List'
import './App.css';

function App() {

  const [currentArr, setCurrentArr] = useState([
    {content:"Get Python black belt", completed:true}
  ]);
  
  const newList = ( newObj ) => {
    setCurrentArr( [...currentArr,newObj] );
  }
  const deleteList = (deleteIndex) =>{
    const deleteOne = currentArr.filter((i,index)=>index!=deleteIndex);
    // console.log(deleteOne)
    setCurrentArr(deleteOne)
  }
  const onChecked = (index) =>{
    const items = [...currentArr]
    items[index].completed = !items[index].completed;
    setCurrentArr(items)
  }
  return (
    <div className="App">
      
      <Input onNewList = { newList }/>
      <List onDeleteList={ deleteList } tasks={ currentArr } onChecked={onChecked} setCurrentArr ={setCurrentArr}/>
    </div>
  );
}

export default App;
