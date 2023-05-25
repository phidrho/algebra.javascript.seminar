import { Component } from "react";
import React from "react";
import uuid from "react-uuid";
import "./Messages.css";

class Messages extends Component {
  render() {
    const { messages } = this.props;
    const { avatarImage } = this.props;
    return (
      <ul className="messages-list">
        {messages.map(m => this.renderMessage(m, avatarImage))}
      </ul>
    );
  }

  renderMessage(message, avatarImage) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const liClassName = messageFromMe
      ? "messages-message current-member"
      : "messages-message";
    const msgClassName = messageFromMe
      ? "message is-primary"
      : "message is-info";

    return (
      <li className={liClassName} key={uuid()}>



        <article className={msgClassName}>
          <div className="message-header">
            <div className="media">
              <div className="media-left">
                <figure className="image is-32x32">
                  <img src={avatarImage} alt="avatar" />
                </figure>
              </div>
            </div>

            <p>{member.clientData.username}:</p>
          </div>
          <div className="message-body">
            {text}
          </div>
        </article>


        {/* <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div> */}


      </li>
    );
  }
}

export default Messages;
