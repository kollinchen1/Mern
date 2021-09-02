import React from  'react';

const Draw = (props) => {
    const allCircles = props.circles
    return(

        <>
            {/* {JSON.stringify(allCircles)} */}
            {allCircles.map( (item, i) => 
                    <p style={{
                        backgroundColor:item.color,
                        width:item.width,
                        height:item.height,
                        display:"inline-block",
                        marginLeft:"30px"
                        }}>
                            {item.color}
                    </p>
                    
                )}
            
            {/* <ul>{
                allCircles.map( (item, i) => 
                    <li key={ i }>{ item }</li>
                )
            }</ul> */}

        </>

        
    );
};

export default Draw;