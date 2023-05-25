import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

import './App.css';

const imageUrlToBase64 = async url => {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((onSuccess, onError) => {
    try {
      const reader = new FileReader();
      reader.onload = function () { onSuccess(this.result) };
      reader.readAsDataURL(blob);
    } catch (e) {
      onError(e);
    }
  });
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      avatarImage: "",
    };

    this.avatarImageBaza64 = "";

    imageUrlToBase64('https://picsum.photos/128')
      .then(rezultat => {
        this.avatarImageBaza64 = rezultat;
      });

    setTimeout(this.setAvatarState, 1000);
  }

  setAvatarState = () => {
    this.state.avatarImage = this.avatarImageBaza64;
    // console.log(this.state);
  }

  sleep = ms => new Promise(r => setTimeout(r, ms));

  handleLogin = (username) => {
    this.setState({
      username: username,
    });
  }

  handleLogout = () => {
    this.setState({ username: "" });
  }

  render() {
    return (
      <div id="website">
        <Routes>

          <Route
            path="/algebra.javascript.seminar/"
            element={
              this.state.username
                ? <>
                  <header>
                    <Header username={this.state.username} handleLogout={this.handleLogout} />
                  </header>
                  <div id="app">
                    <aside>
                      <Sidebar ref={(reference) => (this.sidebar = reference)} />
                    </aside>
                    <main id="chat-view">
                      <Chat username={this.state.username} avatarImage={this.state.avatarImage} />
                    </main>
                  </div>
                </>
                : <Navigate to="/algebra.javascript.seminar/login" />
            }
          />

          <Route
            path="/algebra.javascript.seminar/login"
            element={<>
              <header className="login">
                <Header username={this.state.username} handleLogout={this.handleLogout} />
              </header>
              <Login onLogin={this.handleLogin} />

            </>}
          />

          <Route
            path="/algebra.javascript.seminar/about"
            element={
              this.state.username
                ? <>
                  <header>
                    <Header username={this.state.username} handleLogout={this.handleLogout} />
                  </header>
                  <div id="app">
                    <aside>
                      <Sidebar ref={(reference) => (this.sidebar = reference)} />
                    </aside>
                    <main id="app-view">
                      <About />
                    </main>
                  </div>
                </>
                : <Navigate to="/algebra.javascript.seminar/login" />
            }
          />

        </Routes>
        <footer>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default App;
