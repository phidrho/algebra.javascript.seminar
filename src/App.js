import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './components/About';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleLogin = (username) => {
    this.setState({ username });
  }

  toggleSidebar = () => {
    this.sidebar.toggleSidebar();
  }

  handleLogout = () => {
    this.setState({ username: "" });
  }

  render() {
    return (
      <div className="App">
        <Header toggleSidebar={this.toggleSidebar} username={this.state.username} handleLogout={this.handleLogout} />
        <Sidebar ref={(reference) => (this.sidebar = reference)} />
        <Routes>
          <Route path="/" element={this.state.username ? <Chat username={this.state.username} /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={this.handleLogin} />} />
          <Route path="/about" element={this.state.username ? <About /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    );
  }
}

export default App;
