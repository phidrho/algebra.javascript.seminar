import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }



    render() {
        const { isOpen } = this.state;

        return (
            <div className="container-fluid mt-3">
                <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
                    <div className="sd-header">
                        <h4>Sidebar Header</h4>
                        <div className="btn btn-primary" onClick={this.toggleSidebar}>
                            Close sidebar
                        </div>
                    </div>
                    <div className="sd-body">
                        <ul>
                            <li><Link to="/" className="sd-link">Chat</Link></li>
                            <li><Link to="/about/" className="sd-link">About</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen === true ? "active" : ""}`} onClick={this.toggleSidebar}></div>
            </div>
        )
    }
}

export default Sidebar;
