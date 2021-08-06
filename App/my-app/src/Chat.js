import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert} from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

import "./Chat.css";

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMessage = (event) => {
        event.preventDefault();
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last login at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                    

                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">Michael Andrev</span>
                    Hey Guys
                    <span className="chat__timestamp">12:00 PM</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="Enter a message" value={input} onChange={event => setInput(event.target.Value)}></input>
                    <button type="submit" onClick={sendMessage}></button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
