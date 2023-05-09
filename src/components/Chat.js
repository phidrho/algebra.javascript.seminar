import React from 'react';
import './Chat.css';
import Messages from './Messages';
import Input from './Input';
import Sidebar from './Sidebar';


function randomName() {
  const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
  const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFA).toString(16);
}


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
      color: randomColor()
    }
  }

  onSendMessage = (message) => {
    if (message.length === 0) return; // quick fix for sending empty message
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  toggleSidebar = () => {
    this.sidebar.toggleSidebar();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <button className='sidebar-btn' onClick={this.toggleSidebar}>Sidebar</button>
          <h1>Vedranova aplikacija za brbljanje putem Interneta! - {this.props.username}</h1>
          {/* prazan div ispod služi za flex pozicioniranje elemenata na headeru - 3 elementa na punu širinu ekrana tj. lijevo sredina desno - (tipka sidebar + naslov + prazan div) */}
          <div></div>
        </div>
        <Sidebar ref={(reference) => (this.sidebar = reference)} />
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />

        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default Chat;
