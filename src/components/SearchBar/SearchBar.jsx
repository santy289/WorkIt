import React from 'react';
import './SearchBar.styles.scss';

function SearchBar() {
  return (
    <div className="container">
      <div className="container__wrap">
        <form action="" autoComplete="on" />
        <input className="searchbar__text" id="search" name="search" type="text" placeholder="¿Qué servicio buscas?" />
        <input className="searchbar__submit" value="Rechercher" type="submit" />
      </div>
    </div>
  );
}
export default SearchBar;
