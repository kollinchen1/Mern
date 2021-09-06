import react, { useState } from 'react';
    
    
const MessageDisplay = (props) => {
    const allMessages = props.message
    return (
        <>
            <ul>{
                allMessages.map( (item, i) => 
                    <li key={ i }>{ item }</li>
                )
            }</ul>

        </>
    );
};
    
export default MessageDisplay;