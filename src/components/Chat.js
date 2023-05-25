import React from 'react';
import Messages from './Messages';
import Input from './Input';
import '../App.css';

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.drone = new window.Scaledrone("cY0ZcGqYDQ4JF5Wi", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    // ---
    const room = this.drone.subscribe("observable-room");
    // ---
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  state = {
    messages: [],
    member: {
      username: this.props.username,
    },
    avatarImage: this.props.avatarImage
  }

  onSendMessage = (message) => {
    if (message.length === 0) return; // quick fix for sending empty message
    this.drone.publish({
      room: "observable-room",
      message
    });
    const chatHistory = document.getElementById("chat");
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  render() {
    return (
        <>
          <div id="chat">
            <Messages
              messages={this.state.messages}
              currentMember={this.state.member}
              avatarImage={this.state.avatarImage}
            />
          </div>

          <div id="message-input-box">
            <Input onSendMessage={this.onSendMessage} />
          </div>
        </>
    );
  }
}

export default Chat;
