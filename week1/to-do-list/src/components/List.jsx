import React, { useState } from  'react';

const List = (props) => {

    const handleDelete = (e) => {
        // e.preventDefault();

        // var deleteOne = props.tasks.filter((i,index)=>index!=e.target.index.value);
        // console.log(deleteOne)
        // props.setCurrentArr(deleteOne)
        props.onDeleteList(e)
        // props.onDeleteList(e.target.index.value)
    }
    const onChecked = (i) => {
        // console.log(i)
        // // e.preventDefault();

        // // props.onCheckedList(e.target.checked)
    }
    

    return(

        <>
            {/* {JSON.stringify(props.tasks)} */}
            <br/>
            {props.tasks.map( (item, i) => 
                
                <p style={{
                    textDecoration: item.completed? "line-through":"none",
                    // display:"inline-block"
                    }}>
                    {item.content},{i}
                    <input onChange={()=>props.onChecked(i)} type="checkbox" checked={item.completed}/>
                    <input 
                        type="button"
                        onClick={()=>handleDelete(i)}
                        value = "delete"/>
                    
                </p>
                // <form key={i} onSubmit={ handleDelete }>
                    
                //     <p style={{
                //         textDecoration: item.checked? "line-through":"none",
                //         display:"inline-block"
                //         }}>
                //         {item.content}
                //     </p>
                    
                //     <input type="hidden" name ="index" value = {i}/>
                //     <input type="checkbox" onClick={onChecked} checked={item.checked}/>
                //     <input 
                //         type="submit" 
                //         style={{display:"inline-block"}}
                //         value = "delete"/>
                    
                // </form>
                    
                    
                    
                )}
        </>

        
    );
};

export default List;