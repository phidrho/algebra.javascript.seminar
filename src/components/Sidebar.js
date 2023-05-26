import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

    render() {
        return (
            <>
                <div className="has-tooltip-right" data-tooltip="Čavrljaonica">
                    <Link to="/algebra.javascript.seminar/"><span className="iconify has-tooltip-right" data-icon="mdi:chat" data-inline="false"></span></Link>
                </div>
                <div className="has-tooltip-right" data-tooltip="O aplikaciji">
                    <Link to="/algebra.javascript.seminar/about/"><span className="iconify" data-icon="mdi:about" data-inline="false"></span></Link>
                </div>
            </>
        )
    }
}

export default Sidebar;
