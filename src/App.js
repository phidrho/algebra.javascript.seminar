import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleLogin = (username) => {
    this.setState({ username });
  }

  handleLogout = () => {
    this.setState({ username: "" });
  }

  render() {
    return (
      <div id="website">
        <header>
          <Header username={this.state.username} handleLogout={this.handleLogout} />
        </header>
        <div id="app">
            <Routes>

              <Route
                path="/algebra.javascript.seminar/"
                element={
                  this.state.username
                  ? <>
                      <aside>
                        <Sidebar ref={(reference) => (this.sidebar = reference)} />
                      </aside>
                      <main id="chat-view">
                        <Chat username={this.state.username} />
                      </main>
                    </>
                  : <Navigate to="/algebra.javascript.seminar/login" />
                }
              />

              <Route
                path="/algebra.javascript.seminar/login"
                element={<Login onLogin={this.handleLogin} />}
              />

              <Route
                path="/algebra.javascript.seminar/about"
                element={
                  this.state.username
                  ? <>
                      <aside>
                        <Sidebar ref={(reference) => (this.sidebar = reference)} />
                      </aside>
                      <main id="app-view">
                        <About />
                      </main>
                    </>
                  : <Navigate to="/algebra.javascript.seminar/login" />
                }
              />

            </Routes>
        </div>
        <footer>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default App;
