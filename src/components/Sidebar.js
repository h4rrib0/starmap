import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/hyades">Hyades Star Stories</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
