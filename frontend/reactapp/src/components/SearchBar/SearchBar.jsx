import React from 'react';
import './SearchBar.styles.scss';

function SearchBar() {
  return (
    <div className="container">
      <div id="wrap">
        <form action="" autoComplete="on" />
        <input id="search" name="search" type="text" placeholder="Estas buscando un trabajo ?" />
        <input id="search_submit" value="Rechercher" type="submit" />
      </div>
    </div>
  );
}
export default SearchBar;
