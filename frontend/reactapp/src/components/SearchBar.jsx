import React from 'react';
import './searchbar.css';
const SearchBar =()=>{
    return(
        <div id="wrap">
        <form action="" autocomplete="on"/>
        <input id="search" name="search" type="text" placeholder="Estas buscando un trabajo ?"/><input id="search_submit" value="Rechercher" type="submit"/>
        
        </div>
    )
}

export default SearchBar;