import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
