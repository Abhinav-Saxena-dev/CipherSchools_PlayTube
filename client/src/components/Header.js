import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>Video Streaming Site</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
