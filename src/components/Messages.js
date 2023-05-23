import { Component } from "react";
import React from "react";
import uuid from "react-uuid";
import "./Messages.css";

class Messages extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "messages-message current-member"
      : "messages-message";
    return (
      <li className={className} key={uuid()}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

export default Messages;
