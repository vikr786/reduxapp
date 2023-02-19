import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";


function Home() {
  return (
    <div className="page">
      <h1>Welcome to the React App</h1>
      <p>Click the button below to get started.</p>
      <Link to="/page1">
        <button>First Page</button>
      </Link>
    </div>
  );
}

export default Home;
