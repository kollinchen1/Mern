import react, { useState } from 'react';
    
    
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage( msg );
        // what should we do with the message?
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <input 
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value)}
                value={ msg }
            ></input>
            <input type="submit" value="Send Message" />
        </form>
    );
};
    
export default MessageForm;