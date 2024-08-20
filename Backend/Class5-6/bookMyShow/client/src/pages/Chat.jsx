import { useEffect, useRef, useState } from "react";
import { socket } from "../App";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const textboxRef = useRef('');

    useEffect(() => {
        socket.on('message', (msg) => {
            console.log(msg);
            setMessages((prevMsg) => [...prevMsg, msg]);
        });
    }, []);

    const sendMessage = (e) => {
        if(e.key === "Enter") {
            socket.emit('message', textboxRef.current.value);
            textboxRef.current.value = '';
        }
    }

    return (
        <div style={{ padding: '40px'}}>
            <h1>Chat Group</h1>
            <ul>
                {messages.map(msg => (
                    <li>{msg}</li>
                ))}
            </ul>
            <textarea ref={textboxRef} onKeyDown={sendMessage} style={{ border: '1px solid #ccc'}}></textarea>
        </div>
    );
}

export default Chat;