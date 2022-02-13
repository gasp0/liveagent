import React from "react";
import Message from "./ChatData/Message";
import { useState, useEffect } from "react";
import "./Chat.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Chat = () => {
  const [chatMsgs, setChatMsgs] = useState([]);

  // load JSON

  useEffect(() => {
    fetch("https://myjson.dit.upm.es/api/bins/igrp")
      .then((response) => response.json())
      .then((data) => {
        setChatMsgs(randomChat(data));
      });
  }, []);

  // Select random chat
  const randomChat = (data) => {
    // Get object lenght
    let count = data.length;
    // Get random key from object
    let selectedChat = data[Math.floor(Math.random() * count)];
    return selectedChat;
  };

  return (
    <TransitionGroup component="div" className="chat">
      {chatMsgs.map((msg) => (
        <CSSTransition key={msg.id} timeout={800} classNames="msg">
          <Message
            key={msg.id}
            who={msg.who}
            face={msg.face}
            text={msg.text}
            typing={msg.typing}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default Chat;
