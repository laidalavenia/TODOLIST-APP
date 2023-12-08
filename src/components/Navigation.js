import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <center>
        <h1>
          <Link to="/">Todos App</Link>
        </h1>
      </center>
    </>
  );
}

export default Navigation;
