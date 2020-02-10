import React from 'react';
import './../styles/components/app.scss';

const Header = () => (
  <header className="nav-bar">
    <div className="nav-bounds">
      <a className="nav-logo" href="http://localhost:3000"></a>
      <form className="nav-search" action="/items" method="GET">
        <input
          type="text"
          className="search-input"
          name="search"
          placeholder="Nunca dejes de buscar"
        />
        <button type="submit" className="search-btn">
          <div className="icon-search" />
        </button>
      </form>
    </div>
  </header>
);

export default Header;
