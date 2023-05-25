import { Component } from "react";
import React from "react";

class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault(); //spriječavamo ponovno renderiranje komponente jer bi forma automatski tražila ponovno renderiranje nakon slanja
    this.setState({ text: "" });
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <>
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="field has-addons">
            <p className="control is-expanded">
              <input
                className="input"
                type="text"
                onChange={e => this.onChange(e)}
                value={this.state.text}
                name="message-box"
                id="message-box"
                placeholder="Unesi tekst poruke"
                autoFocus={true}
              />
            </p>
            <p className="control">
              <input className="button is-success" type="submit" name="message-send" id="message-send" value="Pošalji" />
            </p>
          </div>
        </form>
      </>

    );
  }
}

export default Input;
