import React from 'react';
import './Filter.styles.scss';

function Filter() {
  return (
    <div className="container">
      <p>
        Buscar
      </p>
      <div className="form__group field">
        <input type="input" className="form__field" placeholder="Buscar" name="name" id="name" />
      </div>
      <p>
        por :
      </p>
      <form className="formcheck">
        <label className="labelcheck" htmlFor="producto">
          <input id="producto" type="checkbox" name="producto" />
          <span>Producto/servicio</span>
        </label>
        <label className="labelcheck" htmlFor="vendedor">
          <input id="vendedor" type="checkbox" name="vendedor" />
          <span>Vendedor</span>
        </label>
        <label className="labelcheck" htmlFor="tag">
          <input id="tag" type="checkbox" name="tag" />
          <span>Tag</span>
        </label>
      </form>
    </div>
  );
}

export default Filter;
