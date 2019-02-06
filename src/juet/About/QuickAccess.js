import React from 'react';
import {Link} from 'react-router-dom'

export const QuickAccess = (props) => {

    return (
        <div className="About__QuickAccess">
          <h3>Quick Access</h3>
          <ul>
              <li className="__heading">University</li>
              <li><Link to="/About">About us</Link></li>
              <li><Link to="/MissionVision">Mission &amp; Vision</Link></li>
              <li><Link to="/JPGroup">Jaypee Group</Link></li>
              <li><Link to="/ChancellorMessage">Message From Chancellor</Link></li>
              <li><Link to="/JSS">JSS</Link></li>
              <li><Link to="/Administration">Administration</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
              <li><Link to="/Staff">Staff</Link></li>
          </ul>
        </div>
    )
}
